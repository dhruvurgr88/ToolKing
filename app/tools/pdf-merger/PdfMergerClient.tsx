"use client";
import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import {
  Upload,
  X,
  Download,
  RotateCcw,
  Loader2,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function PdfMergerClient() {
  const [files, setFiles] = useState<{ file: File; name: string }[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        file,
        name: file.name,
      }));
      setFiles((prev) => [...prev, ...newFiles]);
      setMergedPdfUrl(null);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setMergedPdfUrl(null);
  };

  const mergePdfs = async () => {
    if (files.length < 2) return;
    setIsProcessing(true);

    try {
      const mergedPdf = await PDFDocument.create();

      for (const item of files) {
        const fileArrayBuffer = await item.file.arrayBuffer();
        const pdf = await PDFDocument.load(fileArrayBuffer);
        const copiedPages = await mergedPdf.copyPages(
          pdf,
          pdf.getPageIndices(),
        );
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes as any], { type: "application/pdf" });
      setMergedPdfUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error("Merge Error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-6 md:p-10 shadow-2xl shadow-indigo-500/5">
      <div className="mb-8">
        <label className="relative group cursor-pointer block p-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2.5rem] hover:border-indigo-500 hover:bg-indigo-500/[0.02] transition-all text-center">
          <input
            type="file"
            multiple
            accept=".pdf"
            onChange={handleUpload}
            className="hidden"
          />
          <Upload className="w-12 h-12 text-indigo-500 mx-auto mb-4 group-hover:-translate-y-1 transition-transform" />
          <h2 className="text-xl font-bold mb-1">Upload PDF Documents</h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest italic">
            Select 2 or more files
          </p>
        </label>
      </div>

      {files.length > 0 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="grid grid-cols-1 gap-3">
            {files.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 group"
              >
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="p-2 bg-red-500/10 text-red-500 rounded-lg">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold truncate max-w-[200px] md:max-w-md">
                    {item.name}
                  </span>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4 pt-4">
            {!mergedPdfUrl ? (
              <button
                onClick={mergePdfs}
                disabled={isProcessing || files.length < 2}
                className="flex-grow py-5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-300 text-white rounded-2xl font-black text-xl shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" /> MERGING PDFS...
                  </>
                ) : files.length < 2 ? (
                  "ADD MORE FILES"
                ) : (
                  "MERGE DOCUMENTS"
                )}
              </button>
            ) : (
              <>
                <a
                  href={mergedPdfUrl}
                  download="ToolKing-Merged.pdf"
                  className="flex-grow py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-xl shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-3 animate-in zoom-in-95 duration-300"
                >
                  <Download className="w-6 h-6" /> DOWNLOAD MERGED PDF
                </a>
                <button
                  onClick={() => {
                    setFiles([]);
                    setMergedPdfUrl(null);
                  }}
                  className="px-8 py-5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
