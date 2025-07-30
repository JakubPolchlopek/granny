import { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SingleWord from "../components/SingleWord";
import { useWords } from "../hooks/useWords";

const DictionaryPage = () => {
  const { dictionaryWords, loading } = useWords();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 200);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Ładowanie słownika...</p>
      </div>
    );
  }

  const filteredWords = dictionaryWords.filter(word =>
    word.word.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
          Słownik Nowoczesności
        </h1>

        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-md">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>
        </div>



        {filteredWords.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Brak wyników dla "{debouncedSearchTerm}"</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWords.map(word => (
              <SingleWord key={word.id} singleWord={word} />
            ))}
          </div>
        )}
        {/* <AIAssistant /> */}
      </main>
    </div>
  );
};

export default DictionaryPage;
