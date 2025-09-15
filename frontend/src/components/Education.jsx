import { GraduationCap, Calendar, Award, MapPin, BookOpen } from "lucide-react";
import EducationCard from "./ui/EducationCard";

export default function EducationSection() {
  // Replace demo data with your actual data
  const educationData = [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Summit School of Management",
      location: "Hyderabad",
      period: "2022-24",
      grade: "CGPA: 8.75",
      type: "PG Degree",
    },
    {
      degree: "Bachelor of Science in Information Technology (B.Sc IT)",
      institution: "Silverline University",
      location: "Chennai",
      period: "2018-21",
      grade: "CGPA: 8.30",
      type: "Degree",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sunrise Junior College",
      location: "Pune",
      period: "2016-18",
      grade: "Percentage: 82%",
      type: "PUC",
      stream: "Science (PCM)",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Greenwood High School",
      location: "Nagpur",
      period: "2016",
      grade: "Percentage: 88%",
      type: "School",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-6 transition-colors duration-300 bg-purple-50 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg font-medium mb-4 text-purple-600 dark:text-purple-400">
            My Academic Journey
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-800 dark:text-purple-300">
              <GraduationCap size={24} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Education
            </h1>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-300 dark:bg-purple-700/40"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } flex items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-6 h-6 rounded-full border-4 bg-purple-600 border-purple-200 dark:bg-purple-500 dark:border-purple-300"></div>
                </div>

                {/* Education Card */}
                <EducationCard key={index} item={item} index={index} />

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
