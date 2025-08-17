import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { SingleExperience } from './SingleExperience';
import { motion } from 'framer-motion'
import { fadeIn } from '../../FramerMotion/variants'

const AllExperienceData = [
    {
        job: 'Software Developer Intern',
        company: 'eSentire',
        date: 'May 2025 - Present',
        responsibilities: ["Developed threat detection pipelines using Go templates, YAML, and RESTful APIs", "Reduced data redundancy and simplified core architecture by creating a Generic Pipeline for all actions", "Streamlined pipeline workflows, shipped to production with AWS and optimized storage/data extraction using SQL"],
        bgImage: "../../images/esentire_icon.png"
    },
    {
        job: 'Research Intern',
        company: 'Navrachana University',
        date: 'May 2023 - Aug 2023',
        responsibilities: ["Conducted a comparative study of research papers on AI models (Random Forest, SVM) for anxiety prediction, identifying key limitations and model accuracies (85–92%)",
            "Explored Deep Learning techniques (MLP, RNN) and researched clinical parameters (GAD-7, PHQ-9, symptom duration/severity) influencing prediction outcomes"],
        bgImage: "../../images/navrachana.png"
    }
]

export const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-center relative'>
        {AllExperienceData.map((experience, index) => {
            return (
                <>
                    <SingleExperience key={index} experience={experience} />
                    {index < 1? (
                        <>
                        {/* Right Arrow for large screens */}
                        <motion.div
                          variants={fadeIn("right", 0)}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0 }}
                          className='flex-row items-center justify-center'
                        >
                          <FaArrowRight className='text-6xl text-orange md:block sm:hidden ml-[100px] mr-[100px]' />
                        </motion.div>
        
                        {/* Down Arrow for small screens */}
                        <motion.div
                          variants={fadeIn("down", 0)}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0 }}
                          className='flex items-center justify-center'
                        >
                          <FaArrowDown className='text-6xl text-orange md:hidden sm:block mt-[100px] mb-[100px]' />
                        </motion.div>
                      </>) : ("")}
                </>
            );
        })}
    </div>
  )
}
