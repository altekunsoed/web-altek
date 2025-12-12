import React from "react";
import { ContactCard } from "../molecules/ContactCard";
import { ContactInfo } from "@/data/contact";

interface ContactGridProps {
  contacts: ContactInfo[];
}

export const ContactGrid: React.FC<ContactGridProps> = ({ contacts }) => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
        Hubungi Kami
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
