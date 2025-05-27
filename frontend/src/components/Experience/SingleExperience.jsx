import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../../FramerMotion/variants'

export const SingleExperience = ({ experience }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div variants={fadeIn("right", 0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0 }} className=''>
    <div
      className="relative md:h-[350px] md:w-[240px] sm:h-[350px] sm:w-[240px] border-2 border-orange border-dashed rounded-2xl mt-12 p-4 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)} // Trigger hover effect
      onMouseLeave={() => setIsHovered(false)} // Remove hover effect
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${experience.bgImage})` }}
      ></div>

      {/* Overlay with Opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>

      {/* Hover Effect: White Background Scrolling Up */}
      <div
        className={`absolute inset-0 bg-white bg-opacity-90 rounded-2xl transform transition-transform duration-500 ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <ul className="list-disc mt-4 pl-4 text-black p-4 text-sm">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4">
        {!isHovered && (
          <>
            <p className="font-bold text-cyan text-xl">{experience.job}</p>
            <p className="text-orange font-bold text-lg">{experience.company}</p>
            <p className="text-white font-bold text-lg">{experience.date}</p>
          </>
        )}
      </div>
    </div>
    </motion.div>
  );
};
