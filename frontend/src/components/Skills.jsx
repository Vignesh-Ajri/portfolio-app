import { useState } from "react";
import { Monitor, Code, Database, Settings } from "lucide-react";
import skillsData from "../data/skills";
import SkillCard from "./ui/SkillCard";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Demo categories
  const categories = [
    { name: "All", icon: Monitor },
    { name: "Frontend", icon: Code },
    { name: "Backend", icon: Settings },
    { name: "Database", icon: Database },
    { name: "Programming", icon: Code },
    { name: "Tools", icon: Settings },
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-20 px-6 transition-colors duration-300 bg-purple-50 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg font-medium mb-4 text-purple-600 dark:text-purple-400">
            Explore My
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400">
              <Monitor size={24} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Skills
            </h1>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-purple-700 text-white dark:bg-purple-600 dark:text-gray-100"
                    : "bg-white text-purple-700 hover:bg-purple-50 border border-purple-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-700"
                }`}
              >
                <IconComponent size={18} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills Card */}
        <SkillCard filteredSkills={filteredSkills} />
      </div>
    </section>
  );
};

export default Skills;
