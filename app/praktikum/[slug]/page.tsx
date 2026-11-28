import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCourseBySlug,
  getCourseModules,
  getCourseStarterpack,
  getCourses,
  getCurrentSemester,
} from "@/data/courses";
import {
  getTutorials,
  getTutorialsForCourseText,
} from "@/data/tutorials";
import { CourseDetailTabs } from "@/components/altek/CourseDetailTabs";

interface PraktikumDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getCourses().map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: PraktikumDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    return {
      title: "Mata Kuliah Tidak Ditemukan — ALTEK UNSOED",
    };
  }
  return {
    title: `Praktikum ${course.name} — ALTEK UNSOED`,
    description: course.description,
  };
}

export default async function PraktikumDetailPage({
  params,
}: PraktikumDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const modules = getCourseModules(course);
  const starterpack = getCourseStarterpack(course.slug);
  const currentSemester = getCurrentSemester();
  const isCurrentSemester = currentSemester.courses.some(
    (item) => item.slug === course.slug,
  );
  const courseTutorials = getTutorialsForCourseText(course.name);
  const totalTutorialsCount = getTutorials().length;

  return (
    <div className="altek-course-detail-page" id="page-course-detail">
      <CourseDetailTabs
        course={course}
        modules={modules}
        starterpack={starterpack}
        currentPeriod={currentSemester.period}
        isCurrentSemester={isCurrentSemester}
        courseTutorials={courseTutorials}
        totalTutorialsCount={totalTutorialsCount}
      />
    </div>
  );
}
