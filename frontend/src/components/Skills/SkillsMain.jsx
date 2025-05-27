import React from 'react'
import { SkillsText } from './SkillsText'
import { AllSkills } from './AllSkills'
import { AllSkillsSM } from './AllSkillsSM'
import { motion } from 'framer-motion'
import { fadeIn } from '../../FramerMotion/variants'

export const SkillsMain = () => {
  return (
    <div id="skills">
        <div className='max-w-[1200px] px-4 mx-auto min-h-[550px] relative overflow-hidden mt-[50px]'>
            <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7}}><SkillsText /></motion.div>
            <div className=' left-[50%] absolute -translate-x-[50%] lg:block sm:hidden'>
                <AllSkills />
            </div>
            <div className='sm:block lg:hidden'>
                <AllSkillsSM />
            </div>
        </div>
    </div>
  )
}
