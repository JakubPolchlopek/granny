import { useEffect, useState } from "react";
import { fetchCourses } from "../supabase/coursesService";
import type { Course } from "../types";

export const useCourses = (limit?: number) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const data = await fetchCourses(limit);
        setCourses(data);
        setError(null);
      } catch (error) {
        console.error("Error loading courses:", error);
        setCourses([]);
        setError("Nie udało się załadować kursów.");
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, [limit]);

  return { courses, loading, error };
};
