"use client";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Baby,
  Zap,
  RotateCcw,
  Cake,
  Globe,
  Star,
  Info,
  Timer,
} from "lucide-react";

export default function AgeClient() {
  const [birthDate, setBirthDate] = useState<string>("");
  const [targetDate, setTargetDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );
  const [result, setResult] = useState<any>(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const target = new Date(targetDate);

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(target.getFullYear(), target.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    // Interesting Facts Logic
    const diffTime = Math.abs(target.getTime() - birth.getTime());
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const nextBirthday = new Date(
      target.getFullYear(),
      birth.getMonth(),
      birth.getDate(),
    );
    if (nextBirthday < target)
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);

    const daysToNext = Math.ceil(
      (nextBirthday.getTime() - target.getTime()) / (1000 * 60 * 60 * 24),
    );

    setResult({
      years,
      months,
      days,
      totalDays,
      totalWeeks: Math.floor(totalDays / 7),
      totalHours: totalDays * 24,
      breaths: totalDays * 23000, // Avg breaths per day
      mercuryAge: +(years + months / 12).toFixed(1) * 4.15, // Mercury orbit is ~88 days
      nextBirthday: daysToNext === 365 ? 0 : daysToNext,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* --- LEFT: INPUT PANEL --- */}
        <div className="w-full lg:w-[400px] space-y-6">
          <div className="bg-white dark:bg-slate-950 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl">
            <h2 className="text-xl font-black mb-8 italic uppercase tracking-widest flex items-center gap-2">
              <Timer className="text-indigo-500" /> Age Settings
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2 italic">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none font-bold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2 italic">
                  Age at the Date of
                </label>
                <input
                  type="date"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  className="w-full p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none font-bold"
                />
              </div>

              <button
                onClick={calculateAge}
                className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg hover:bg-indigo-700 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Calculate Age <Zap size={16} />
              </button>

              <button
                onClick={() => {
                  setBirthDate("");
                  setResult(null);
                }}
                className="w-full py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-rose-500 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw size={12} /> Reset Fields
              </button>
            </div>
          </div>
        </div>

        {/* --- RIGHT: RESULTS & FACTS --- */}
        <div className="flex-1 space-y-8">
          {result ? (
            <div className="animate-in fade-in zoom-in-95 duration-500 space-y-8">
              {/* PRIMARY AGE BOX */}
              <div className="bg-indigo-600 p-10 rounded-[4rem] text-white shadow-2xl shadow-indigo-500/20 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="text-center md:text-left">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-2 italic">
                      Current Precise Age
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-7xl font-black tracking-tighter">
                        {result.years}
                      </span>
                      <span className="text-xl font-bold opacity-80 uppercase">
                        Years
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <div className="text-center">
                      <TextValue label="Months" value={result.months} />
                    </div>
                    <div className="text-center">
                      <TextValue label="Days" value={result.days} />
                    </div>
                  </div>
                </div>
                {/* Decorative background icon */}
                <Cake className="absolute -right-10 -bottom-10 w-64 h-64 text-white/10 rotate-12" />
              </div>

              {/* STATS GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <StatCard
                  icon={<Calendar size={18} />}
                  label="Total Weeks"
                  value={result.totalWeeks}
                  color="text-blue-500"
                />
                <StatCard
                  icon={<Clock size={18} />}
                  label="Total Hours"
                  value={result.totalHours}
                  color="text-amber-500"
                />
                <StatCard
                  icon={<Baby size={18} />}
                  label="Next B-Day"
                  value={`${result.nextBirthday} Days`}
                  color="text-rose-500"
                />
                <StatCard
                  icon={<Globe size={18} />}
                  label="Mercury Age"
                  value={result.mercuryAge.toFixed(0)}
                  color="text-emerald-500"
                />
              </div>

              {/* INTERESTING FACTS */}
              <div className="bg-white dark:bg-slate-950 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Star className="text-amber-500" /> Time Travel Facts
                </h3>
                <div className="space-y-4">
                  <FactItem
                    emoji="🫁"
                    text={`You have taken approximately ${result.breaths.toLocaleString()} breaths since you were born.`}
                  />
                  <FactItem
                    emoji="🌍"
                    text={`The Earth has traveled over ${(result.totalDays * 2.6).toFixed(0)} million kilometers around the Sun during your lifetime.`}
                  />
                  <FactItem
                    emoji="💤"
                    text={`You've spent roughly ${(result.totalDays / 3).toFixed(0)} days sleeping (based on 8hrs/day).`}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] border-4 border-dashed border-slate-200 dark:border-slate-800 p-10 text-center">
              <div className="p-6 bg-white dark:bg-slate-950 rounded-3xl shadow-xl mb-6 text-indigo-500">
                <Timer size={48} />
              </div>
              <h3 className="text-2xl font-black italic tracking-tighter mb-2">
                Ready to crunch numbers?
              </h3>
              <p className="text-slate-400 text-sm max-w-xs font-medium uppercase tracking-widest text-[10px]">
                Enter your birth date to see your age and space-time facts.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function TextValue({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col">
      <span className="text-4xl font-black tracking-tighter">{value}</span>
      <span className="text-[10px] font-black uppercase tracking-widest opacity-70">
        {label}
      </span>
    </div>
  );
}

function StatCard({ icon, label, value, color }: any) {
  return (
    <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md">
      <div className={`${color} mb-3`}>{icon}</div>
      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className="text-lg font-black italic tracking-tighter truncate">
        {value}
      </p>
    </div>
  );
}

function FactItem({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 items-center">
      <span className="text-2xl">{emoji}</span>
      <p className="text-xs font-bold text-slate-600 dark:text-slate-300 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
