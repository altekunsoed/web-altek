import React from "react";
import { Label } from "../atoms/Text";

interface MemberCardProps {
  name: string;
  role: string;
}

export const MemberCard: React.FC<MemberCardProps> = ({ name, role }) => {
  return (
    <div className="bg-slate-700/30 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-200">
      <p className="font-semibold text-white mb-1">{name}</p>
      <Label>{role}</Label>
    </div>
  );
};
