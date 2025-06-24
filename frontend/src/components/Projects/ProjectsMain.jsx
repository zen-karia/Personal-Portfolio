import React from 'react'
import { ProjectsText } from './ProjectsText'
import { SingleProject } from './SingleProject'
import { motion } from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';

const Projects = () => [
  {
    name: 'SpeakEz',
    image: '/images/SpeakEz.jpg',
    link: 'https://github.com/zen-karia/SpeakEz',
    demoLink: 'https://youtu.be/e9CIITDBNAk',
    description: "🧤💬 SpeakEz is a smart glove that translates ASL gestures into speech 🔊 in under 2 seconds ⚡ using flex sensors, real-time WiFi, and a custom ML model 🧠. No cameras, no clutter — just seamless, hands-on communication ✨."
  },
  {
    name: 'SkillScan',
    image: '/images/SkillScan.png',
    link: 'https://github.com/zen-karia/SkillScan',
    description: "🚀SkillScan is an AI-powered platform that helps users enhance their resumes ✍️ and practice interviews 🎤 by providing smart, personalized feedback using GPT-4 and speech analysis. It simplifies career preparation through real-time mock interviews and intelligent resume critiques."
  },
  {
    name: 'RecyClean',
    image: '/images/RecyClean.jpg',
    link: 'https://github.com/zen-karia/RecyClean',
    description: "♻️ RecyClean is an AI-powered tool built at HackVille that helps users sort waste in real time using OpenCV, Google Cloud Vision, and GPT to promote eco-friendly habits effortlessly. 🌍 With voice feedback via gTTS and future plans for smart bins, it's designed to make sustainability simple and scalable! 📷🗑️"
  },
  {
    name: 'GestureGroove',
    image: '/images/GestureGroove.png',
    link: 'https://github.com/zen-karia/GestureGroove',
    description: "🎶 GestureGroove is a gesture-controlled Spotify music controller that lets you play, pause, skip, and adjust volume using just your hand movements! ✋💃 Built with Python, OpenCV, MediaPipe, and React, it brings your music to your fingertips—literally. 🎧🖐️"
  },
  {
    name: 'BeMyEyes',
    image: '/images/BeMyEyes.png',
    link: 'https://github.com/zen-karia/BeMyEyes',
    description: "👁️‍🗨️ BeMyEyes is a wearable assistant for visually impaired individuals that uses ultrasonic sensors and a buzzer to detect obstacles and enhance safe navigation. 🤖🔊 Built with Arduino, Python, and even Hugging Face APIs, it's a smart step toward independence and accessibility for all. 🦮💡"
  },
  {
    name: 'Personal Portfolio',
    image: '/images/MyPortfolio.png',
    link: 'https://github.com/zen-karia/Personal-Portfolio',
    description: "🌐 My Personal Portfolio is a clean and responsive space where I showcase my projects, skills, and experiences. 💼✨ It's a reflection of who I am as a developer and a place where you can explore my journey. 🧑‍💻🚀"
  },
  {
    name: 'European Soccer Database Management System',
    image: '/images/EuropeanSoccerDBMS.png',
    link: 'https://github.com/zen-karia/European-Soccer-Database',
    description: "⚽ European Soccer DBMS is a Python-MySQL integrated system that efficiently stores and manages data about soccer players and their teams across Europe. 🐍💾 Perfect for organizing stats, team info, and player details in one powerful database solution! 📊"
  }
]
export const ProjectsMain = () => {
  return (
    <div id="projects" className='relative max-w-[1200px] mx-auto px-4'>
        <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0}} className='text-center mt-20'>
        <ProjectsText />
        </motion.div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-20 gap-x-40 mt-8'>
            {Projects().map((project, index) => {
                return (
                    <SingleProject key={index} project={project} />
                )})}
        </div>
    </div>
  )
}
