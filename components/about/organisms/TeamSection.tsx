import React from "react";
import { Heading } from "../atoms/Text";
import { Icon } from "../atoms/Icon";
import { MemberCard } from "../molecules/MemberCard";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700"] });

interface TeamSectionProps {
  divisions: any[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ divisions }) => {
  return (
    <section className="relative z-10 px-6 py-8 max-w-5xl mx-auto space-y-12">
      {divisions.map((division) => (
        <div
          key={division.id}
          id={`division-${division.id}`} // ID target untuk link dari kartu di atas
          className="relative bg-slate-800/20 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-slate-700/50 hover:border-sky-500/40 transition-all duration-500 overflow-hidden shadow-xl scroll-mt-24"
        >
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-24 bg-sky-500/15 blur-[60px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center mb-8 border-b border-slate-700/50 pb-5">
            <div className="bg-gradient-to-br from-sky-500/20 to-blue-600/20 p-3 rounded-2xl border border-sky-500/30 mb-3">
              <Icon icon={division.icon} className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <Heading
                level={2}
                className={`text-white tracking-widest uppercase text-xl md:text-2xl ${orbitron.className}`}
              >
                {division.name}
              </Heading>
              <p className="text-slate-400 text-xs mt-1 font-mono tracking-wide">
                {division.description}
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-5 sm:gap-6">
            {/* Array di-copy dengan [...division.members] lalu diurutkan agar Ketua selalu di awal */}
            {[...division.members]
              .sort((a: any, b: any) => {
                const aIsKetua = a.role.toLowerCase().includes("ketua");
                const bIsKetua = b.role.toLowerCase().includes("ketua");
                if (aIsKetua && !bIsKetua) return -1;
                if (!aIsKetua && bIsKetua) return 1;
                return 0;
              })
              .map((member: any) => (
                <div
                  key={member.id || member.name}
                  className="w-[200px] sm:w-[210px] md:w-[220px] flex"
                >
                  <div className="w-full">
                    <MemberCard
                      name={member.name}
                      role={member.role}
                      photoUrl={member.photoUrl}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};
