"use client";
import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import {
  Upload,
  X,
  Download,
  RotateCcw,
  Loader2,
  GripVertical,
} from "lucide-react";

export default function ImageToPdfClient() {
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setImages((prev) => [...prev, ...newFiles]);
      setPdfUrl(null);
    }
  };

  const removeImage = (index: number) => {
    const updated = [...images];
    URL.revokeObjectURL(updated[index].preview);
    updated.splice(index, 1);
    setImages(updated);
    setPdfUrl(null);
  };

  const generatePdf = async () => {
    if (images.length === 0) return;
    setIsProcessing(true);

    try {
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < images.length; i++) {
        const img = await new Promise<HTMLImageElement>((resolve) => {
          const image = new Image();
          image.onload = () => resolve(image);
          image.src = images[i].preview;
        });

        const ratio = img.width / img.height;
        let printWidth = pageWidth - 20;
        let printHeight = printWidth / ratio;

        if (printHeight > pageHeight - 20) {
          printHeight = pageHeight - 20;
          printWidth = printHeight * ratio;
        }

        // FEATURE 6: QUALITY FIX (Detect PNG vs JPEG)
        const format = images[i].file.type.includes("png") ? "PNG" : "JPEG";

        if (i > 0) pdf.addPage();
        pdf.addImage(
          img,
          format,
          10,
          10,
          printWidth,
          printHeight,
          undefined,
          "FAST",
        );
      }

      const blob = pdf.output("blob");
      setPdfUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-6 md:p-10 shadow-2xl shadow-indigo-500/5">
      {/* UPLOAD ZONE */}
      <div className="mb-8">
        <label className="relative group cursor-pointer block p-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2.5rem] hover:border-indigo-500 hover:bg-indigo-500/[0.02] transition-all text-center">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
          <Upload className="w-12 h-12 text-indigo-500 mx-auto mb-4 group-hover:-translate-y-1 transition-transform" />
          <h2 className="text-xl font-bold mb-1">Add Your Images</h2>
          <p className="text-slate-400 text-xs font-medium">
            JPG • PNG • WEBP supported
          </p>
        </label>
      </div>

      {images.length > 0 && (
        <div className="space-y-8">
          {/* FEATURE 5: DRAG/GRID PREVIEW */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm"
              >
                <img
                  src={img.preview}
                  className="w-full h-full object-cover"
                  alt="Sort"
                />
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => removeImage(index)}
                    className="p-1.5 bg-red-500 text-white rounded-lg shadow-lg hover:scale-110 transition-transform"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 text-[10px] text-white rounded-md backdrop-blur-sm">
                  Page {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4">
            {!pdfUrl ? (
              <button
                onClick={generatePdf}
                disabled={isProcessing}
                className="flex-grow py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-xl shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                {/* FEATURE 7: LOADING PROGRESS */}
                {isProcessing ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" /> GENERATING...
                  </>
                ) : (
                  "GENERATE PDF"
                )}
              </button>
            ) : (
              <>
                <a
                  href={pdfUrl}
                  download="ToolKing-Export.pdf"
                  className="flex-grow py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-xl shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-3 animate-in zoom-in-95 duration-300"
                >
                  <Download className="w-6 h-6" /> DOWNLOAD PDF
                </a>
                <button
                  onClick={() => {
                    setImages([]);
                    setPdfUrl(null);
                  }}
                  className="px-8 py-5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" /> START OVER
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
