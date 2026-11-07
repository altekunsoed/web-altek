import React from "react";
import { Label } from "../atoms/Text";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "800"] });

interface MemberCardProps {
  name: string;
  role: string;
  photoUrl?: string;
}

export const MemberCard: React.FC<MemberCardProps> = ({
  name,
  role,
  photoUrl,
}) => {
  const imageSrc =
    photoUrl && photoUrl !== "-"
      ? photoUrl
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0ea5e9&color=fff&size=512`;

  return (
    <div className="relative bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 text-center flex flex-col items-center justify-between hover:bg-slate-800 hover:border-sky-400/80 transition-all duration-500 group h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 w-full aspect-square mb-4 rounded-xl overflow-hidden border border-slate-600 group-hover:border-sky-400 transition-all duration-500 flex items-center justify-center bg-slate-950">
        <img
          src={imageSrc}
          alt={`Foto ${name}`}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <p
          className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 group-hover:from-sky-300 group-hover:to-white transition-all duration-500 text-sm md:text-[15px] tracking-wide mb-2 ${orbitron.className}`}
        >
          {name}
        </p>

        <Label className="text-sky-300 font-mono text-[10px] uppercase tracking-widest bg-sky-950/80 px-3 py-1 rounded-md border border-sky-800/80 group-hover:bg-sky-900 group-hover:text-white transition-colors duration-300">
          {role}
        </Label>
      </div>
    </div>
  );
};
