import Card from "@/components/Card";
import Link from "next/link";
import { praktikumList } from "@/data/praktikum";

export default function PraktikumPage() {
  return (
    <main className="min-h-screen  bg-black">
      
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-10">Daftar Praktikum</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-1 ">
          {praktikumList.map((item) => (
            <Link key={item.slug} href={`/praktikum/${item.slug}`}>
              <Card title={item.title} description={item.description} />
            </Link>
          ))}
        </div>
        
      </div>
      
    </main>
    
  );
}
