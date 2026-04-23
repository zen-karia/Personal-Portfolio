import { SiHtml5, SiPython, SiYaml, SiDjango, SiOpencv, SiNumpy, SiGnubash, SiTypescript, SiNextdotjs, SiExpress, SiFlask, SiTensorflow, SiKeras, SiPandas, SiScikitlearn, SiGithubactions, SiSnowflake, SiPostgresql, SiPostman } from 'react-icons/si';
import { DiGoogleCloudPlatform } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaGolang, FaNodeJs } from 'react-icons/fa6';
import { FaReact, FaAws, FaGitAlt, FaCogs, FaMicrophone } from 'react-icons/fa';
import { TbBrandCpp, TbApi, TbBrandReactNative, TbSql } from 'react-icons/tb';
import { GrMysql, GrDocker } from 'react-icons/gr';

const skillGroups = [
  {
    label: 'Languages',
    skills: [
      { name: 'C/C++',      Icon: TbBrandCpp },
      { name: 'Python',     Icon: SiPython },
      { name: 'JavaScript', Icon: IoLogoJavascript },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'Go',         Icon: FaGolang },
      { name: 'SQL',        Icon: TbSql },
      { name: 'HTML/CSS',   Icon: SiHtml5 },
      { name: 'Bash',       Icon: SiGnubash },
    ],
  },
  {
    label: 'Frameworks',
    skills: [
      { name: 'Next.js',      Icon: SiNextdotjs },
      { name: 'React',        Icon: FaReact },
      { name: 'React Native', Icon: TbBrandReactNative },
      { name: 'Node.js',      Icon: FaNodeJs },
      { name: 'Express.js',   Icon: SiExpress },
      { name: 'Django',       Icon: SiDjango },
      { name: 'Flask',        Icon: SiFlask },
      { name: 'RESTful APIs', Icon: TbApi },
    ],
  },
  {
    label: 'Libraries',
    skills: [
      { name: 'OpenCV',       Icon: SiOpencv },
      { name: 'Mediapipe',    Icon: FaCogs },
      { name: 'TensorFlow',   Icon: SiTensorflow },
      { name: 'Keras',        Icon: SiKeras },
      { name: 'NumPy',        Icon: SiNumpy },
      { name: 'Pandas',       Icon: SiPandas },
      { name: 'Scikit-Learn', Icon: SiScikitlearn },
      { name: 'gTTS',         Icon: FaMicrophone },
    ],
  },
  {
    label: 'Development Tools',
    skills: [
      { name: 'CI/CD',          Icon: FaCogs },
      { name: 'Git',            Icon: FaGitAlt },
      { name: 'GitHub Actions', Icon: SiGithubactions },
      { name: 'Snowflake',      Icon: SiSnowflake },
      { name: 'AWS',            Icon: FaAws },
      { name: 'MySQL',          Icon: GrMysql },
      { name: 'PostgreSQL',     Icon: SiPostgresql },
      { name: 'YAML',           Icon: SiYaml },
      { name: 'GCP',            Icon: DiGoogleCloudPlatform },
      { name: 'Docker',         Icon: GrDocker },
      { name: 'Postman',        Icon: SiPostman },
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
