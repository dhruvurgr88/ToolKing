"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 last:border-0 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        {/* LIGHT: text-slate-800 | DARK: text-slate-200 */}
        <span className="text-slate-800 dark:text-slate-200 font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown
            className={`w-5 h-5 ${isOpen ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-500"}`}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* LIGHT: text-slate-600 | DARK: text-slate-400 */}
            <div className="pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
