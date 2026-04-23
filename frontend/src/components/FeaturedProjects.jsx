import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const featured = projects.filter(p => p.featured);

export default function FeaturedProjects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          Projects
        </h2>
        <Link
          to="/projects"
          className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          View all <FiArrowRight size={12} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {featured.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
