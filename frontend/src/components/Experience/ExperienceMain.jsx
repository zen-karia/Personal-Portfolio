import React from 'react'
import { ExperienceText } from './ExperienceText'
import { ExperienceTop } from './ExperienceTop'
import { AllExperience } from './AllExperience'
import { motion } from 'framer-motion'
import { fadeIn } from '../../FramerMotion/variants'

export const ExperienceMain = () => {
  return (
    <div id="experience" className='max-w-[1200px] mx-auto px-4'>
        <motion.div variants={fadeIn("down", 0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0}}><ExperienceText />
        <ExperienceTop /></motion.div>
        <div className='w-full h-[5px] mt-4 bg-lightGrey lg:block sm:hidden'></div>
        <AllExperience />
        
    </div>
  )
}
