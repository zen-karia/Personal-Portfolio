import { SiHtml5, SiCss3, SiPython, SiDjango, SiOpencv, SiNumpy, SiGnubash, SiTypescript, SiNextdotjs, SiFlask, SiFastapi, SiTensorflow, SiPandas, SiScikitlearn, SiGithubactions, SiSnowflake, SiPostgresql, SiKotlin, SiSpringboot, SiGraphql, SiApachekafka, SiOpenai, SiKubernetes, SiRedis } from 'react-icons/si';
import { DiGoogleCloudPlatform, DiJava } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaGolang, FaNodeJs } from 'react-icons/fa6';
import { FaReact, FaAws, FaCogs } from 'react-icons/fa';
import { TbBrandCpp, TbLetterC, TbBrandReactNative, TbSql, TbVector, TbDatabaseSearch } from 'react-icons/tb';
import { GrMysql, GrDocker } from 'react-icons/gr';

const skillGroups = [
  {
    label: 'Languages',
    skills: [
      { name: 'C',          Icon: TbLetterC },
      { name: 'C++',        Icon: TbBrandCpp },
      { name: 'Python',     Icon: SiPython },
      { name: 'Java',       Icon: DiJava },
      { name: 'Kotlin',     Icon: SiKotlin },
      { name: 'JavaScript', Icon: IoLogoJavascript },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'Go',         Icon: FaGolang },
      { name: 'SQL',        Icon: TbSql },
      { name: 'HTML5',      Icon: SiHtml5 },
      { name: 'CSS3',       Icon: SiCss3 },
      { name: 'Bash',       Icon: SiGnubash },
    ],
  },
  {
    label: 'Frameworks',
    skills: [
      { name: 'React',        Icon: FaReact },
      { name: 'Next.js',      Icon: SiNextdotjs },
      { name: 'Node.js',      Icon: FaNodeJs },
      { name: 'Spring Boot',  Icon: SiSpringboot },
      { name: 'Django',       Icon: SiDjango },
      { name: 'Flask',        Icon: SiFlask },
      { name: 'React Native', Icon: TbBrandReactNative },
      { name: 'GraphQL',      Icon: SiGraphql },
      { name: 'gRPC',         Icon: TbVector },
      { name: 'FastAPI',      Icon: SiFastapi },
    ],
  },
  {
    label: 'AI/ML',
    skills: [
      { name: 'OpenAI Agents SDK', Icon: SiOpenai },
      { name: 'RAG',               Icon: TbDatabaseSearch },
      { name: 'TensorFlow',        Icon: SiTensorflow },
      { name: 'OpenCV',            Icon: SiOpencv },
      { name: 'Scikit-Learn',      Icon: SiScikitlearn },
      { name: 'NumPy',             Icon: SiNumpy },
      { name: 'Pandas',            Icon: SiPandas },
    ],
  },
  {
    label: 'Development Tools',
    skills: [
      { name: 'CI/CD',          Icon: FaCogs },
      { name: 'GitHub Actions', Icon: SiGithubactions },
      { name: 'AWS',            Icon: FaAws },
      { name: 'Kubernetes',     Icon: SiKubernetes },
      { name: 'Kafka',          Icon: SiApachekafka },
      { name: 'Snowflake',      Icon: SiSnowflake },
      { name: 'Redis',          Icon: SiRedis },
      { name: 'MySQL',          Icon: GrMysql },
      { name: 'PostgreSQL',     Icon: SiPostgresql },
      { name: 'GCP',            Icon: DiGoogleCloudPlatform },
      { name: 'Docker',         Icon: GrDocker },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-gray-800">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
        Skills
      </h2>
      <div className="space-y-5">
        {skillGroups.map(({ label, skills }) => (
          <div key={label} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
            <span className="text-xs text-gray-400 dark:text-gray-500 sm:w-36 flex-shrink-0 sm:pt-1 font-medium">
              {label}
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.map(({ name, Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  <Icon size={12} className="flex-shrink-0" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
