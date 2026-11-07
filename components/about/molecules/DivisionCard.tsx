import React from "react";
import Link from "next/link";
import { Icon } from "../atoms/Icon";
import { Body } from "../atoms/Text";
import { LucideIcon } from "lucide-react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "700"] });

interface DivisionCardProps {
  id: string; // ID unik untuk target scroll (misal: "bph", "humkominfo")
  icon: LucideIcon;
  name: string;
  description: string;
}

export const DivisionCard: React.FC<DivisionCardProps> = ({
  id,
  icon,
  name,
  description,
}) => {
  return (
    <Link href={`#division-${id}`} className="block group">
      <div className="relative bg-slate-900/60 backdrop-blur-md rounded-2xl p-5 border border-slate-700/50 group-hover:border-sky-400/80 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] transition-all duration-500 overflow-hidden flex flex-col items-center text-center h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="bg-gradient-to-br from-sky-500/20 to-blue-600/20 p-3 rounded-2xl border border-sky-500/30 mb-3 group-hover:border-sky-400 transition-colors">
            <Icon
              icon={icon}
              className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform"
            />
          </div>

          <h3
            className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 group-hover:from-sky-300 group-hover:to-white transition-all text-lg tracking-wider uppercase mb-1.5 ${orbitron.className}`}
          >
            {name}
          </h3>

          <Body className="text-slate-400 text-xs font-mono tracking-wide group-hover:text-slate-300 transition-colors max-w-xs">
            {description}
          </Body>
        </div>
      </div>
    </Link>
  );
};
