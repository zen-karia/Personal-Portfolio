import React from 'react'
import { Link } from 'react-scroll'

export const AboutMeText = () => {
  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-6xl text-cyan gap-3 flex items-center mb-10'>
          About Me
        </h2>
        <p className='text-white text-2xl'>
           I am a CS student at the University of Waterloo with a keen interest 
           in software development, AI, and machine learning. My experience includes 
           shipping production-ready pipelines at eSentire, conducting research on AI 
           models for mental health prediction, and building impactful projects such as 
           SkillScan (an AI-powered resume analyzer), SpeakEz (a wearable ASL glove for 
           real-time translation), RecyClean (an AI-based waste classification tool), 
           and BeMyEyes (a wearable assistant for the visually impaired). I am passionate 
           about developing scalable, reliable, and human-centered software solutions.
        </p>
        <br />
        <p className='text-white text-2xl'>
           Skilled in Python, JavaScript, Go, React, Node.js, and cloud technologies 
           (AWS, GCP), I enjoy solving challenging problems and building applications that 
           make a meaningful impact. Apart from that, my hobbies include skydiving, dancing, 
           performing magic tricks, exploring AI innovations, and experimenting with creative 
           side projects. Let’s build something awesome — preferably after a coffee!! 😁
        </p>
        <div>
            <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white'><Link to="projects" smooth={true} spy={true} duration={500} offset={-160}>Click here to explore some cool stuff that I've made!!! 🚀</Link></button>
        </div>
    </div>
  )
}
