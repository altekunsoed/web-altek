import React from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"] });

interface AboutHeaderProps {
  title: string;
  description: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({
  title,
  description,
}) => {
  return (
    // Kurangi py-20 menjadi py-10 agar jarak vertikal tidak terlalu kosong
    <section className="relative px-6 py-10 max-w-4xl mx-auto text-center">
      {/* Dekorasi Ambient Glow dikecilkan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[80px] bg-sky-500/20 blur-[60px] rounded-full pointer-events-none" />

      <div className="relative z-10 mb-6">
        {/* Ukuran font diturunkan drastis ke text-2xl/3xl */}
        <h1
          className={`text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-300 to-white drop-shadow-md tracking-widest uppercase mb-4 ${orbitron.className}`}
        >
          {title}
        </h1>
        {/* Lebar maksimal paragraf dirapatkan (max-w-2xl) dan ukuran font dikecilkan (text-sm md:text-base) */}
        <p className="text-sm md:text-base text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed font-mono tracking-wide">
          {description}
        </p>
      </div>
    </section>
  );
};
