import { contactList } from "@/data/contact";
import { ContactGrid } from "@/components/contact/organisms/ContactGrid";
import { ContactFormSection } from "@/components/contact/organisms/ContactFormSection";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pb-20">
      {/* Bagian Grid Card Kontak (Email, IG, LinkedIn, GitHub) */}
      <ContactGrid contacts={contactList} />

      {/* Bagian Form Direct Email & Google Maps */}
      <ContactFormSection />
    </main>
  );
}
