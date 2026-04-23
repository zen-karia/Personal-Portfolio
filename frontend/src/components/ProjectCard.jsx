import { FiGithub, FiYoutube } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md dark:hover:shadow-gray-900/40 transition-all duration-200">
      <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{project.name}</h3>
          <div className="flex items-center gap-2.5 flex-shrink-0 mt-0.5">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Demo"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <FiYoutube size={15} />
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <FiGithub size={15} />
            </a>
          </div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.techstack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
