"use client";
import React, { useState } from "react";
import { Upload, File, X, CheckCircle2 } from "lucide-react";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  acceptedTypes?: string;
  label: string;
}

export default function FileUpload({
  onFileSelect,
  acceptedTypes = "*",
  label,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative group cursor-pointer p-12 rounded-[2rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center
          ${
            dragActive
              ? "border-indigo-500 bg-indigo-500/10 scale-[1.02]"
              : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/60"
          }`}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={(e) => e.target.files && setSelectedFile(e.target.files[0])}
          accept={acceptedTypes}
        />

        {!selectedFile ? (
          <>
            <div className="p-4 bg-indigo-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-slate-200">
              {label}
            </h3>
            <p className="text-slate-500 text-sm">
              Drag and drop or click to browse
            </p>
          </>
        ) : (
          <div className="flex items-center gap-4 w-full bg-slate-800/50 p-4 rounded-2xl border border-slate-700 animate-in fade-in zoom-in duration-300">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium text-slate-200 truncate">
                {selectedFile.name}
              </p>
              <p className="text-xs text-slate-500">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelectedFile(null);
              }}
              className="p-1 hover:bg-slate-700 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
