"use client";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "800"] });

export default function Footer() {
  return (
    // Padding vertikal dipangkas dari py-5 ke py-3.5 agar footer lebih tipis dan proporsional
    <footer className="relative w-full z-10 bg-slate-950/40 backdrop-blur-xl border-t border-white/5 py-3.5 mt-auto overflow-hidden flex items-center justify-center">
      {/* Efek cahaya ambient tipis di garis bawah */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent blur-[2px]" />

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center relative z-20">
        <p className="text-[11px] md:text-[13px] text-slate-400 tracking-wider text-center font-mono">
          © {new Date().getFullYear()}{" "}
          <span
            className={`${orbitron.className} text-slate-200 hover:text-sky-400 transition-colors duration-300 font-bold tracking-widest mx-1`}
          >
            ALTEK
          </span>
          <span className="opacity-70">. All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
}
