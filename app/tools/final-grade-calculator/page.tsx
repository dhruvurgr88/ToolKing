"use client";

import React, { useState, useEffect } from "react";
import {
  Calculator,
  Target,
  Percent,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Info,
  Plus,
  Trash2,
  Gauge,
  Lightbulb,
  Save,
  BookOpen,
  FileDown,
  BarChart3,
  GraduationCap,
  Zap,
  Star,
  HelpCircle,
  ChevronRight,
  Share2,
  Copy,
  FileText,
  FileSearch,
} from "lucide-react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import confetti from "canvas-confetti";
import Link from "next/link";

const GRADE_SCALE = [
  { min: 93, label: "A", color: "text-emerald-500", gpa: 4.0 },
  { min: 90, label: "A-", color: "text-emerald-400", gpa: 3.7 },
  { min: 87, label: "B+", color: "text-indigo-400", gpa: 3.3 },
  { min: 83, label: "B", color: "text-indigo-500", gpa: 3.0 },
  { min: 80, label: "B-", color: "text-indigo-600", gpa: 2.7 },
  { min: 77, label: "C+", color: "text-amber-400", gpa: 2.3 },
  { min: 70, label: "C", color: "text-amber-500", gpa: 2.0 },
  { min: 0, label: "F", color: "text-red-500", gpa: 0.0 },
];

type Category = { id: string; name: string; weight: string; score: string };
type SavedClass = {
  name: string;
  categories: Category[];
  target: string;
  credits: string;
};

