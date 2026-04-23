import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 mt-8">
      <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
        <p className="text-xs text-gray-400 dark:text-gray-600">
          © 2026 Zenil Karia
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/zen-karia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <FiGithub size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/zenil-karia-0190b729b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <FiLinkedin size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
