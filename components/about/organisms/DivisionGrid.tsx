import React from "react";
import { Heading } from "../atoms/Text";
import { DivisionCard } from "../molecules/DivisionCard";
import { Division } from "@/data/about";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"] });

interface DivisionGridProps {
  divisions: Division[];
}

export const DivisionGrid: React.FC<DivisionGridProps> = ({ divisions }) => {
  return (
    <section className="relative px-6 py-12 max-w-5xl mx-auto z-10">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[250px] h-[80px] bg-sky-500/15 blur-[70px] rounded-full pointer-events-none" />

      <div className="text-center mb-12 relative z-10">
        <Heading
          level={2}
          className={`text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-300 to-white drop-shadow-md tracking-widest uppercase mb-3 ${orbitron.className}`}
        >
          Struktur Organisasi
        </Heading>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sky-500/80 to-transparent mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
        {divisions.map((division) => (
          <DivisionCard
            key={division.id}
            id={division.id} // <-- Ditambahkan agar kartu bisa mengarah ke ID divisi yang tepat
            icon={division.icon}
            name={division.name}
            description={division.description}
          />
        ))}
      </div>
    </section>
  );
};
