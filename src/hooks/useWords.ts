import { useEffect, useState } from "react";
import { fetchDictionaryWords } from "../supabase/dictionaryService";
import type { DictionaryWord } from "../types";

export const useWords = () => {
  const [dictionaryWords, setDictionaryWords] = useState<DictionaryWord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadWords = async () => {
      const data = await fetchDictionaryWords();
      setDictionaryWords(data);
      setLoading(false);
    };
    loadWords();
  }, []);

  return { dictionaryWords, loading };
}