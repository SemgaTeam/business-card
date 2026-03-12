"use client";

import { useState, useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type EditorProps = {
  fileName: string;
  language: string;
  code: string;
  speed?: number;
  color?: string;
};

export default function Editor({
  fileName,
  language,
  code,
  speed = 80,
  color = "#d946ef",
}: EditorProps) {
  const [displayedCode, setDisplayedCode] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedCode(code.slice(0, i));
      i++;
      if (i > code.length) clearInterval(timer);
    }, 1000 / speed);
    return () => clearInterval(timer);
  }, [code, speed]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedCode]);

  return (
    <div
      className="w-full max-w-2xl mx-auto overflow-hidden transition-all duration-500 bg-black border-2 rounded-xl hover:brightness-110"
      style={{
        borderColor: `${color}66`,

        boxShadow: `0 0 25px ${color}33, inset 0 0 15px ${color}1a`,
      }}
    >
      <div
        className="flex items-center justify-between border-b px-4 py-2 bg-[#050505]"
        style={{ borderColor: `${color}1a` }}
      >
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/80" />
        </div>
        <span
          className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: `${color}80` }}
        >
          {fileName}
        </span>
        <div className="w-8" />
      </div>

      <div className="relative p-0">
        <div
          ref={scrollRef}
          className="overflow-y-auto scroll-smooth scrollbar-none"
        >
          <SyntaxHighlighter
            language={language}
            style={atomDark}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              fontSize: "13px",
              lineHeight: "1.7",
              backgroundColor: "transparent",
              fontFamily: "var(--font-jetbrains)",
            }}
          >
            {displayedCode}
          </SyntaxHighlighter>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none bg-linear-to-t from-black to-transparent" />
      </div>
    </div>
  );
}
