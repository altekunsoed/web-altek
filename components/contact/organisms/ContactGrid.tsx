import React from "react";
import { ContactCard } from "../molecules/ContactCard";
import { ContactInfo } from "@/data/contact";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"] });

interface ContactGridProps {
  contacts: ContactInfo[];
}

export const ContactGrid: React.FC<ContactGridProps> = ({ contacts }) => {
  return (
    <section className="relative px-6 py-24 max-w-7xl mx-auto">
      {/* Dekorasi Ambient Glow di belakang judul */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-sky-500/20 blur-[90px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center mb-20">
        <h1
          className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-300 to-white drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] tracking-widest uppercase mb-6 ${orbitron.className}`}
        >
          Hubungi Kami
        </h1>
        <p className="text-[15px] text-slate-300 font-medium break-words group-hover:text-white transition-colors duration-300 font-mono tracking-wide">
          Inisiasi jaringan komunikasi dengan tim ALTEK. Kami siap merespons
          pertanyaan, diskusi riset, maupun peluang kolaborasi di bidang
          teknologi dan kelistrikan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            icon={contact.icon}
            title={contact.title}
            value={contact.value}
            link={contact.link}
          />
        ))}
      </div>
    </section>
  );
};
