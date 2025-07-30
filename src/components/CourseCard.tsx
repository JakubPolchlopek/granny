import { FlameIcon, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Course } from '../types';

const getDifficultyStyle = (level: string) => {
  switch (level?.toLowerCase()) {
    case 'łatwy':
      return 'bg-green-100 text-green-700';
    case 'średni':
      return 'bg-yellow-100 text-yellow-700';
    case 'trudny':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-500';
  }
};

const CourseCard = (course: Course) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-5xl mx-auto md:flex md:items-center md:gap-6 transition-shadow hover:shadow-lg">
      
      <div className="w-full h-48 md:h-48 md:w-60 flex-shrink-0 bg-gray-200 flex items-center justify-center">
        {course.image_url ? (
          <img
            src={course.image_url}
            alt={course.title}
            className="object-cover w-full h-full"
            loading="lazy"
            draggable={false}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400">
            <ImageIcon className="w-12 h-12" />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-3 justify-center md:flex-1">
        <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>


        {course.difficulty && (
          <div className={`inline-flex items-center gap-1 px-3 py-1 text-sm rounded-full w-fit ${getDifficultyStyle(course.difficulty)}`}>
            <FlameIcon className="w-4 h-4" />
            {course.difficulty}
          </div>
        )}

        <Link
          to={`/courses/${course.id}`}
          className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors text-sm mt-2"
        >
          Przejdź do szczegółów →
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