export default function UltimateGradeCalculator() {
  const [mode, setMode] = useState<"simple" | "breakdown">("simple");
  const [currentGrade, setCurrentGrade] = useState<string>("88");
  const [targetGrade, setTargetGrade] = useState<string>("90");
  const [finalWeight, setFinalWeight] = useState<string>("20");
  const [credits, setCredits] = useState<string>("3");
  const [newClassName, setNewClassName] = useState("");
  const [savedClasses, setSavedClasses] = useState<SavedClass[]>([]);
  const [semesterGPA, setSemesterGPA] = useState<string>("0.00");
  const [error, setError] = useState<string | null>(null);
  const [showShareSuccess, setShowShareSuccess] = useState(false);
  const [saveToast, setSaveToast] = useState(false);

  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: "Homework", weight: "20", score: "95" },
    { id: "2", name: "Quizzes", weight: "30", score: "80" },
    { id: "3", name: "Midterm", weight: "30", score: "85" },
  ]);

  const [result, setResult] = useState<{
    score: number;
    status: string;
    graphData: any[];
    letter: string;
  } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("toolking_grades");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSavedClasses(parsed);
      updateGPA(parsed);
    }
  }, []);

  const updateGPA = (classes: SavedClass[]) => {
    let totalPts = 0,
      totalCreds = 0;
    classes.forEach((cls) => {
      const targetVal = parseFloat(cls.target) || 0;
      const creditVal = parseFloat(cls.credits) || 3;
      const gObj =
        GRADE_SCALE.find((g) => targetVal >= g.min) ||
        GRADE_SCALE[GRADE_SCALE.length - 1];
      totalPts += gObj.gpa * creditVal;
      totalCreds += creditVal;
    });
    setSemesterGPA(
      totalCreds > 0 ? (totalPts / totalCreds).toFixed(2) : "0.00",
    );
  };

  const saveClass = () => {
    if (!newClassName) {
      setError("Enter a class name first.");
      return;
    }
    const updated = [
      ...savedClasses.filter((c) => c.name !== newClassName),
      { name: newClassName, categories, target: targetGrade, credits },
    ];
    setSavedClasses(updated);
    localStorage.setItem("toolking_grades", JSON.stringify(updated));
    updateGPA(updated);
    setNewClassName("");
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const runCalculations = () => {
    setError(null);
    let current = parseFloat(currentGrade);
    let weight = parseFloat(finalWeight) / 100;
    const target = parseFloat(targetGrade);

    if (mode === "breakdown") {
      const totalW = categories.reduce(
        (acc, c) => acc + (parseFloat(c.weight) || 0),
        0,
      );
      if (totalW >= 100) {
        setError("Weight must be < 100% to include a Final.");
        return;
      }
      const wSum = categories.reduce(
        (acc, c) =>
          acc + (parseFloat(c.weight) || 0) * (parseFloat(c.score) || 0),
        0,
      );
      current = wSum / totalW;
      weight = (100 - totalW) / 100;
    }

    if (isNaN(current) || isNaN(target) || isNaN(weight) || weight <= 0) return;

    const req = (target - current * (1 - weight)) / weight;
    const status =
      req > 100
        ? "Impossible"
        : req <= 0
          ? "Secured"
          : req > 92
            ? "Tough"
            : "Achievable";

    if (status === "Secured" && result?.status !== "Secured") {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    }

    setResult({
      score: Number(req.toFixed(1)),
      status,
      graphData: [40, 60, 80, 90, 100].map((s) => ({
        final: s,
        total: Number((current * (1 - weight) + s * weight).toFixed(1)),
      })),
      letter: (GRADE_SCALE.find((g) => target >= g.min) || GRADE_SCALE[7])
        .label,
    });
  };

  useEffect(() => {
    runCalculations();
  }, [currentGrade, targetGrade, finalWeight, categories, mode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-28 pb-20 px-4 md:px-10 font-sans selection:bg-indigo-500">
      <h1 className="sr-only">
        Final Grade Calculator – What Do I Need on My Final?
      </h1>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
        {/* --- LEFT: CALCULATOR --- */}
        <div className="lg:col-span-7 space-y-8">
          <header>
            <div className="text-6xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white leading-[0.8]">
              Grade <span className="text-indigo-600">Slayer</span>
            </div>
            {/* ✅ INTENT HOOK INJECTED */}
            <p className="text-xs text-slate-400 mt-4 font-bold uppercase tracking-widest">
              Wondering what grade you need on your final to pass or get an A?
              Enter your scores below to find out instantly.
            </p>
            <p className="mt-4 text-sm font-bold text-slate-500 max-w-xl leading-relaxed">
              Use this final grade calculator to find out exactly what you need
              on your final exam to reach your target grade. Optimized for{" "}
              <span className="text-indigo-600 uppercase">College</span> and{" "}
              <span className="text-indigo-600 uppercase">High School</span>{" "}
              students in the USA.
            </p>
          </header>

          <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] p-10 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
            {error && (
              <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase z-10 animate-pulse">
                {error}
              </div>
            )}

            <div className="flex gap-4 mb-10">
              <button
                onClick={() => setMode("simple")}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === "simple" ? "bg-indigo-600 text-white shadow-xl shadow-indigo-500/30" : "bg-slate-100 dark:bg-slate-800 text-slate-400"}`}
              >
                Simple Mode
              </button>
              <button
                onClick={() => setMode("breakdown")}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === "breakdown" ? "bg-indigo-600 text-white shadow-xl shadow-indigo-500/30" : "bg-slate-100 dark:bg-slate-800 text-slate-400"}`}
              >
                Syllabus Mode
              </button>
            </div>

            <div className="space-y-8">
              {mode === "simple" ? (
                <>
                  <InputGroup
                    label="Current Grade %"
                    val={currentGrade}
                    set={setCurrentGrade}
                  />
                  <InputGroup
                    label="Desired Target %"
                    val={targetGrade}
                    set={setTargetGrade}
                  />
                  <InputGroup
                    label="Final Weight %"
                    val={finalWeight}
                    set={setFinalWeight}
                  />
                </>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-2 relative">
                      <input
                        value={newClassName}
                        onChange={(e) => setNewClassName(e.target.value)}
                        placeholder="Class Name"
                        className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-[10px] font-bold outline-none w-28"
                      />
                      <input
                        type="number"
                        value={credits}
                        onChange={(e) => setCredits(e.target.value)}
                        placeholder="Credits"
                        className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-[10px] font-bold outline-none w-16"
                      />
                      <button
                        onClick={saveClass}
                        className="p-3 bg-emerald-500 text-white rounded-xl shadow-lg relative active:scale-95 transition-all"
                      >
                        <Save size={14} />
                        {saveToast && (
                          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-500 text-[8px] px-2 py-1 rounded text-white animate-bounce whitespace-nowrap font-black">
                            SAVED!
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      className="grid grid-cols-12 gap-3 items-center animate-in slide-in-from-left-2 duration-300"
                    >
                      <input
                        value={cat.name}
                        onChange={(e) =>
                          setCategories(
                            categories.map((c) =>
                              c.id === cat.id
                                ? { ...c, name: e.target.value }
                                : c,
                            ),
                          )
                        }
                        className="col-span-6 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs font-bold"
                        placeholder="Assignment"
                      />
                      <input
                        value={cat.weight}
                        onChange={(e) =>
                          setCategories(
                            categories.map((c) =>
                              c.id === cat.id
                                ? { ...c, weight: e.target.value }
                                : c,
                            ),
                          )
                        }
                        className="col-span-2 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs font-bold text-center"
                        placeholder="W%"
                      />
                      <input
                        value={cat.score}
                        onChange={(e) =>
                          setCategories(
                            categories.map((c) =>
                              c.id === cat.id
                                ? { ...c, score: e.target.value }
                                : c,
                            ),
                          )
                        }
                        className="col-span-3 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs font-bold text-center"
                        placeholder="Score"
                      />
                      <button
                        onClick={() =>
                          setCategories(
                            categories.filter((c) => c.id !== cat.id),
                          )
                        }
                        className="col-span-1 text-slate-300 hover:text-red-500 flex justify-center"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() =>
                      setCategories([
                        ...categories,
                        {
                          id: Date.now().toString(),
                          name: "",
                          weight: "",
                          score: "",
                        },
                      ])
                    }
                    className="w-full py-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase text-slate-400 mt-4"
                  >
                    Add Row
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="bg-indigo-600 rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12">
              <GraduationCap size={200} />
            </div>
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-4xl font-black italic shadow-inner">
                {semesterGPA}
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">
                  Estimated GPA
                </h3>
                <p className="text-xl font-black italic tracking-tighter">
                  Semester Projection
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center relative z-10">
              {savedClasses.map((cls) => (
                <div
                  key={cls.name}
                  className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10"
                >
                  {cls.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT: OUTPUT DASHBOARD --- */}
        <div className="lg:col-span-5 space-y-6">
          {result && (
            <div
              className={`p-10 rounded-[4rem] text-white shadow-2xl relative overflow-hidden transition-all duration-700 ${
                result.status === "Impossible"
                  ? "bg-red-500 shadow-red-500/30"
                  : result.status === "Achievable" ||
                      result.status === "Secured"
                    ? "bg-emerald-500 shadow-emerald-500/30"
                    : "bg-indigo-600 shadow-indigo-500/40"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="bg-white/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest italic">
                  {result.status}
                </span>
                <button
                  onClick={() => {
                    const text = `🎯 Grade Slayer Report\nTarget: ${targetGrade}% (${result.letter})\nRequired: ${result.score}%\nhttps://toolking.online/tools/final-grade-calculator`;
                    navigator.clipboard.writeText(text);
                    setShowShareSuccess(true);
                    setTimeout(() => setShowShareSuccess(false), 3000);
                  }}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all relative active:scale-90"
                >
                  <Copy size={16} />
                  {showShareSuccess && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-[8px] px-2 py-1 rounded text-white font-black whitespace-nowrap">
                      COPIED!
                    </span>
                  )}
                </button>
              </div>
              <h2 className="text-[100px] font-black italic tracking-tighter leading-none my-6 text-center drop-shadow-2xl">
                {result.score > 100 ? "N/A" : `${Math.max(0, result.score)}%`}
              </h2>
              {result.status === "Impossible" ? (
                <p className="text-[11px] font-black uppercase tracking-wider bg-black/20 p-4 rounded-2xl mb-6 text-center border border-white/5">
                  ⚠️ Target mathematically unreachable. You would need over 100%
                  on the final.
                </p>
              ) : (
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-6 text-center italic">
                  Try different scenarios to reach your target 📈
                </p>
              )}
              <div className="flex items-center justify-center gap-2 opacity-80 bg-black/10 py-3 rounded-3xl mx-8 border border-white/5">
                <GraduationCap size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Target Letter: {result.letter}
                </span>
              </div>
            </div>
          )}

          <div className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
              <BarChart3 size={14} className="text-indigo-500" /> Goal
              Trajectory
            </h4>
            <div className="h-44 w-full -ml-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={result?.graphData}>
                  <defs>
                    <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f1f5f9"
                  />
                  <XAxis dataKey="final" hide />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ borderRadius: "16px", border: "none" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="total"
                    stroke="#10b981"
                    fill="url(#colorArea)"
                    strokeWidth={4}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* --- SEO HUB & FAQs --- */}
      <div className="max-w-4xl mx-auto mt-32 space-y-16 border-t border-slate-200 dark:border-slate-800 pt-24 text-slate-900 dark:text-white pb-20">
        <section className="space-y-6">
          <h2 className="text-4xl font-black italic uppercase tracking-tight">
            What is a{" "}
            <span className="text-indigo-600">Final Grade Calculator?</span>
          </h2>
          <p className="text-base font-bold text-slate-500 leading-relaxed">
            A final grade calculator helps students determine exactly what score
            they need on their final exam to reach a specific letter grade. This
            tool is optimized for{" "}
            <span className="text-indigo-600 uppercase">College</span> and{" "}
            <span className="text-indigo-600 uppercase">High School</span>{" "}
            students in the USA.
          </p>
        </section>

        {/* ✅ RESTORED FAQ RANKING BOOSTER */}
        <section className="space-y-10">
          <h2 className="text-3xl font-black italic uppercase tracking-tight flex items-center gap-3">
            <HelpCircle size={32} className="text-indigo-600" /> FAQs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FAQItem
              q="What grade do I need on my final to pass?"
              a="Most U.S. schools require at least 60% or 70% to pass. Enter your current grade and target passing grade to calculate your required exam score instantly."
            />
            <FAQItem
              q="What if I need over 100%?"
              a="It means your target grade is mathematically not achievable with your current scores and final exam weight. You might need to aim for a slightly lower grade."
            />
            <FAQItem
              q="Is this accurate for college?"
              a="Yes. This tool uses the standard weighted average formula used by universities across the United States including Harvard, NYU, and UCLA."
            />
            <FAQItem
              q="Is it free to use?"
              a="Yes, ToolKing's Grade Slayer is 100% free for high school and college students."
            />
          </div>
        </section>

        {/* ✅ OPTIMIZED INTERNAL LINKING SILO */}
        <div className="grid md:grid-cols-3 gap-6 pt-10">
          <InternalLinkCard
            title="PDF to Word"
            href="/tools/pdf-to-word"
            desc="Convert school documents to Word."
            icon={<FileText size={20} />}
          />
          <InternalLinkCard
            title="PDF Compressor"
            href="/tools/pdf-compressor"
            desc="Make PDFs smaller for uploads."
            icon={<FileSearch size={20} />}
          />
          <InternalLinkCard
            title="GPA Calculator"
            href="/tools/gpa-calculator"
            desc="Track your cumulative 4.0 GPA."
            icon={<GraduationCap size={20} />}
          />
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, val, set }: any) {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">
        {label}
      </label>
      <input
        type="number"
        value={val}
        onChange={(e) => set(e.target.value)}
        className="w-full bg-slate-50 dark:bg-slate-950 p-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 font-black text-4xl text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all"
      />
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
      <h4 className="text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
        <CheckCircle2 size={16} className="text-indigo-500" /> {q}
      </h4>
      <p className="text-[11px] font-bold text-slate-500 leading-relaxed">
        {a}
      </p>
    </div>
  );
}

function InternalLinkCard({ title, href, desc, icon }: any) {
  return (
    <Link
      href={href}
      className="p-8 bg-indigo-600/5 rounded-[3rem] border border-indigo-500/10 hover:border-indigo-500 transition-all group flex flex-col items-center text-center"
    >
      <div className="mb-4 text-indigo-600 bg-white p-4 rounded-2xl shadow-sm">
        {icon}
      </div>
      <h3 className="text-sm font-black italic uppercase tracking-tight group-hover:text-indigo-600">
        {title}
      </h3>
      <p className="text-[8px] font-bold text-slate-400 uppercase mt-2">
        {desc}
      </p>
    </Link>
  );
}
