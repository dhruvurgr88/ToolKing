"use client";

import React, { useState } from "react";
import { saveAs } from "file-saver";
import { ShieldCheck, Loader2, FileText, CheckCircle2 } from "lucide-react";

export default function ProtectPdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleProtect = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("File", file!);
      formData.append("Password", password);

      // 🚀 Calling your local Next.js API route instead of Azure directly
      const res = await fetch("/api/protect-pdf", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Processing failed");

      const blob = await res.blob();
      saveAs(blob, `protected_${file?.name}`);
      setDone(true);
    } catch (err) {
      alert("Error protecting PDF. Check server logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-12 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-slate-100">
      <div className="flex flex-col items-center gap-6">
        <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600">
          <ShieldCheck size={40} />
        </div>

        {!done ? (
          <div className="w-full space-y-6">
            <label className="block border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center cursor-pointer">
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
              />
              <FileText className="mx-auto mb-2 text-slate-300" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {file ? file.name : "Select PDF Document"}
              </span>
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-4 bg-slate-50 rounded-xl outline-none font-bold"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleProtect}
              disabled={!file || !password || loading}
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg disabled:opacity-30"
            >
              {loading ? (
                <Loader2 className="animate-spin mx-auto" />
              ) : (
                "Secure PDF Now"
              )}
            </button>
          </div>
        ) : (
          <div className="text-center py-6">
            <CheckCircle2 size={50} className="text-emerald-500 mx-auto mb-4" />
            <h3 className="font-black italic text-xl uppercase">
              Vault Secured!
            </h3>
            <button
              onClick={() => setDone(false)}
              className="mt-4 text-indigo-600 font-bold text-xs uppercase border-b-2 border-indigo-600"
            >
              Protect Another
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
