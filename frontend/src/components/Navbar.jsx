import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-semibold text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity text-sm"
        >
          Zenil Karia
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          <a href="/#about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">About</a>
          <a href="/#experience" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Experience</a>
          <Link to="/projects" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Projects</Link>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggle} aria-label="Toggle theme" className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 px-6 py-4 flex flex-col gap-4">
          <a href="/#about" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">About</a>
          <a href="/#experience" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Experience</a>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Projects</Link>
        </div>
      )}
    </header>
  );
}
