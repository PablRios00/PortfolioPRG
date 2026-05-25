"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterTextProps = {
  words: string[];
};

export function TypewriterText({ words }: TypewriterTextProps) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!safeWords.length) return;

    const current = safeWords[wordIndex];
    const isComplete = letterIndex === current.length;
    const isEmpty = letterIndex === 0;
    const delay = deleting ? 34 : isComplete ? 1300 : 62;

    const timer = window.setTimeout(() => {
      if (!deleting && isComplete) {
        setDeleting(true);
        return;
      }

      if (deleting && isEmpty) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % safeWords.length);
        return;
      }

      setLetterIndex((index) => index + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, letterIndex, safeWords, wordIndex]);

  const visibleText = safeWords[wordIndex]?.slice(0, letterIndex) ?? "";

  return (
    <span className="inline-flex min-h-[1.6em] items-center text-xl font-semibold text-slate-200 md:text-3xl">
      {visibleText}
      <span className="ml-1 h-8 w-[3px] animate-pulse rounded-full bg-emerald-400" />
    </span>
  );
}
