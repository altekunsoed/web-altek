import type { MetadataRoute } from "next";
import { getCourses } from "@/data/courses";
import { getSiteUrl } from "@/lib/site";

/**
 * Sitemap otomatis. Halaman detail praktikum dibuat dari data/courses,
 * jadi ikut bertambah bila ada mata kuliah baru. /contact tidak dimasukkan
 * karena hanya mengalihkan ke /about#kontak.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/praktikum`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/informasi`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/keanggotaan`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const coursePages: MetadataRoute.Sitemap = getCourses().map((course) => ({
    url: `${baseUrl}/praktikum/${course.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...coursePages];
}
