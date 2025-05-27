import React from 'react'
import { AboutMeText } from './AboutMeText'
import { motion } from 'framer-motion'
import { fadeIn } from '../../FramerMotion/variants'

export const AboutMeMain = () => {
  return (
    <div id="about" className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto justify-between items-center mt-[100px]'>
        <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0}}><AboutMeText /></motion.div>
    </div>
  )
}
