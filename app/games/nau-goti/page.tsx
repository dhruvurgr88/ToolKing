"use client";

import React, { useState } from "react";
import { RotateCcw, Trophy, Zap, ShieldCheck } from "lucide-react";

// --- 🎮 CONSTANTS ---
const points = [
  [20, 20],
  [150, 20],
  [280, 20],
  [60, 60],
  [150, 60],
  [240, 60],
  [100, 100],
  [150, 100],
  [200, 100],
  [20, 150],
  [60, 150],
  [100, 150],
  [200, 150],
  [240, 150],
  [280, 150],
  [100, 200],
  [150, 200],
  [200, 200],
  [60, 240],
  [150, 240],
  [240, 240],
  [20, 280],
  [150, 280],
  [280, 280],
];

const adjacency: Record<number, number[]> = {
  0: [1, 9],
  1: [0, 2, 4],
  2: [1, 14],
  3: [4, 10],
  4: [1, 3, 5, 7],
  5: [4, 13],
  6: [7, 11],
  7: [4, 6, 8],
  8: [7, 12],
  9: [0, 10, 21],
  10: [3, 9, 11, 18],
  11: [6, 10, 15],
  12: [8, 13, 17],
  13: [5, 12, 14, 20],
  14: [2, 13, 23],
  15: [11, 16],
  16: [15, 17, 19],
  17: [12, 16],
  18: [10, 19],
  19: [16, 18, 20, 22],
  20: [13, 19],
  21: [9, 22],
  22: [19, 21, 23],
  23: [14, 22],
};

const mills = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10, 11],
  [12, 13, 14],
  [15, 16, 17],
  [18, 19, 20],
  [21, 22, 23],
  [0, 9, 21],
  [3, 10, 18],
  [6, 11, 15],
  [1, 4, 7],
  [16, 19, 22],
  [8, 12, 17],
  [5, 13, 20],
  [2, 14, 23],
];

