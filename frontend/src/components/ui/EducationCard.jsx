import React from "react";
import { BookOpen, MapPin, Calendar, Award } from "lucide-react";

const EducationCard = ({ item, index }) => {
  return (
    <div className={`w-5/10 md:w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
      <div
        className="p-2 md:p-6 rounded-xl border transition-all duration-300 hover:shadow-lg
        bg-white border-purple-200 shadow-sm hover:border-purple-300
        dark:bg-gray-900 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-800"
      >
        {/* Type Badge */}
        <div
          className="inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-4
          bg-purple-100 text-purple-700 border border-purple-200
          dark:bg-purple-700/30 dark:text-purple-300 dark:border-purple-600/50"
        >
          {item.type}
        </div>

        {/* Degree */}
        <h3 className="text-md md:text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 break-words">
          {item.degree}
        </h3>

        {/* Stream (if available) */}
        {item.stream && (
          <p className="text-sm mb-3 text-purple-600 dark:text-purple-400">
            Stream: {item.stream}
          </p>
        )}

        {/* Institution */}
        <div className="flex items-start gap-2 mb-3">
          <BookOpen
            className="mt-1 text-purple-600 dark:text-purple-400"
            size={16}
          />
          <p className="text-gray-700 dark:text-gray-300">{item.institution}</p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="text-purple-600 dark:text-purple-400" size={16} />
          <p className="text-gray-700 dark:text-gray-300">{item.location}</p>
        </div>

        {/* Period and Grade */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Calendar
              className="text-purple-600 dark:text-purple-400"
              size={16}
            />
            <span className="text-sm text-purple-700 dark:text-purple-300">
              {item.period}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="text-purple-600 dark:text-purple-400" size={16} />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              {item.grade}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
