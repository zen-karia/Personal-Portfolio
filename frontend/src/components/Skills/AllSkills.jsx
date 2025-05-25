import React from 'react'
import { SiHtml5 } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiPython } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { SiYaml } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { GrDocker } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { DiLinux } from "react-icons/di";
import { SiGnubash } from "react-icons/si";
import { SingleSkill } from './SingleSkill';

const AllSkillsData = [
  {
    skill: 'HTML5',
    icon: SiHtml5,
    colors: { border: 'border-orange-500', text: 'text-orange-600' },
  },
  {
    skill: 'CSS3',
    icon: DiCss3,
    colors: { border: 'border-blue-500', text: 'text-blue-600' },
  },
  {
    skill: 'JavaScript',
    icon: IoLogoJavascript,
    colors: { border: 'border-yellow-300', text: 'text-yellow-500' },
  },
  {
    skill: 'Python',
    icon: SiPython,
    colors: { border: 'border-yellow-400', text: 'text-blue-500' },
  },
  {
    skill: 'Go',
    icon: FaGolang,
    colors: { border: 'border-cyan-400', text: 'text-cyan-500' },
  },
  {
    skill: 'YAML',
    icon: SiYaml,
    colors: { border: 'border-gray-400', text: 'text-gray-500' },
  },
  {
    skill: 'MySQL',
    icon: GrMysql,
    colors: { border: 'border-blue-400', text: 'text-blue-500' },
  },
  {
    skill: 'ReactJS',
    icon: FaReact,
    colors: { border: 'border-cyan-400', text: 'text-cyan-500' },
  },
  {
    skill: 'NodeJS/ExpressJS',
    icon: FaNodeJs,
    colors: { border: 'border-green-500', text: 'text-green-600' },
  },
  {
    skill: 'Django',
    icon: SiDjango,
    colors: { border: 'border-green-600', text: 'text-green-700' },
  },
  {
    skill: 'Bootstrap',
    icon: FaBootstrap,
    colors: { border: 'border-purple-500', text: 'text-purple-600' },
  },
  {
    skill: 'TailwindCSS',
    icon: SiTailwindcss,
    colors: { border: 'border-blue-400', text: 'text-blue-500' },
  },
  {
    skill: 'OpenCV',
    icon: SiOpencv,
    colors: { border: 'border-green-400', text: 'text-green-500' },
  },
  {
    skill: 'Numpy',
    icon: SiNumpy,
    colors: { border: 'border-blue-400', text: 'text-blue-500' },
  },
  {
    skill: 'Google Cloud Platform',
    icon: DiGoogleCloudPlatform,
    colors: { border: 'border-blue-500', text: 'text-blue-600' },
  },
  {
    skill: 'Docker',
    icon: GrDocker,
    colors: { border: 'border-blue-400', text: 'text-blue-500' },
  },
  {
    skill: 'Git/GitHub',
    icon: IoLogoGithub,
    colors: { border: 'border-gray-500', text: 'text-gray-600' },
  },
  {
    skill: 'Linux',
    icon: DiLinux,
    colors: { border: 'border-black', text: 'text-gray-800' },
  },
  {
    skill: 'Bash',
    icon: SiGnubash,
    colors: { border: 'border-green-500', text: 'text-green-600' },
  },
]
export const AllSkills = () => {
  return (
    <div className="relative overflow-hidden w-full h-[300px]">
      <div className="flex items-center justify-center relative gap-10 max-w-[1200px] mx-auto mt-10 animate-scroll">
        {AllSkillsData.map((item, index) => (
          <SingleSkill
            key={index}
            text={item.skill}
            imgSvg={<item.icon />}
            colors={item.colors} // Pass the colors property
          />
        ))}
        {/* Duplicate the skills for seamless scrolling */}
        {AllSkillsData.map((item, index) => (
          <SingleSkill
            key={`duplicate-${index}`}
            text={item.skill}
            imgSvg={<item.icon />}
            colors={item.colors} // Pass the colors property
          />
        ))}
      </div>
    </div>
  );
};
