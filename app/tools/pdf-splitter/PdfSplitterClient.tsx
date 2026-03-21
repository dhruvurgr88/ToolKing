"use client";
import React, { useState, useEffect, useRef } from "react";
import { PDFDocument } from "pdf-lib";
import JSZip from "jszip";
import {
  Upload,
  Scissors,
  Download,
  FileText,
  X,
  AlertCircle,
  FileDown,
  Layers,
  Hash,
  Maximize,
  Settings2,
  ShieldCheck,
  Archive,
  RefreshCw,
} from "lucide-react";

type SplitMode = "custom" | "fixed" | "size";

interface GeneratedFile {
  name: string;
  url: string;
  size: string;
  blob: Blob;
}

export default function PdfSplitterClient() {
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState<SplitMode>("custom");
  const [inputValue, setInputValue] = useState(""); // Used for Custom & Fixed
  const [maxSize, setMaxSize] = useState(5); // Used for Size mode
  const [allowCompression, setAllowCompression] = useState(true);
  const [mergeRanges, setMergeRanges] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [generatedFiles, setGeneratedFiles] = useState<GeneratedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    return () => generatedFiles.forEach((f) => URL.revokeObjectURL(f.url));
  }, [generatedFiles]);

  const formatSize = (bytes: number) =>
    (bytes / (1024 * 1024)).toFixed(2) + " MB";

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const onDragLeave = () => setIsDragging(false);
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type === "application/pdf") setFile(droppedFile);
    else setError("Please drop a valid PDF file.");
  };

  const downloadAllAsZip = async () => {
    const zip = new JSZip();
    generatedFiles.forEach((f) => zip.file(f.name, f.blob));
    const content = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(content);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ToolKing-Split-${file?.name || "Files"}.zip`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const processPdf = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    setGeneratedFiles([]);
    setProgress(0);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const totalPages = pdfDoc.getPageCount();
      const results: GeneratedFile[] = [];

      const saveAndClean = async (doc: PDFDocument) => {
        let bytes = await doc.save({
          useObjectStreams: allowCompression,
          addDefaultPage: false,
        });
        if (allowCompression) {
          const cleanPdf = await PDFDocument.load(bytes);
          cleanPdf.setProducer("ToolKing Engine");
          bytes = await cleanPdf.save();
        }
        return new Uint8Array(bytes);
      };

      // --- MODE 1: CUSTOM RANGES ---
      if (mode === "custom") {
        const ranges = inputValue.split(",").map((r) => r.trim());
        const masterPdf = await PDFDocument.create();
        let pagesAddedToMaster = 0;

        for (let idx = 0; idx < ranges.length; idx++) {
          const range = ranges[idx];
          const [start, end] = range.includes("-")
            ? range.split("-").map(Number)
            : [Number(range), Number(range)];

          if (isNaN(start) || start < 1 || (end && end > totalPages))
            throw new Error(`Invalid range: ${range}`);
          if (end && start > end)
            throw new Error(`Start page cannot be greater than end page`);

          const pageIndices = Array.from(
            { length: (end || start) - start + 1 },
            (_, i) => start + i - 1,
          );

          if (mergeRanges) {
            const copiedPages = await masterPdf.copyPages(pdfDoc, pageIndices);
            copiedPages.forEach((p) => masterPdf.addPage(p));
            pagesAddedToMaster += copiedPages.length;
          } else {
            const newPdf = await PDFDocument.create();
            const copiedPages = await newPdf.copyPages(pdfDoc, pageIndices);
            copiedPages.forEach((p) => newPdf.addPage(p));
            const cleanedBytes = await saveAndClean(newPdf);
            const blob = new Blob([cleanedBytes], { type: "application/pdf" });
            results.push({
              name: `Range-${range}-${file.name}`,
              url: URL.createObjectURL(blob),
              size: formatSize(cleanedBytes.length),
              blob,
            });
          }
          setProgress(Math.round(((idx + 1) / ranges.length) * 100));
        }

        if (mergeRanges && pagesAddedToMaster > 0) {
          const cleanedBytes = await saveAndClean(masterPdf);
          const blob = new Blob([cleanedBytes], { type: "application/pdf" });
          results.push({
            name: `Merged-Custom-${file.name}`,
            url: URL.createObjectURL(blob),
            size: formatSize(cleanedBytes.length),
            blob,
          });
        }

        // --- MODE 2: FIXED INTERVALS ---
      } else if (mode === "fixed") {
        const interval = parseInt(inputValue);
        if (isNaN(interval) || interval < 1)
          throw new Error("Enter a valid page interval (e.g., 2).");

        const chunks = Math.ceil(totalPages / interval);
        for (let i = 0; i < totalPages; i += interval) {
          const newPdf = await PDFDocument.create();
          const end = Math.min(i + interval, totalPages);
          const indices = Array.from({ length: end - i }, (_, k) => i + k);
          const copiedPages = await newPdf.copyPages(pdfDoc, indices);
          copiedPages.forEach((p) => newPdf.addPage(p));

          const cleanedBytes = await saveAndClean(newPdf);
          const blob = new Blob([cleanedBytes], { type: "application/pdf" });
          results.push({
            name: `Pages-${i + 1}-to-${end}-${file.name}`,
            url: URL.createObjectURL(blob),
            size: formatSize(cleanedBytes.length),
            blob,
          });
          setProgress(Math.round(((i + interval) / totalPages) * 100));
        }

        // --- MODE 3: SPLIT BY SIZE ---
      } else if (mode === "size") {
        let currentPdf = await PDFDocument.create();
        const targetBytes = maxSize * 1024 * 1024;

        for (let i = 0; i < totalPages; i++) {
          const [page] = await currentPdf.copyPages(pdfDoc, [i]);
          currentPdf.addPage(page);

          // Test the size after adding this page
          const currentBytes = await currentPdf.save();

          if (
            currentBytes.length > targetBytes &&
            currentPdf.getPageCount() > 1
          ) {
            // Remove the overflow page
            currentPdf.removePage(currentPdf.getPageCount() - 1);
            const finalizedBytes = await saveAndClean(currentPdf);
            const blob = new Blob([finalizedBytes], {
              type: "application/pdf",
            });
            results.push({
              name: `Part-${results.length + 1}-${file.name}`,
              url: URL.createObjectURL(blob),
              size: formatSize(finalizedBytes.length),
              blob,
            });

            // Start new doc with that page
            currentPdf = await PDFDocument.create();
            const [retryPage] = await currentPdf.copyPages(pdfDoc, [i]);
            currentPdf.addPage(retryPage);
          }
          setProgress(Math.round(((i + 1) / totalPages) * 100));
        }
        // Save the final chunk
        const lastBytes = await saveAndClean(currentPdf);
        const lastBlob = new Blob([lastBytes], { type: "application/pdf" });
        results.push({
          name: `Final-Part-${file.name}`,
          url: URL.createObjectURL(lastBlob),
          size: formatSize(lastBytes.length),
          blob: lastBlob,
        });
      }

      setGeneratedFiles(results);
      setProgress(100);
    } catch (err: any) {
      setError(err.message || "An error occurred during splitting.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20">
      {/* MODE TABS */}
      <div className="flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-[2rem] max-w-md mx-auto shadow-inner">
        {(["custom", "fixed", "size"] as SplitMode[]).map((m) => (
          <button
            key={m}
            onClick={() => {
              setMode(m);
              setGeneratedFiles([]);
              setError(null);
              setInputValue("");
            }}
            className={`flex-1 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
              mode === m
                ? "bg-white dark:bg-slate-800 text-rose-600 shadow-md scale-105"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {m === "custom" && <Layers className="w-3 h-3" />}
            {m === "fixed" && <Hash className="w-3 h-3" />}
            {m === "size" && <Maximize className="w-3 h-3" />}
            {m}
          </button>
        ))}
      </div>

      {/* DROPZONE & INPUT */}
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`bg-white dark:bg-slate-950 p-8 md:p-12 rounded-[3.5rem] border-4 border-dashed transition-all shadow-2xl space-y-8 ${
          isDragging
            ? "border-rose-500 bg-rose-50/50 scale-[0.98]"
            : "border-slate-100 dark:border-slate-800"
        }`}
      >
        {!file ? (
          <label className="flex flex-col items-center justify-center h-72 cursor-pointer group">
            <Upload
              className={`w-12 h-12 mb-4 transition-colors ${isDragging ? "text-rose-500 animate-bounce" : "text-slate-300 group-hover:text-rose-500"}`}
            />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              {isDragging
                ? "Drop PDF to Start"
                : "Drag & Drop or Click to Upload PDF"}
            </span>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="hidden"
            />
          </label>
        ) : (
          <div className="flex items-center justify-between p-5 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 rounded-3xl">
            <div className="flex items-center gap-4 text-rose-600 font-bold text-sm">
              <FileText className="w-5 h-5" /> {file.name}
            </div>
            <button
              onClick={() => {
                setFile(null);
                setGeneratedFiles([]);
              }}
              className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-colors text-rose-500"
            >
              <X />
            </button>
          </div>
        )}

        {file && generatedFiles.length === 0 && (
          <div className="animate-in slide-in-from-top-4 space-y-8">
            <div className="text-center space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                {mode === "custom" && "Enter ranges (e.g. 1-4, 7-10)"}
                {mode === "fixed" && "Split every X number of pages"}
                {mode === "size" && "Maximum file size per part (MB)"}
              </h4>
              <input
                type={mode === "size" ? "number" : "text"}
                value={mode === "size" ? maxSize : inputValue}
                onChange={(e) =>
                  mode === "size"
                    ? setMaxSize(Number(e.target.value))
                    : setInputValue(e.target.value)
                }
                placeholder={
                  mode === "custom"
                    ? "1-2, 5-8"
                    : mode === "fixed"
                      ? "e.g. 2"
                      : "e.g. 5"
                }
                className="w-full max-w-sm px-8 py-6 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-rose-500 outline-none text-center font-black text-3xl shadow-inner"
              />
            </div>

            {/* PROGRESS BAR */}
            {loading && (
              <div className="space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                  <span>Processing...</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-rose-500 h-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col items-center gap-4 py-4 border-t border-slate-50 dark:border-slate-900">
              <label className="relative inline-flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={allowCompression}
                  onChange={(e) => setAllowCompression(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 rounded-full peer dark:bg-slate-800 peer-checked:after:translate-x-full peer-checked:bg-rose-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                <span className="ml-3 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-800">
                  Apply Lean Compression
                </span>
              </label>

              {mode === "custom" && (
                <label className="relative inline-flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={mergeRanges}
                    onChange={(e) => setMergeRanges(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 rounded-full peer dark:bg-slate-800 peer-checked:after:translate-x-full peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  <span className="ml-3 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-800">
                    Merge all ranges into one file
                  </span>
                </label>
              )}
            </div>

            <button
              onClick={processPdf}
              disabled={loading}
              className="w-full py-6 bg-slate-900 dark:bg-white text-white dark:text-black rounded-[2.5rem] font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              {loading ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <Scissors className="w-5 h-5" />
              )}
              {loading ? "SPLITTING ENGINE ACTIVE..." : "SPLIT PDF NOW"}
            </button>
          </div>
        )}
      </div>

      {/* DOWNLOADS LIST */}
      {generatedFiles.length > 0 && (
        <div className="space-y-6 animate-in zoom-in-95 duration-500">
          <div className="flex justify-between items-center px-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">
              Extracted Components
            </h3>
            <div className="flex gap-4">
              <button
                onClick={downloadAllAsZip}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-indigo-700 transition-all"
              >
                <Archive className="w-4 h-4" /> Download All (ZIP)
              </button>
              <button
                onClick={() => setGeneratedFiles([])}
                className="text-[10px] font-black text-rose-500 underline uppercase tracking-widest"
              >
                Reset
              </button>
            </div>
          </div>
          <div className="grid gap-4">
            {generatedFiles.map((f, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-rose-500/10 text-rose-600 rounded-2xl flex items-center justify-center font-black text-xs">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-bold text-sm truncate max-w-[180px] md:max-w-xs">
                      {f.name}
                    </p>
                    <p className="text-[10px] font-black text-slate-400 mt-1 uppercase tracking-tighter">
                      {f.size}
                    </p>
                  </div>
                </div>
                <a
                  href={f.url}
                  download={f.name}
                  className="flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-emerald-700 transition-all"
                >
                  <FileDown className="w-4 h-4" /> Save
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className="p-5 bg-rose-50 border border-rose-100 text-rose-600 rounded-[2rem] text-[10px] font-black uppercase tracking-widest text-center">
          <AlertCircle className="w-4 h-4 inline-block mr-2 -mt-1" /> {error}
        </div>
      )}
    </div>
  );
}
