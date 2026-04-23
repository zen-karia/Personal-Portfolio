import React from 'react';
import { SiHtml5, SiPython, SiYaml, SiDjango, SiOpencv, SiNumpy, SiGnubash, SiTypescript, SiNextdotjs, SiExpress, SiFlask, SiTensorflow, SiKeras, SiPandas, SiScikitlearn, SiGithubactions, SiSnowflake, SiPostgresql, SiPostman } from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaGolang, FaNodeJs } from "react-icons/fa6";
import { FaReact, FaAws, FaGitAlt, FaCogs, FaMicrophone } from "react-icons/fa";
import { TbBrandCpp, TbApi, TbBrandReactNative, TbSql } from "react-icons/tb";
import { GrMysql, GrDocker } from "react-icons/gr";

import { SingleSkill } from './SingleSkill';
import { motion } from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';

export const AllSkillsData = [
  // Languages
  { skill: 'C/C++', icon: TbBrandCpp, colors: { border: 'border-blue-500', text: 'text-blue-500' } },
  { skill: 'Python', icon: SiPython, colors: { border: 'border-yellow-400', text: 'text-blue-500' } },
  { skill: 'JavaScript', icon: IoLogoJavascript, colors: { border: 'border-yellow-300', text: 'text-yellow-500' } },
  { skill: 'TypeScript', icon: SiTypescript, colors: { border: 'border-blue-400', text: 'text-blue-500' } },
  { skill: 'Go', icon: FaGolang, colors: { border: 'border-cyan-400', text: 'text-cyan-500' } },
  { skill: 'SQL', icon: TbSql, colors: { border: 'border-blue-300', text: 'text-blue-400' } },
  { skill: 'HTML/CSS', icon: SiHtml5, colors: { border: 'border-orange-500', text: 'text-orange-600' } },
  { skill: 'Bash', icon: SiGnubash, colors: { border: 'border-green-500', text: 'text-green-600' } },

  // Frameworks
  { skill: 'Next.js', icon: SiNextdotjs, colors: { border: 'border-black', text: 'text-gray-800' } },
  { skill: 'React', icon: FaReact, colors: { border: 'border-cyan-400', text: 'text-cyan-500' } },
  { skill: 'React Native', icon: TbBrandReactNative, colors: { border: 'border-cyan-400', text: 'text-cyan-500' } },
  { skill: 'Node.js', icon: FaNodeJs, colors: { border: 'border-green-500', text: 'text-green-600' } },
  { skill: 'Express.js', icon: SiExpress, colors: { border: 'border-gray-500', text: 'text-gray-600' } },
  { skill: 'Django', icon: SiDjango, colors: { border: 'border-green-600', text: 'text-green-700' } },
  { skill: 'Flask', icon: SiFlask, colors: { border: 'border-gray-600', text: 'text-gray-800' } },
  { skill: 'RESTful APIs', icon: TbApi, colors: { border: 'border-blue-400', text: 'text-blue-500' } },

  // Libraries
  { skill: 'OpenCV', icon: SiOpencv, colors: { border: 'border-red-500', text: 'text-red-500' } },
  { skill: 'Mediapipe', icon: FaCogs, colors: { border: 'border-blue-400', text: 'text-blue-500' } },
  { skill: 'TensorFlow', icon: SiTensorflow, colors: { border: 'border-orange-500', text: 'text-orange-600' } },
  { skill: 'Keras', icon: SiKeras, colors: { border: 'border-red-600', text: 'text-red-600' } },
  { skill: 'NumPy', icon: SiNumpy, colors: { border: 'border-blue-400', text: 'text-blue-500' } },
  { skill: 'Pandas', icon: SiPandas, colors: { border: 'border-purple-500', text: 'text-purple-600' } },
  { skill: 'Scikit-Learn', icon: SiScikitlearn, colors: { border: 'border-orange-400', text: 'text-orange-500' } },
  { skill: 'gTTS', icon: FaMicrophone, colors: { border: 'border-blue-400', text: 'text-blue-500' } },

  // Development Tools
  { skill: 'CI/CD', icon: FaCogs, colors: { border: 'border-gray-500', text: 'text-gray-600' } },
  { skill: 'Git', icon: FaGitAlt, colors: { border: 'border-orange-500', text: 'text-orange-600' } },
  { skill: 'GitHub Actions', icon: SiGithubactions, colors: { border: 'border-blue-500', text: 'text-blue-600' } },
  { skill: 'Snowflake', icon: SiSnowflake, colors: { border: 'border-blue-400', text: 'text-blue-500' } },
  { skill: 'AWS', icon: FaAws, colors: { border: 'border-yellow-500', text: 'text-yellow-600' } },
  { skill: 'MySQL', icon: GrMysql, colors: { border: 'border-blue-400', text: 'text-blue-500' } },
  { skill: 'PostgreSQL', icon: SiPostgresql, colors: { border: 'border-blue-500', text: 'text-blue-600' } },
  { skill: 'YAML', icon: SiYaml, colors: { border: 'border-gray-400', text: 'text-gray-500' } },
  { skill: 'GCP', icon: DiGoogleCloudPlatform, colors: { border: 'border-blue-500', text: 'text-blue-600' } },
  { skill: 'Docker', icon: GrDocker, colors: { border: 'border-blue-400', text: 'text-blue-500' } },
  { skill: 'Postman', icon: SiPostman, colors: { border: 'border-orange-500', text: 'text-orange-600' } }
];

export const AllSkills = () => {
  return (
    <div className="relative overflow-hidden w-full h-[300px]">
      <div className="flex items-center justify-center relative gap-10 max-w-[1200px] mx-auto mt-10 animate-scroll">
        {AllSkillsData.map((item, index) => (
          <SingleSkill
            key={index}
            text={item.skill}
            imgSvg={<item.icon />}
            colors={item.colors} 
          />
        ))}
        {/* Duplicate the skills for seamless scrolling */}
        {AllSkillsData.map((item, index) => (
          <SingleSkill
            key={`duplicate-${index}`}
            text={item.skill}
            imgSvg={<item.icon />}
            colors={item.colors} 
          />
        ))}
      </div>
    </div>
  );
};
