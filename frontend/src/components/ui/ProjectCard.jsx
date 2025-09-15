import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, tags, image, github, demo }) => {
  return (
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-md transition dark:bg-purple-900/20 dark:border-purple-700/40 overflow-hidden">
      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6">
        {/* Title & Description */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-purple-200 mb-3">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700 dark:bg-purple-800/40 dark:text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              <Github size={18} /> Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
