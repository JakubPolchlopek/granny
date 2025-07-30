import { Link } from "react-router-dom";
import type { Course } from "../types";

const LastCourseCard = ({ id, title }: Course) => {
  return (
    <div className="rounded-lg p-4 flex items-center justify-between max-w-md mx-auto shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      <p className="text-lg font-semibold text-gray-800">{title}</p>
      <Link
        to={`/courses/${id}`}
        className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        aria-label={`Go to course ${title}`}
      >
        Przejdź do kursu →
      </Link>
    </div>
  );
};

export default LastCourseCard;
