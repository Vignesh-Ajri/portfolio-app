import ProjectCard from "./ui/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen mt-8 py-20 px-6 transition-colors duration-300 bg-purple-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            All Projects
          </h2>
          <p className="text-gray-600 dark:text-purple-200 mt-2">
            My selected works
          </p>
        </div>

        {/* Grid of project cards */}
        <div className="grid gap-8 mb-12 justify-center sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
