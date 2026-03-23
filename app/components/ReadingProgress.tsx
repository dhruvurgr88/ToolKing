"use client";

import React, { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100,
        );
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-indigo-600 via-purple-500 to-emerald-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(79,70,229,0.5)]"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
}
