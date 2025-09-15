import { GraduationCap, Award } from "lucide-react";
import DetailCard from "./ui/DetailCard";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 transition-colors duration-300 bg-purple-50 dark:bg-gray-950"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg font-medium mb-4 text-purple-600 dark:text-purple-400">
            Get To Know Me
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
            About Me
          </h1>
        </div>

        {/* About Content */}
        <div className="space-y-12">
          {/* Name & Role/Bio */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Vignesh S.
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 dark:text-gray-300 font-medium mb-2">
                Full-Stack Developer | React & Django Enthusiast
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                About yourself in short (20 words).
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DetailCard
              Icon={GraduationCap}
              title="Education"
              description="XYZ pursuing"
              detail="CGPA/Marks: 00.00"
            />
            <DetailCard
              Icon={Award}
              title="Learning"
              description="DevOps and Cloud Computing"
              detail="Ready to Start My Journey"
            />
          </div>

          {/* Selected Works */}
          <div className="p-8 rounded-xl border bg-white border-purple-200 shadow-sm dark:bg-gray-900 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Selected Project Works
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Developed{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    "Project Name"
                  </span>
                  , details about your project in short.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  Built{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    "Project Name"
                  </span>
                  , details about your project in short.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a
              href="/all-projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
