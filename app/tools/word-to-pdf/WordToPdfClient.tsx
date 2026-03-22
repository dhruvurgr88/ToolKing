"use client";

import React, { useState } from "react";
import mammoth from "mammoth";
import { jsPDF } from "jspdf";
import {
  FileUp,
  FileType,
  Download,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  RefreshCcw,
} from "lucide-react";

export default function WordToPdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [convertedPdf, setConvertedPdf] = useState<jsPDF | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (
      selected &&
      (selected.name.endsWith(".docx") || selected.name.endsWith(".doc"))
    ) {
      setFile(selected);
      setError("");
      setConvertedPdf(null);
    } else {
      setError("Please upload a valid Word (.docx) file.");
    }
  };

  const convertWordToPdf = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError("");

    try {
      const arrayBuffer = await file.arrayBuffer();

      // Extract text from DOCX
      const result = await mammoth.extractRawText({ arrayBuffer });
      const text = result.value;

      if (!text.trim()) throw new Error("Document is empty.");

      // Initialize jsPDF
      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
      });

      // Handle multi-page text wrapping
      const margin = 15;
      const pageWidth = pdf.internal.pageSize.width - margin * 2;
      const splitText = pdf.splitTextToSize(text, pageWidth);

      pdf.text(splitText, margin, 20);

      // UI Feel Delay
      setTimeout(() => {
        setConvertedPdf(pdf);
        setIsProcessing(false);
      }, 2000);
    } catch (err: any) {
      setError("Conversion failed. Ensure the file is a valid Word document.");
      setIsProcessing(false);
    }
  };

  const downloadPdf = () => {
    if (convertedPdf && file) {
      convertedPdf.save(`${file.name.replace(/\.[^/.]+$/, "")}_ToolKing.pdf`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] p-10 md:p-16 shadow-2xl border border-slate-200 dark:border-slate-800 relative">
        {/* --- SIGNATURE LOADER --- */}
        {isProcessing && (
          <div className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-6 rounded-[3.5rem]">
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
              Building PDF Layers...
            </p>
          </div>
        )}

        <div className="flex flex-col items-center text-center">
          <div className="mb-10 inline-flex p-5 rounded-[2rem] bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600">
            <ShieldCheck size={40} />
          </div>

          {!convertedPdf ? (
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
                  accept=".docx,.doc"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="flex flex-col items-center gap-6">
                  {file ? (
                    <>
                      <FileType
                        size={60}
                        className="text-indigo-600 animate-bounce"
                      />
                      <div className="space-y-1">
                        <p className="text-sm font-black text-slate-800 dark:text-slate-100">
                          {file.name}
                        </p>
                        <p className="text-[10px] uppercase font-bold text-slate-400">
                          Word Document Ready
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <FileUp size={60} className="text-slate-200" />
                      <p className="text-sm font-bold text-slate-400">
                        Click to Select Word File
                      </p>
                    </>
                  )}
                </div>
              </label>

              <button
                onClick={convertWordToPdf}
                disabled={!file}
                className="w-full py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.25em] shadow-xl disabled:opacity-30 transition-all active:scale-95"
              >
                Convert to PDF
              </button>
            </div>
          ) : (
            /* --- SUCCESS STATE --- */
            <div className="w-full space-y-10 animate-in zoom-in-95 duration-500">
              <div className="p-10 bg-emerald-50 dark:bg-emerald-900/10 rounded-[3rem] border border-emerald-100 dark:border-emerald-900/20 flex flex-col items-center">
                <div className="relative mb-4">
                  <CheckCircle2
                    size={60}
                    className="text-emerald-500 relative z-10"
                  />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-ping" />
                </div>
                <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  Conversion Success
                </h4>
              </div>

              <div className="grid gap-4">
                <button
                  onClick={downloadPdf}
                  className="group relative w-full py-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.25em] shadow-xl flex items-center justify-center gap-3 overflow-hidden animate-button-glow transition-all active:scale-95"
                >
                  <Download
                    size={20}
                    className="group-hover:translate-y-1 transition-transform"
                  />
                  Download Your PDF
                </button>
                <button
                  onClick={() => {
                    setFile(null);
                    setConvertedPdf(null);
                  }}
                  className="text-[10px] font-black uppercase text-slate-400 hover:text-indigo-600 transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCcw size={12} /> Convert Another File
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
