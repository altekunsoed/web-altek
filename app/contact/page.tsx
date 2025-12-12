import { contactList } from "@/data/contact";
import { ContactGrid } from "@/components/contact/organisms/ContactGrid";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <ContactGrid contacts={contactList} />
    </main>
  );
}
