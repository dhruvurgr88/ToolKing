"use client";

import React, { useState, useEffect, useRef } from "react";
import { RotateCcw, Trophy, Zap, ShieldCheck, Clock } from "lucide-react";

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

  // --- TIMER STATE ---
  const [timeLeft, setTimeLeft] = useState(30);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const switchTurn = () => {
    if (removeMode) setRemoveMode(false);
    setSelected(null);
    setPlayer((prev) => (prev === "P1" ? "P2" : "P1"));
    setTimeLeft(30);
  };

  useEffect(() => {
    if (winner) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          switchTurn();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [player, removeMode, winner]);

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
        setTimeLeft(30);
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
      if (isPieceInMill(newBoard, i)) {
        setRemoveMode(true);
        setTimeLeft(30);
      } else {
        if (newToPlace.P1 === 0 && newToPlace.P2 === 0) setPhase("moving");
        setPlayer(player === "P1" ? "P2" : "P1");
        setTimeLeft(30);
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
          if (isPieceInMill(newBoard, i)) {
            setRemoveMode(true);
            setTimeLeft(30);
          } else {
            setPlayer(player === "P1" ? "P2" : "P1");
            setTimeLeft(30);
          }
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
    setTimeLeft(30);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] py-8 px-4 flex flex-col items-center">
      {/* LAYOUT FIX: 
          1. max-w-md (approx 448px) ensures it doesn't get too wide on laptop.
          2. w-full ensures it takes full width on mobile. 
      */}
      <div className="w-full max-w-md flex flex-col gap-5">
        {/* --- HEADER --- */}
        <header className="flex items-center justify-between bg-white dark:bg-slate-900 p-5 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="flex flex-col">
            <h1 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white leading-none">
              Nau <span className="text-indigo-600">Goti</span>
            </h1>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">
              9 Beads Strategy
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border ${timeLeft < 10 ? "bg-red-500 text-white animate-pulse" : "bg-slate-100 dark:bg-slate-800 dark:text-white"}`}
            >
              <Clock size={14} />
              <span className="font-mono font-bold text-sm">{timeLeft}s</span>
            </div>
            <button
              onClick={resetGame}
              className="p-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl hover:bg-indigo-600 hover:text-white transition-all"
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </header>

        {/* --- STATUS BARS --- */}
        <div className="grid grid-cols-2 gap-3">
          <PlayerCard
            active={player === "P1"}
            label="Player 1"
            color="bg-red-500"
            count={toPlace.P1}
          />
          <PlayerCard
            active={player === "P2"}
            label="Player 2"
            color="bg-blue-600"
            count={toPlace.P2}
          />
        </div>

        {/* --- GAME BOARD --- */}
        <div className="relative w-full aspect-square bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl p-4 flex items-center justify-center overflow-hidden">
          {/* Background Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
            <span className="text-[100px] font-black uppercase italic">
              {removeMode ? "KILL" : phase}
            </span>
          </div>

          <svg
            viewBox="0 0 300 300"
            className="w-full h-full relative z-10 overflow-visible"
          >
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
              const isSelected = selected === i;
              let fill =
                board[i] === "P1"
                  ? "#ef4444"
                  : board[i] === "P2"
                    ? "#2563eb"
                    : "transparent";

              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={isSelected ? 16 : 13}
                  onClick={() => handlePress(i)}
                  fill={
                    fill === "transparent" ? "rgba(241, 245, 249, 0.5)" : fill
                  }
                  stroke={isSelected ? "#fbbf24" : "#94a3b8"}
                  strokeWidth={isSelected ? 4 : 1.5}
                  className="cursor-pointer transition-all hover:brightness-110 active:scale-90"
                />
              );
            })}
          </svg>

          {/* Winner Message */}
          {winner && (
            <div className="absolute inset-0 z-20 bg-indigo-600/90 flex flex-col items-center justify-center text-white text-center p-6">
              <Trophy size={60} className="mb-4 text-yellow-400" />
              <h2 className="text-3xl font-black uppercase">{winner} WINS!</h2>
              <button
                onClick={resetGame}
                className="mt-4 px-6 py-2 bg-white text-indigo-600 rounded-full font-bold"
              >
                Play Again
              </button>
            </div>
          )}
        </div>

        {/* --- ACTION BAR --- */}
        <div
          className={`p-5 rounded-3xl text-center border shadow-md transition-all ${removeMode ? "bg-amber-500 text-white animate-pulse border-amber-400" : "bg-slate-900 dark:bg-white text-white dark:text-black border-transparent"}`}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.3em]">
            {removeMode
              ? "STRIKE ENEMY"
              : `${player === "P1" ? "RED" : "BLUE"} TURN`}
          </p>
        </div>

        {/* --- FOOTER --- */}
        <div className="grid grid-cols-3 gap-2">
          <Badge icon={<ShieldCheck size={12} />} label="Secure" />
          <Badge icon={<Zap size={12} />} label="Fast" />
          <Badge icon={<Trophy size={12} />} label="No Ads" />
        </div>
      </div>
    </div>
  );
}

function PlayerCard({ active, label, color, count }: any) {
  return (
    <div
      className={`p-4 rounded-[2rem] border transition-all flex flex-col items-center ${active ? "bg-white dark:bg-slate-900 border-indigo-500 shadow-lg scale-105" : "bg-white/50 dark:bg-slate-900/50 border-transparent opacity-40"}`}
    >
      <span
        className={`text-[9px] font-black uppercase tracking-wider ${active ? "text-indigo-600" : "text-slate-400"}`}
      >
        {label}
      </span>
      <div className="flex flex-wrap justify-center gap-1 mt-2">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${color}`} />
        ))}
      </div>
    </div>
  );
}

function Badge({ icon, label }: any) {
  return (
    <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-1 text-slate-400">
      {icon}
      <span className="text-[7px] font-black uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}
