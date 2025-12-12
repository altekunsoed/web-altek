import { praktikumBySemester } from "@/data/praktikum";

interface PraktikumDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PraktikumDetailPage({ params }: PraktikumDetailPageProps) {
  const { slug } = await params;
  
  const praktikum = praktikumBySemester
    .flatMap((s) => s.praktikum)
    .find((p) => p.slug === slug);

  if (!praktikum) {
    return <div className="p-6">Praktikum tidak ditemukan</div>;
  }

  // Encode PDF URL for Google PDF Viewer
  const pdfViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(praktikum.pdf)}&embedded=true`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">{praktikum.title}</h1>
        <p className="text-lg text-gray-400 mb-6">{praktikum.description}</p>

        {/* Viewer PDF */}
        <div className="w-full h-[80vh] border border-slate-700 rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe
            src={pdfViewerUrl}
            className="w-full h-full"
            title={praktikum.title}
          />
        </div>

        {/* Tombol Download */}
        <div className="mt-6 text-center">
          <a
            href={praktikum.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>
    </main>
  );
}
