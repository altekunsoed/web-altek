import Link from "next/link";
import { praktikumBySemester } from "@/data/praktikum";

export default function PraktikumPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-10">Daftar Praktikum</h1>

      {praktikumBySemester.map((semester) => (
        <section key={semester.semester} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Semester {semester.semester}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {semester.praktikum.map((p) => (
              <Link
                key={p.slug}
                href={`/praktikum/${p.slug}`}
                className="block p-6 border rounded-lg hover:bg-gray-800 transition"
              >
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400">{p.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
