import type { DictionaryWord } from "../types";
import { supabase } from "./client";

export const fetchDictionaryWords = async (): Promise<DictionaryWord[]> => {
  const { data, error } = await supabase
    .from("dictionary")
    .select("*");

    if (error) {
    console.error("Error fetching dictionary words:", error);
    return [];
    }
    return data as DictionaryWord[];
}