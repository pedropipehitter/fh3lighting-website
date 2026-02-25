"use client";

import { useState, useEffect, useRef, KeyboardEvent, ClipboardEvent } from "react";

const SESSION_KEY = "confidential_unlocked";

export default function ConfidentialGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [shaking, setShaking] = useState(false);
  const [error, setError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setUnlocked(true);
    }
  }, []);

  function handleChange(index: number, value: string) {
    const char = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = char;
    setDigits(next);
    setError(false);

    if (char && index < 5) {
      inputRefs.current[index + 1]?.focus();
    } else if (char && index === 5) {
      submit(next);
    }
  }

  function handleKeyDown(index: number, e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      if (digits[index]) {
        const next = [...digits];
        next[index] = "";
        setDigits(next);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        const next = [...digits];
        next[index - 1] = "";
        setDigits(next);
      }
    } else if (e.key === "Enter") {
      submit(digits);
    }
  }

  function handlePaste(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    const next = ["", "", "", "", "", ""];
    for (let i = 0; i < pasted.length; i++) next[i] = pasted[i];
    setDigits(next);
    setError(false);
    const focusIndex = Math.min(pasted.length, 5);
    inputRefs.current[focusIndex]?.focus();
    if (pasted.length === 6) submit(next);
  }

  function submit(code: string[]) {
    const entered = code.join("");
    const expected = process.env.NEXT_PUBLIC_CONFIDENTIAL_CODE ?? "";
    if (entered === expected && entered.length === 6) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setUnlocked(true);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => {
        setShaking(false);
        setDigits(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }, 600);
    }
  }

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <p className="font-ui-label text-[0.62rem] text-[#FFCC00] mb-3 uppercase tracking-[0.15em]">
          Restricted Access
        </p>
        <h1 className="font-heading text-2xl font-semibold text-white mb-2">
          Confidential Work
        </h1>
        <p className="text-neutral-500 text-[0.78rem] mb-10">
          Enter the 6-digit access code to view this portfolio.
        </p>

        <div
          className={`flex justify-center gap-2 mb-6 ${shaking ? "animate-shake" : ""}`}
        >
          {digits.map((digit, i) => (
            <input
              key={i}
              ref={(el) => { inputRefs.current[i] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onPaste={handlePaste}
              onFocus={(e) => e.target.select()}
              className={`w-11 h-14 text-center text-lg font-heading font-semibold bg-neutral-900 border rounded text-white focus:outline-none focus:ring-1 transition-colors caret-transparent ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-neutral-700 focus:border-[#FFCC00] focus:ring-[#FFCC00]"
              }`}
              autoComplete="off"
              aria-label={`Digit ${i + 1}`}
            />
          ))}
        </div>

        {error && (
          <p className="text-red-400 text-[0.72rem] mb-4">Incorrect code. Try again.</p>
        )}

        <button
          onClick={() => submit(digits)}
          className="px-8 py-2.5 bg-[#FFCC00] text-black font-ui-label text-[0.68rem] uppercase tracking-[0.12em] font-semibold hover:bg-yellow-300 transition-colors rounded-sm"
        >
          Unlock
        </button>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          15% { transform: translateX(-6px); }
          30% { transform: translateX(6px); }
          45% { transform: translateX(-5px); }
          60% { transform: translateX(5px); }
          75% { transform: translateX(-3px); }
          90% { transform: translateX(3px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
      `}</style>
    </div>
  );
}
