"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
// 🔥 Swapped Sparkles for Crown
import { Menu, X, ChevronDown, Crown, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO SECTION */}
        <Link href="/" className="group flex items-center gap-2.5">
          {/* 🔥 Updated to Amber/Gold theme for the Crown */}
          <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-1.5 rounded-xl group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-300 shadow-lg shadow-amber-500/20">
            <Crown className="w-5 h-5 text-white fill-white/20" />
          </div>

          <div className="flex flex-col -space-y-1">
            <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent italic leading-none">
              TOOL
              <span className="text-amber-600 dark:text-amber-500 not-italic ml-0.5">
                KING
              </span>
            </span>
            {/* Sub-label for extra pro feel */}
            {/* <span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-1">
              Premium Utility Hub
            </span> */}
          </div>
        </Link>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 md:gap-6">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-amber-500/50 hover:ring-4 ring-amber-500/10 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {mounted &&
              (theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400 animate-in spin-in-90 duration-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600 animate-in spin-in-90 duration-500" />
              ))}
          </button>
        </div>
      </div>
    </nav>
  );
}
