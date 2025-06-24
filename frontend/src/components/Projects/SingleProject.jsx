import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';
import { FaGithub, FaYoutube } from "react-icons/fa";

export const SingleProject = ({ project }) => {
  return (
    <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0}} className="relative flex flex-col items-center text-center p-4 rounded-lg group">
      <div className="relative md:h-[225px] md:w-[500px] sm:w-[450px] sm:h-[200px]">
        <div
          className="h-full w-full bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>

        <div className="absolute inset-0 bg-black bg-opacity-90 rounded-lg scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center flex flex-col items-center justify-center">
          <div className="text-white text-base md:text-md font-bold px-4 text-center">
            {project.description}
          </div>
          <div className="flex gap-4 mt-4">
            {project.demoLink && (
              <a href={project.demoLink} target='_blank' rel='noopener noreferrer'>
                <button className="font-bold text-white flex items-center justify-center gap-2 px-6 py-2 border-black border rounded-full hover:bg-orange transition-all duration-500">
                  YT Demo
                  <FaYoutube className='mb-[5px]'/>
                </button>
              </a>
            )}
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              <button className="font-bold text-white flex items-center justify-center gap-2 px-6 py-2 border-black border rounded-full hover:bg-orange transition-all duration-500">
                View Code
                <FaGithub className='mb-[5px]'/>
              </button>
            </a>
          </div>
        </div>
      </div>

      <h2 className="mt-4 text-2xl font-bold text-cyan">{project.name}</h2>
    </motion.div>
  );
};
