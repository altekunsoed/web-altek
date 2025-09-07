import { praktikumList } from "@/data/praktikum";

interface PraktikumDetailPageProps {
    params: Promise<{ slug: string }>;
}

export default async function PraktikumDetailPage({
    params,
}: PraktikumDetailPageProps) {
    const { slug } = await params; // 👈 harus di-await

    const praktikum = praktikumList.find((p) => p.slug === slug);

    if (!praktikum) {
        return <div className="p-6">Praktikum tidak ditemukan</div>;
    }

    return (
        <main className="min-h-screen bg-black text-white py-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">{praktikum.title}</h1>
                <p className="text-lg text-gray-400 mb-6">{praktikum.description}</p>

                {/* Viewer PDF */}
                <div className="w-full h-[80vh] border rounded-lg overflow-hidden shadow">
                    <iframe
                        src={praktikum.pdf}
                        className="w-full h-full"
                        title={praktikum.title}
                    />
                </div>

                {/* Tombol Download */}
                <div className="mt-4 text-center">
                    <a
                        href={praktikum.pdf}
                        download
                        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Download PDF
                    </a>
                </div>
            </div>
        </main>
    );
}
