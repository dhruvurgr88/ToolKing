"use client";

import React, { useState } from "react";
import * as pdfjs from "pdfjs-dist";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import {
  FileUp,
  FileText,
  Download,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  RefreshCcw,
} from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfToWordClient() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [convertedBlob, setConvertedBlob] = useState<Blob | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setError("");
      setConvertedBlob(null);
    }
  };

  const convertPdfToWord = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError("");

    try {
      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;

      const wordSections = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(" ");

        wordSections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `--- Page ${i} ---`,
                bold: true,
                size: 24,
                color: "4F46E5",
              }),
              new TextRun({
                text: `\n\n${pageText || "[No readable text found]"}`,
                size: 22,
              }),
            ],
            spacing: { after: 400, before: 200 },
          }),
        );
      }

      const doc = new Document({ sections: [{ children: wordSections }] });
      const blob = await Packer.toBlob(doc);

      // Artificial delay for UI feel
      setTimeout(() => {
        setConvertedBlob(blob);
        setIsProcessing(false);
      }, 1500);
    } catch (err) {
      setError("Failed to convert. PDF might be protected or image-only.");
      setIsProcessing(false);
    }
  };

  const downloadFile = () => {
    if (convertedBlob && file) {
      saveAs(convertedBlob, `${file.name.replace(".pdf", "")}_ToolKing.docx`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] p-10 md:p-16 shadow-2xl border border-slate-200 dark:border-slate-800 relative">
        {/* --- LOADER OVERLAY --- */}
        {isProcessing && (
          <div className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-6">
            <div className="relative">
              <Loader2
                className="animate-spin text-indigo-600"
                size={80}
                strokeWidth={1.5}
              />
              <RefreshCcw
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-300 animate-reverse-spin"
                size={30}
              />
            </div>
            <p className="text-sm font-black uppercase tracking-[0.4em] text-indigo-600 animate-pulse">
              Converting Layout...
            </p>
          </div>
        )}

        {/* --- TOOL CONTENT --- */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-10 inline-flex p-5 rounded-[2rem] bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600">
            <ShieldCheck size={40} />
          </div>

          {!convertedBlob ? (
            <div className="w-full space-y-10">
              <label
                className={`block border-4 border-dashed rounded-[3rem] p-16 transition-all cursor-pointer ${
                  file
                    ? "border-indigo-500 bg-indigo-50/20 shadow-inner"
                    : "border-slate-100 dark:border-slate-800 hover:border-indigo-300"
                }`}
              >
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="flex flex-col items-center gap-6">
                  {file ? (
                    <>
                      <FileText
                        size={60}
                        className="text-indigo-600 animate-bounce"
                      />
                      <div className="space-y-1">
                        <p className="text-sm font-black text-slate-800 dark:text-slate-100">
                          {file.name}
                        </p>
                        <p className="text-[10px] uppercase font-bold text-slate-400">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <FileUp size={60} className="text-slate-200" />
                      <p className="text-sm font-bold text-slate-400">
                        Select PDF or Drag & Drop
                      </p>
                    </>
                  )}
                </div>
              </label>

              <button
                onClick={convertPdfToWord}
                disabled={!file}
                className="w-full py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.25em] shadow-xl shadow-indigo-200 dark:shadow-none disabled:opacity-30 transition-all active:scale-95"
              >
                Convert to Word Now
              </button>
            </div>
          ) : (
            /* --- DOWNLOAD STATE --- */
            <div className="w-full space-y-10 animate-in zoom-in-95 duration-500">
              <div className="p-10 bg-emerald-50 dark:bg-emerald-900/10 rounded-[3rem] border border-emerald-100 dark:border-emerald-900/20 flex flex-col items-center">
                <CheckCircle2 size={60} className="text-emerald-500 mb-4" />
                <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  Ready for Download!
                </h4>
              </div>

              <div className="grid gap-4">
                <button
                  onClick={downloadFile}
                  className="w-full py-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.25em] shadow-xl flex items-center justify-center gap-3"
                >
                  <Download size={20} /> Download DOCX
                </button>
                <button
                  onClick={() => {
                    setFile(null);
                    setConvertedBlob(null);
                  }}
                  className="text-[10px] font-black uppercase text-slate-400 hover:text-indigo-600 underline tracking-widest"
                >
                  Start New Conversion
                </button>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-8 p-4 bg-rose-50 dark:bg-rose-900/10 rounded-2xl flex items-center gap-3 text-rose-500 font-bold text-xs uppercase italic border border-rose-100 dark:border-rose-900/20">
            <AlertCircle size={18} /> {error}
          </div>
        )}
      </div>
    </div>
  );
}
