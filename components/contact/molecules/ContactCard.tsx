import React from "react";
import { LucideIcon } from "lucide-react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "800"] });

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  link: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  value,
  link,
}) => {
  return (
    <a
      href={link}
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group block relative overflow-hidden bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-sky-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(56,189,248,0.15)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/0 to-sky-400/5 group-hover:from-sky-400/10 transition-all duration-500" />

      <div className="flex flex-col items-center text-center gap-5 relative z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-sky-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full" />

          <div className="relative flex items-center justify-center w-16 h-16 bg-slate-950/50 rounded-2xl border border-white/10 group-hover:border-sky-400/50 transition-colors duration-500 shadow-inner">
            <Icon className="w-8 h-8 text-slate-400 group-hover:text-sky-400 transition-colors duration-500" />
          </div>
        </div>

        <div className="w-full">
          <h3
            className={`font-bold text-white text-lg mb-2 group-hover:text-sky-300 transition-colors duration-300 tracking-widest uppercase ${orbitron.className}`}
          >
            {title}
          </h3>
          <p className="text-sm text-slate-400 break-words group-hover:text-sky-100 transition-colors duration-300 font-mono tracking-tight">
            {value}
          </p>
        </div>
      </div>
    </a>
  );
};