export default function NauGotiPage() {
  const [board, setBoard] = useState<(string | null)[]>(Array(24).fill(null));
  const [player, setPlayer] = useState<"P1" | "P2">("P1");
  const [phase, setPhase] = useState<"placing" | "moving">("placing");
  const [toPlace, setToPlace] = useState({ P1: 9, P2: 9 });
  const [selected, setSelected] = useState<number | null>(null);
  const [removeMode, setRemoveMode] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  const isPieceInMill = (tempBoard: (string | null)[], index: number) => {
    const p = tempBoard[index];
    if (!p) return false;
    return mills.some(
      (m) => m.includes(index) && m.every((i) => tempBoard[i] === p),
    );
  };

  const handlePress = (i: number) => {
    if (winner) return;
    if (removeMode) {
      if (board[i] && board[i] !== player) {
        const newBoard = [...board];
        newBoard[i] = null;
        setBoard(newBoard);
        setRemoveMode(false);
        setPlayer(player === "P1" ? "P2" : "P1");
        if (
          phase === "moving" &&
          newBoard.filter((p) => p === (player === "P1" ? "P2" : "P1")).length <
            3
        )
          setWinner(player);
      }
      return;
    }
    if (phase === "placing") {
      if (board[i]) return;
      const newBoard = [...board];
      newBoard[i] = player;
      setBoard(newBoard);
      const newToPlace = { ...toPlace, [player]: toPlace[player] - 1 };
      setToPlace(newToPlace);
      if (isPieceInMill(newBoard, i)) setRemoveMode(true);
      else {
        if (newToPlace.P1 === 0 && newToPlace.P2 === 0) setPhase("moving");
        setPlayer(player === "P1" ? "P2" : "P1");
      }
    } else {
      if (selected === null) {
        if (board[i] === player) setSelected(i);
      } else {
        if (adjacency[selected].includes(i) && !board[i]) {
          const newBoard = [...board];
          newBoard[selected] = null;
          newBoard[i] = player;
          setBoard(newBoard);
          if (isPieceInMill(newBoard, i)) setRemoveMode(true);
          else setPlayer(player === "P1" ? "P2" : "P1");
        }
        setSelected(null);
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(24).fill(null));
    setPhase("placing");
    setToPlace({ P1: 9, P2: 9 });
    setWinner(null);
    setRemoveMode(false);
    setPlayer("P1");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-24 pb-12 px-4 selection:bg-indigo-500">
      <div className="max-w-xl mx-auto flex flex-col gap-6">
        {/* --- PREMIUM HEADER --- */}
        <header className="flex items-center justify-between bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="flex flex-col">
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white leading-none">
              Nau <span className="text-indigo-600">Goti</span>
            </h1>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">
              9 Beads Strategy
            </p>
          </div>
          <button
            onClick={resetGame}
            className="p-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-2xl hover:bg-indigo-600 hover:text-white transition-colors"
          >
            <RotateCcw size={20} />
          </button>
        </header>

        {/* --- STATUS BARS --- */}
        <div className="grid grid-cols-2 gap-3">
          <div
            className={`p-4 rounded-3xl border transition-all duration-500 flex flex-col items-center ${player === "P1" ? "bg-red-500/10 border-red-500 shadow-lg scale-105" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-40"}`}
          >
            <span className="text-[9px] font-black uppercase text-red-500 tracking-widest">
              Player 1
            </span>
            <div className="flex flex-wrap justify-center gap-1.5 mt-2">
              {Array.from({ length: toPlace.P1 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-red-500" />
              ))}
            </div>
          </div>
          <div
            className={`p-4 rounded-3xl border transition-all duration-500 flex flex-col items-center ${player === "P2" ? "bg-blue-600/10 border-blue-600 shadow-lg scale-105" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-40"}`}
          >
            <span className="text-[9px] font-black uppercase text-blue-600 tracking-widest">
              Player 2
            </span>
            <div className="flex flex-wrap justify-center gap-1.5 mt-2">
              {Array.from({ length: toPlace.P2 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-blue-600" />
              ))}
            </div>
          </div>
        </div>

        {/* --- GAME BOARD --- */}
        <div className="relative group">
          <div className="relative aspect-square w-full bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-10 flex items-center justify-center">
            {/* Background Status Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none overflow-hidden">
              <span className="text-[120px] font-black uppercase italic tracking-tighter text-slate-400">
                {removeMode ? "KILL" : phase}
              </span>
            </div>

            <svg
              viewBox="0 0 300 300"
              className="w-full h-full relative z-10 overflow-visible"
            >
              {/* Board Lines */}
              <g
                stroke="#94a3b8"
                strokeWidth="2.5"
                fill="none"
                className="dark:stroke-slate-700"
              >
                <rect x="20" y="20" width="260" height="260" />
                <rect x="60" y="60" width="180" height="180" />
                <rect x="100" y="100" width="100" height="100" />
                <line x1="150" y1="20" x2="150" y2="100" />
                <line x1="150" y1="200" x2="150" y2="280" />
                <line x1="20" y1="150" x2="100" y2="150" />
                <line x1="200" y1="150" x2="280" y2="150" />
              </g>

              {points.map(([x, y], i) => {
                // Determine Colors - Hardcoded Hex for absolute consistency
                let fillColor = "#f1f5f9"; // Default Light Mode Gray
                if (board[i] === "P1") fillColor = "#ef4444"; // Red
                if (board[i] === "P2") fillColor = "#2563eb"; // Blue

                // Set Dark Mode Empty Color
                const isDarkMode =
                  typeof window !== "undefined" &&
                  document.documentElement.classList.contains("dark");
                if (board[i] === null && isDarkMode) fillColor = "#1e293b";

                const isSelected = selected === i;

                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={isSelected ? 16 : 13}
                    onClick={() => handlePress(i)}
                    fill={fillColor}
                    stroke={isSelected ? "#fbbf24" : "#94a3b8"}
                    strokeWidth={isSelected ? 4 : 1.5}
                    style={{
                      transition: "fill 0.2s, stroke 0.2s, stroke-width 0.2s",
                    }}
                    className="cursor-pointer hover:brightness-110 active:opacity-80"
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* --- TURN ACTION BAR --- */}
        <div
          className={`p-6 rounded-[2rem] text-center border shadow-lg transition-all duration-500 ${removeMode ? "bg-amber-500 border-amber-400 text-white animate-pulse" : "bg-slate-900 dark:bg-white text-white dark:text-black border-transparent"}`}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.4em]">
            {winner
              ? `🏆 ${winner} VICTORY`
              : removeMode
                ? "⚡ STRIKE ENEMY PIECE"
                : `${player === "P1" ? "RED" : "BLUE"} TO MOVE`}
          </p>
        </div>

        {/* --- TRUST BADGES --- */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-1 text-slate-400">
            <ShieldCheck size={14} />
            <span className="text-[8px] font-black uppercase tracking-widest">
              Private
            </span>
          </div>
          <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-1 text-slate-400">
            <Zap size={14} />
            <span className="text-[8px] font-black uppercase tracking-widest">
              Local
            </span>
          </div>
          <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-1 text-slate-400">
            <Trophy size={14} />
            <span className="text-[8px] font-black uppercase tracking-widest">
              No Ads
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
