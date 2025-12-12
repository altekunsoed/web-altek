import React from "react";
import { Icon } from "./atoms/Icon";
import { Body } from "./atoms/Text";
import { LucideIcon } from "lucide-react";

// Molecule: Structure Card (for top section)
interface StructureCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
}

export const StructureCard: React.FC<StructureCardProps> = ({
  icon,
  name,
  description,
}) => {
  return (
    <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-5 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-lg">
          <Icon icon={icon} className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h3 className="font-bold text-white text-lg">{name}</h3>
          <Body className="text-xs">{description}</Body>
        </div>
      </div>
    </div>
  );
};
