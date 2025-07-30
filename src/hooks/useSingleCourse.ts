import { useEffect, useState } from "react";
import { fetchSingleCourse } from "../supabase/singleCourseService";
import type { Course } from "../types";

export const useSingleCourse = (courseId: string) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCourse = async () => {
      const data = await fetchSingleCourse(courseId);
      setCourse(data);
      setLoading(false);
    }
    loadCourse();
  }, [courseId]);

  return { course, loading };
}