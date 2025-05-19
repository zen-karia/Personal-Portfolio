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
    },
    {
        skill: 'CSS3',
        icon: DiCss3,
    },
    {
        skill: 'JavaScript',
        icon: IoLogoJavascript,
    },
    {
        skill: 'Python',
        icon: SiPython,
    },
    {
        skill: 'Go',
        icon: FaGolang,
    },
    {
        skill: 'YAML',
        icon: SiYaml,
    },
    {
        skill: 'MySQL',
        icon: GrMysql,
    },
    {
        skill: 'ReactJS',
        icon: FaReact,
    },
    {
        skill: 'NodeJS/ExpressJS',
        icon: FaNodeJs,
    },
    {
        skill: 'Django',
        icon: SiDjango,
    },
    {
        skill: 'Bootstrap',
        icon: FaBootstrap,
    },
    {
        skill: 'TailwindCSS',
        icon: SiTailwindcss,
    },
    {
        skill: 'OpenCV',
        icon: SiOpencv,
    },
    {
        skill: 'Numpy',
        icon: SiNumpy,
    },
    {
        skill: 'Google Cloud Platform',
        icon: DiGoogleCloudPlatform,
    },
    {
        skill: 'Docker',
        icon: GrDocker,
    },
    {
        skill: 'Git/GitHub',
        icon: IoLogoGithub,
    },
    {
        skill: 'Linux',
        icon: DiLinux,
    },
    {
        skill: 'Bash',
        icon: SiGnubash,
    },
]
export const AllSkills = () => {
  return (
    <div className="relative overflow-hidden w-full h-[300px]">
        <div className='flex items-center justify-center relative gap-10 max-w-[1200px] mx-auto mt-10 animate-scroll'>
            {AllSkillsData.map((item, index) => (
                <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
            ))}
            {/* Duplicate the skills for seamless scrolling */}
            {AllSkillsData.map((item, index) => (
                <SingleSkill key={`duplicate-${index}`} text={item.skill} imgSvg={<item.icon />} />
            ))}
        </div>
    </div>
  );
}
