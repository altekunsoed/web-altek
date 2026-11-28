import Link from "next/link";
import type { CourseItem } from "@/data/courses";
import { AltekIcon } from "@/components/altek/AltekIcon";

interface CourseCardProps {
  course: CourseItem;
  moduleCount?: number;
}

/**
 * Kartu mata kuliah praktikum (dipakai di Beranda, Tab Semester Ini, dan Tab Daftar Praktikum).
 */
export function CourseCard({ course, moduleCount = 0 }: CourseCardProps) {
  const modLabel =
    moduleCount > 1 ? `${moduleCount} modul PDF tersedia` : "Modul tersedia";

  return (
    <Link
      href={`/praktikum/${course.slug}`}
      className="altek-course-card reveal"
      aria-label={`Lihat ringkasan Praktikum ${course.name}`}
    >
      <div className="altek-course-card-top">
        <div className={`course-icon tone-${course.tone}`} aria-hidden="true">
          <AltekIcon name={course.icon} variant="icon" />
        </div>
        <div className="altek-course-card-badges">
          <span className="altek-semester-chip">SEMESTER {course.semester}</span>
        </div>
      </div>

      <div className="altek-course-card-body">
        <h4>Praktikum {course.name}</h4>
        <p>{course.description}</p>

        {course.labs.length > 0 && (
          <div className="altek-card-labs" aria-label="Laboratorium">
            {course.labs.map((lab) => (
              <span key={lab} className="altek-card-lab-chip">
                <AltekIcon name="lab" variant="mini" />
                <span>{lab}</span>
              </span>
            ))}
          </div>
        )}

        <div className="altek-course-card-bottom">
          {moduleCount > 0 && (
            <span className="altek-module-status">
              <i aria-hidden="true" />
              <span>{modLabel}</span>
            </span>
          )}
          <span className="altek-course-open-label">
            <span>Lihat detail</span>
            <AltekIcon name="arrow-right" variant="mini" />
          </span>
        </div>
      </div>
    </Link>
  );
}
