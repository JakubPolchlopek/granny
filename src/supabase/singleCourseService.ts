import type { Course } from "../types";
import { supabase } from "./client";

export const fetchSingleCourse = async (courseId: string): Promise<Course | null> => {
  const {data, error} = await supabase
    .from("courses")
    .select("*")
    .eq("id", courseId)
    .single();

    if(error) {
      console.error("Error fetching single course:", error);
      return null;
    }

    return data as Course;
}