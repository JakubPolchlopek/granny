import { Link } from "react-router-dom";
import { useCourses } from "../hooks/useCourses";
import LastCourseCard from "./LastCourseCard";

const LastCourses = () => {
  const { courses, loading } = useCourses(3);

  if (loading) return (
    <div className="flex justify-center items-center py-10">
      <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></span>
    </div>
  );

  return (
    <section className="space-y-6 max-w-4xl mx-auto px-4 mb-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Ostatnie kursy</h2>
      
      <div className="space-y-4 mt-4">
        {courses.length > 0 ? (
          courses.map(course => (
            <LastCourseCard key={course.id} {...course} />
          ))
        ) : (
          <div className="text-center text-gray-500">
            <p>Brak dostępnych kursów</p>
            <Link to="/courses" className="text-indigo-600 hover:underline mt-2 inline-block">
              Przejdź do wszystkich kursów
            </Link>
          </div>
        )}
      </div>
    </section>

  );
};

export default LastCourses;