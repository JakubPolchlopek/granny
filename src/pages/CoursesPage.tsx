import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useCourses } from "../hooks/useCourses";

const CoursesPage = () => {
  const { courses, loading, error } = useCourses();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 200);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="animate-spin rounded-full h-10 w-10 border-b-4 border-indigo-600"></span>
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-600 mt-10">
        <p>Coś poszło nie tak: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
          Kursy Nowoczesności
        </h1>
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-md">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <p className="text-center text-gray-500 mt-16 text-lg">
            Nie znaleziono kursów na "{debouncedSearchTerm}"
          </p>
        ) : (
          <div className="flex flex-col gap-8">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        )}
        {/* <AIAssistant /> */}
      </main>

    </div>
  );
};

export default CoursesPage;
