import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';
import { AllSkillsData } from './AllSkills';

export const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {AllSkillsData.map((item, index) => {
            return <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.7}} key={index} className='flex flex-col items-center'>
                <item.icon className={`text-7xl ${item.colors?.text || 'text-orange'}`}/>
                <p className='text-center mt-4 text-white text-xl'>{item.skill}</p>
            </motion.div>
        })}
    </div>
  )
}
