import React from "react";
import { Heading } from "../atoms/Text";
import { DivisionCard } from "../molecules/DivisionCard";
import { Division } from "@/data/about";

interface DivisionGridProps {
  divisions: Division[];
}

export const DivisionGrid: React.FC<DivisionGridProps> = ({ divisions }) => {
  return (
    <section className="px-6 py-8 max-w-6xl mx-auto">
      <Heading level={2} className="mb-6 text-white">
        Struktur Organisasi
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {divisions.map((division) => (
          <DivisionCard
            key={division.id}
            icon={division.icon}
            name={division.name}
            description={division.description}
          />
        ))}
      </div>
    </section>
  );
};
