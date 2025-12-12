import React from "react";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  link: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, value, link }) => {
  return (
    <a
      href={link}
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block bg-slate-800/40 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 hover:transform hover:scale-105"
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <div className="w-full">
          <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
          <p className="text-sm text-slate-300 break-words">{value}</p>
        </div>
      </div>
    </a>
  );
};
