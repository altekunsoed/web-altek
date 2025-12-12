import { aboutContent, divisions } from "@/data/about";
import { AboutHeader } from "@/components/about/organisms/AboutHeader";
import { DivisionGrid } from "@/components/about/organisms/DivisionGrid";
import { TeamSection } from "@/components/about/organisms/TeamSection";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <AboutHeader title={aboutContent.title} description={aboutContent.description} />
      <DivisionGrid divisions={divisions} />
      <TeamSection divisions={divisions} />
    </main>
  );
}
