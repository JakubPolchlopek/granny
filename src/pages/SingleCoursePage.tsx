import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useSingleCourse } from "../hooks/useSingleCourse";
import type { CourseContentItem } from "../types";

const renderContentItem = (item: CourseContentItem, index: number) => {
  switch (item.type) {
    case "paragraph":
      return (
        <p key={index} className="mb-4 text-gray-700">
          {item.content}
        </p>
      );
    case "step":
      return (
        <div
          key={index}
          className="mb-6 p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded shadow-sm"
        >
          <h3 className="font-semibold text-lg text-indigo-700 mb-1">
            {item.title}
          </h3>
          <p className="text-gray-700">{item.content}</p>
        </div>
      );
    case "bullet":
      return (
        <ul key={index} className="list-disc list-inside mb-6 text-gray-700">
          {item.items.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <div key={index} className="mb-6 flex justify-center">
          <img
            src={item.url}
            alt="Course illustration"
            className="max-w-full rounded shadow"
          />
        </div>
      );
    default:
      return null;
  }
};

const SingleCoursePage = () => {
  const { courseId } = useParams<{ courseId?: string }>();

  if (!courseId) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Brak ID kursu w adresie URL.</p>
      </div>
    );
  }

  const { course, loading } = useSingleCourse(courseId);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Ładowanie kursu...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Kurs nie znaleziony.</p>
      </div>
    );
  }

  const content = course.content ?? [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">{course.title}</h1>
        <p className="mb-10 text-gray-600">{course.description}</p>

        {content.length > 0 ? (
          content.map((item, index) => renderContentItem(item, index))
        ) : (
          <p className="text-center text-gray-500">Brak zawartości kursu.</p>
        )}
      </main>
    </div>
  );
};

export default SingleCoursePage;
