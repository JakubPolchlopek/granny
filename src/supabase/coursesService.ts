import type { Course } from "../types";
import { supabase } from "./client";

export const fetchCourses = async (limit? :number): Promise<Course[]> => {
  const query = supabase
    .from("courses")
    .select("*");

  if(limit) {
    query.limit(limit);
  }

  const {data, error} = await query;
  
  if (error) {
    console.error("Error fetching courses:", error);
    return [];
  }

  return data as Course[];
}