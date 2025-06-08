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
import { FaAws } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';
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
        skill: 'Amazon Web Services',
        icon: FaAws,
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

export const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {AllSkillsData.map((item, index) => {
            return <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7}} key={index} className='flex flex-col items-center'>
                <item.icon className='text-7xl text-orange'/>
                <p className='text-center mt-4 text-white text-xl'>{item.skill}</p>
            </motion.div>
        })}
    </div>
  )
}
