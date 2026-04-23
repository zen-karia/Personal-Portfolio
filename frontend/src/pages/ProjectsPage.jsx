import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-10"
      >
        <FiArrowLeft size={13} /> Back
      </Link>
      <h1 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
        All Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </main>
  );
}
