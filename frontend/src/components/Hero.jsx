import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';


export default function Hero() {
  return (
    <section id="hero" className="max-w-3xl mx-auto px-6 pt-16 pb-14 flex flex-col items-center text-center">
      <img
        src="/images/ZenilKaria.jpg"
        alt="Zenil Karia"
        className="w-28 h-28 rounded-full object-cover ring-1 ring-gray-200 dark:ring-gray-700"
      />

      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mt-5">
        Zenil Karia
      </h1>



      <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
        Software Engineer · University of Waterloo
      </p>

      <span className="inline-flex items-center gap-1.5 mt-3 text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        Open to Fall 2026 internships
      </span>

      <p className="text-gray-600 dark:text-gray-400 mt-5 text-sm leading-relaxed max-w-lg">
        CS student at UWaterloo building full-stack applications and AI tools.
        Previously interned at eSentire shipping production pipelines. Interested
        in developer tools, machine learning, and software that makes a real impact.
      </p>

      <div className="flex items-center gap-5 mt-6">
        <a
          href="https://github.com/zen-karia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          <FiGithub size={19} />
        </a>
        <a
          href="https://www.linkedin.com/in/zenil-karia-0190b729b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          <FiLinkedin size={19} />
        </a>
        <a
          href="mailto:zenil.karia@uwaterloo.ca"
          aria-label="Email"
          className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          <FiMail size={19} />
        </a>
      </div>
    </section>
  );
}
