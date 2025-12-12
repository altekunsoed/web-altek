import React from "react";
import { Heading } from "../atoms/Text";
import { Icon } from "../atoms/Icon";
import { MemberCard } from "../molecules/MemberCard";
import { Division } from "@/data/about";

interface TeamSectionProps {
  divisions: Division[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ divisions }) => {
  return (
    <section className="px-6 py-8 max-w-6xl mx-auto space-y-12">
      {divisions.map((division) => (
        <div
          key={division.id}
          className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/40"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-lg">
              <Icon icon={division.icon} className="w-6 h-6 text-blue-400" />
            </div>
            <Heading level={2} className="text-white">
              {division.name}
            </Heading>
          </div>
          <p className="text-slate-400 text-sm mb-4">{division.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {division.members.map((member, index) => (
              <MemberCard key={index} name={member.name} role={member.role} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
