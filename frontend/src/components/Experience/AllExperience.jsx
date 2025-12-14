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
        date: 'May 2025 - Aug 2025',
        responsibilities: ["Refactored Python code for 2 pipelines and 7+ threat services using Go templates, YAML, and REST APIs", "Reduced 70% code duplication and increased 50% component re-usability via CI/CD optimization", "Lowered average SQL query runtime in Snowflake from 10s to 7s by optimizing data storage and retrieval", "Accelerated pipeline component deployments via AWS, shipping each to production within 48 hours"],
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
