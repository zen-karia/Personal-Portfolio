import React from 'react'
import { ProjectsText } from './ProjectsText'
import { SingleProject } from './SingleProject'
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';

const Projects = () => [
  {
    name: 'SkillScan',
    image: '/images/SkillScan.png',
    link: 'https://github.com/zen-karia/SkillScan',
    description: "🚀SkillScan is an AI-powered platform that helps users enhance their resumes ✍️ and practice interviews 🎤 by providing smart, personalized feedback using GPT-4 and speech analysis. It simplifies career preparation through real-time mock interviews and intelligent resume critiques.",
    button1: <button className="font-bold text-white flex items-center justify-center gap-2 mt-4 px-6 py-2 border-black border rounded-full hover:bg-orange transition-all duration-500">
      View Code
      <FaGithub className='mb-[5px]'/>
    </button>
  },
  {
    name: 'RecyClean',
    image: '/images/RecyClean.jpg',
    link: 'https://github.com/zen-karia/RecyClean',
    description: "♻️ RecyClean is an AI-powered tool built at HackVille that helps users sort waste in real time using OpenCV, Google Cloud Vision, and GPT to promote eco-friendly habits effortlessly. 🌍 With voice feedback via gTTS and future plans for smart bins, it's designed to make sustainability simple and scalable! 📷🗑️",
    button1: <button className="font-bold text-white flex items-center justify-center gap-2 mt-4 px-6 py-2 border-black border rounded-full hover:bg-orange transition-all duration-500">
      View Code
      <FaGithub className='mb-[5px]'/>
    </button>
  },
  {
    name: 'GestureGroove',
    image: '/images/GestureGroove.png',
    link: 'https://github.com/zen-karia/GestureGroove',
    description: "🎶 GestureGroove is a gesture-controlled Spotify music controller that lets you play, pause, skip, and adjust volume using just your hand movements! ✋💃 Built with Python, OpenCV, MediaPipe, and React, it brings your music to your fingertips—literally. 🎧🖐️",
    button1: <button className="font-bold text-white flex items-center justify-center gap-2 mt-4 px-6 py-2 border-black border rounded-full hover:bg-orange transition-all duration-500">
      View Code
      <FaGithub className='mb-[5px]'/>
    </button>
  },
  {
    name: 'BeMyEyes',
    image: '/images/BeMyEyes.png',
    link: 'https://github.com/zen-karia/BeMyEyes',
    description: "👁️‍🗨️ BeMyEyes is a wearable assistant for visually impaired individuals that uses ultrasonic sensors and a buzzer to detect obstacles and enhance safe navigation. 🤖🔊 Built with Arduino, Python, and even Hugging Face APIs, it’s a smart step toward independence and accessibility for all. 🦮💡",
    button1: <button className="font-bold text-white flex items-center justify-center gap-2 mt-4 px-6 py-2 border-black border rounded-full hover:bg-orange transition-all duration-500">
      View Code
      <FaGithub className='mb-[5px]'/>
    </button>
  },
  {
    name: 'Personal Portfolio',
    image: '/images/MyPortfolio.png',
    link: 'https://github.com/zen-karia/Personal-Portfolio',
    description: "🌐 My Personal Portfolio is a clean and responsive space where I showcase my projects, skills, and experiences. 💼✨ It’s a reflection of who I am as a developer and a place where you can explore my journey. 🧑‍💻🚀",
    button1: <button className="font-bold text-white flex items-center justify-center gap-2 mt-4 px-6 py-2 border-black border rounded-full hover:bg-orange transition-all duration-500">
      View Code
      <FaGithub className='mb-[5px]'/>
    </button>
  },
  {
    name: 'European Soccer Database Management System',
    image: '/images/EuropeanSoccerDBMS.png',
    link: 'https://github.com/zen-karia/European-Soccer-Database',
    description: "⚽ European Soccer DBMS is a Python-MySQL integrated system that efficiently stores and manages data about soccer players and their teams across Europe. 🐍💾 Perfect for organizing stats, team info, and player details in one powerful database solution! 📊",
    button1: <button className="font-bold text-white flex items-center justify-center gap-2 mt-4 px-6 py-2 border-black border rounded-full hover:bg-orange transition-all duration-500">
      View Code
      <FaGithub className='mb-[5px]'/>
    </button>
  }
]
export const ProjectsMain = () => {
  return (
    <div id="projects" className='relative max-w-[1200px] mx-auto px-4'>
        <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0}} className='text-center mt-20'>
        <ProjectsText />
        </motion.div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-20 gap-x-40 mt-8'>
            {Projects().map((project, index) => {
                return (
                    <SingleProject key={index} project={project} />
                )})}
        </div>
    </div>
  )
}
