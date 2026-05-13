
const experiences = [
  {
    company: 'TripToGo',
    companyUrl: 'https://www.triptogo.com',
    logo: '/images/triptogo.png',
    role: 'Software Developer Intern',
    date: 'May 2026 – Aug 2026',
    bullets: [
      <>Orchestrating backend microservices and <b>GraphQL</b> APIs for a travel planning platform on a <b>Kotlin/Spring Boot</b> stack, working with <b>Kafka</b> event streams, <b>JPA/Hibernate</b> persistence, <b>Flyway</b>-managed SQL schema migrations, and deploying to <b>AWS EKS</b> via automated CI/CD pipelines</>
    ],
  },
  {
    company: 'eSentire',
    companyUrl: 'https://www.esentire.com',
    logo: '/images/esentire_icon.png',
    role: 'Software Developer Intern | Co-op Evaluation: Outstanding',
    date: 'May 2025 – Aug 2025',
    bullets: [
      <>Refactored <b>Python</b> threat-response pipelines to a low-code generic platform with <b>Go</b> templates, <b>YAML</b>, & <b>REST APIs</b> across 7+ services (e.g. CrowdStrike), reducing code duplication by <b>70%</b> and increasing reusability by <b>50%</b></>,
      <>Accelerated <b>AWS</b> CI/CD deployments by <b>unit testing 20+</b> modular HTTP, Snowflake handlers with <b>Postman</b> collections for REST contracts and error paths, shipping each to production within <b>48 hours</b></>,
      <>Improved visibility and reduced incident response time by building a <b>Slack notification handler</b> to proactively alert engineering teams of execution failures, replacing manual log checks in <b>AWS</b></>,
      <>Lowered average Snowflake <b>SQL</b> query runtime <b>from 10s to 7s</b> by utilizing stored procedures to query and retrieve required data for downstream processes</>
    ],
  },
  {
    company: 'Navrachana University',
    companyUrl: 'https://www.nuv.ac.in',
    logo: '/images/navrachana.png',
    role: 'Research Intern',
    date: 'May 2023 – Aug 2023',
    bullets: [
      'Conducted comparative study of AI models (Random Forest, SVM) for anxiety prediction with 85–92% accuracy',
      'Researched Deep Learning techniques (MLP, RNN) and clinical parameters (GAD-7, PHQ-9) influencing outcomes',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-gray-800">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex gap-4 pl-4 border-l-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors duration-200">
            {exp.icon ? (
              <div className="w-7 h-7 rounded flex-shrink-0 mt-0.5 bg-gray-50 dark:bg-gray-800 p-0.5 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <exp.icon size={16} />
              </div>
            ) : (
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-7 h-7 rounded object-contain flex-shrink-0 mt-0.5 bg-gray-50 dark:bg-gray-800 p-0.5"
              />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 mb-3">
                <div>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {exp.company}
                  </a>
                  <span className="text-sm text-gray-500 dark:text-gray-400"> · {exp.role}</span>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0">{exp.date}</span>
              </div>
              <ul className="space-y-1.5">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex gap-2">
                    <span className="text-gray-300 dark:text-gray-600 flex-shrink-0 select-none">–</span>
                    <span className="flex-1">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
