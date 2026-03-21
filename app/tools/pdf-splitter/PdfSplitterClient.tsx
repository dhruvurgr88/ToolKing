"use client";
import React, { useState, useEffect } from "react";
import { PDFDocument } from "pdf-lib";
import {
  Upload,
  Scissors,
  Download,
  FileText,
  X,
  AlertCircle,
  CheckCircle,
  FileDown,
  Layers,
  Hash,
  Maximize,
  Settings2,
  ShieldCheck,
  Zap,
  Combine,
} from "lucide-react";

type SplitMode = "custom" | "fixed" | "size";

interface GeneratedFile {
  name: string;
  url: string;
  size: string;
}

export default function PdfSplitterClient() {
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState<SplitMode>("custom");
  const [inputValue, setInputValue] = useState("");
  const [maxSize, setMaxSize] = useState(5);
  const [allowCompression, setAllowCompression] = useState(true);
  const [mergeRanges, setMergeRanges] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedFiles, setGeneratedFiles] = useState<GeneratedFile[]>([]);

  useEffect(() => {
    return () => generatedFiles.forEach((f) => URL.revokeObjectURL(f.url));
  }, [generatedFiles]);

  const formatSize = (bytes: number) =>
    (bytes / (1024 * 1024)).toFixed(2) + " MB";

  const processPdf = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    setGeneratedFiles([]);

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
          cleanPdf.setCreator("ToolKing.online");
          bytes = await cleanPdf.save();
        }
        return new Uint8Array(bytes);
      };

      if (mode === "custom") {
        const ranges = inputValue.split(",").map((r) => r.trim());
        const masterPdf = await PDFDocument.create();
        let pagesAddedToMaster = 0;

        for (const range of ranges) {
          const [start, end] = range.includes("-")
            ? range.split("-").map(Number)
            : [Number(range), Number(range)];
          if (isNaN(start) || start < 1 || (end && end > totalPages))
            throw new Error(`Invalid range: ${range}`);

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
            results.push({
              name: `Range-${range}-${file.name}`,
              url: URL.createObjectURL(
                new Blob([cleanedBytes], { type: "application/pdf" }),
              ),
              size: formatSize(cleanedBytes.length),
            });
          }
        }

        if (mergeRanges && pagesAddedToMaster > 0) {
          const cleanedBytes = await saveAndClean(masterPdf);
          results.push({
            name: `Merged-Custom-${file.name}`,
            url: URL.createObjectURL(
              new Blob([cleanedBytes], { type: "application/pdf" }),
            ),
            size: formatSize(cleanedBytes.length),
          });
        }
      } else if (mode === "fixed") {
        const interval = parseInt(inputValue);
        if (isNaN(interval) || interval < 1)
          throw new Error("Enter a valid page interval.");
        for (let i = 0; i < totalPages; i += interval) {
          const newPdf = await PDFDocument.create();
          const end = Math.min(i + interval, totalPages);
          const indices = Array.from({ length: end - i }, (_, k) => i + k);
          const copiedPages = await newPdf.copyPages(pdfDoc, indices);
          copiedPages.forEach((p) => newPdf.addPage(p));
          const cleanedBytes = await saveAndClean(newPdf);
          results.push({
            name: `Pages-${i + 1}-to-${end}-${file.name}`,
            url: URL.createObjectURL(
              new Blob([cleanedBytes], { type: "application/pdf" }),
            ),
            size: formatSize(cleanedBytes.length),
          });
        }
      } else if (mode === "size") {
        let currentPdf = await PDFDocument.create();
        const targetBytes = maxSize * 1024 * 1024;
        for (let i = 0; i < totalPages; i++) {
          const [page] = await currentPdf.copyPages(pdfDoc, [i]);
          currentPdf.addPage(page);
          const currentBytes = await currentPdf.save();
          if (
            currentBytes.length > targetBytes &&
            currentPdf.getPageCount() > 1
          ) {
            currentPdf.removePage(currentPdf.getPageCount() - 1);
            const finalizedBytes = await saveAndClean(currentPdf);
            results.push({
              name: `Part-${results.length + 1}-${file.name}`,
              url: URL.createObjectURL(
                new Blob([finalizedBytes], { type: "application/pdf" }),
              ),
              size: formatSize(finalizedBytes.length),
            });
            currentPdf = await PDFDocument.create();
            const [retryPage] = await currentPdf.copyPages(pdfDoc, [i]);
            currentPdf.addPage(retryPage);
          }
        }
        const lastBytes = await saveAndClean(currentPdf);
        results.push({
          name: `Final-Part-${file.name}`,
          url: URL.createObjectURL(
            new Blob([lastBytes], { type: "application/pdf" }),
          ),
          size: formatSize(lastBytes.length),
        });
      }
      setGeneratedFiles(results);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20">
      {/* MODE SELECTOR */}
      <div className="flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-[2rem] max-w-md mx-auto shadow-inner">
        {(["custom", "fixed", "size"] as SplitMode[]).map((m) => (
          <button
            key={m}
            onClick={() => {
              setMode(m);
              setGeneratedFiles([]);
              setError(null);
            }}
            className={`flex-1 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${mode === m ? "bg-white dark:bg-slate-800 text-rose-600 shadow-md scale-105" : "text-slate-500 hover:text-slate-800"}`}
          >
            {m === "custom" && <Layers className="w-3 h-3" />}
            {m === "fixed" && <Hash className="w-3 h-3" />}
            {m === "size" && <Maximize className="w-3 h-3" />}
            {m}
          </button>
        ))}
      </div>

      {/* TOOL CORE */}
      <div className="bg-white dark:bg-slate-950 p-8 md:p-12 rounded-[3.5rem] border-2 border-slate-100 dark:border-slate-800 shadow-2xl space-y-8">
        {!file ? (
          <label className="flex flex-col items-center justify-center h-72 border-4 border-dashed border-slate-200 dark:border-slate-800 rounded-[3rem] cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-all group">
            <Upload className="w-12 h-12 text-slate-300 group-hover:text-rose-500 mb-4 transition-colors" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Upload PDF
            </span>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="hidden"
            />
          </label>
        ) : (
          <div className="flex items-center justify-between p-5 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-800/30 rounded-3xl">
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
                {mode === "custom" && "Extract ranges (e.g. 1-4, 7-10)"}
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
                    ? "1-5, 8-12"
                    : mode === "fixed"
                      ? "e.g. 2"
                      : "e.g. 10"
                }
                className="w-full max-w-sm px-8 py-6 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border-2 border-transparent focus:border-rose-500 outline-none transition-all text-center font-black text-3xl shadow-inner"
              />
            </div>

            <div className="flex flex-col items-center gap-4 py-6 border-t border-slate-50 dark:border-slate-900">
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
                <Settings2 className="w-5 h-5 animate-spin" />
              ) : (
                <Scissors className="w-5 h-5" />
              )}
              {loading ? "IGNITING ENGINE..." : "SPLIT PDF NOW"}
            </button>
          </div>
        )}
      </div>

      {/* DOWNLOAD SECTION */}
      {generatedFiles.length > 0 && (
        <div className="space-y-6 animate-in zoom-in-95 duration-500">
          <div className="flex justify-between items-center px-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">
              Extracted Components
            </h3>
            <button
              onClick={() => setGeneratedFiles([])}
              className="text-[10px] font-black text-rose-500 underline uppercase tracking-widest"
            >
              New Project
            </button>
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
    </div>
  );
}
