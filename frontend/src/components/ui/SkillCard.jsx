import React from "react";

function SkillCard({ filteredSkills }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {filteredSkills.map((skill) => (
        <div
          key={skill.name}
          className="group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1
               bg-white dark:bg-gray-900 backdrop-blur-lg border-gray-200 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
        >
          {/* Skill Icon */}
          <div className="flex justify-center mb-4">
            <div
              className="w-16 h-16 rounded-full p-3 
                transition-all duration-300 group-hover:scale-110 
                bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-700 
                dark:group-hover:bg-gray-600"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Skill Name */}
          <h3 className="text-lg font-semibold text-center mb-3 text-gray-900 dark:text-gray-100">
            {skill.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default SkillCard;
