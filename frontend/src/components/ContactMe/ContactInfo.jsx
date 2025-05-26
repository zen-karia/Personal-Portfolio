import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';
import { FaInstagram } from "react-icons/fa";
import { SingleInfo } from './SingleInfo';

export const ContactInfo = () => {
  return (
    <div className='flex gap-4 '>
      <SingleInfo
        Image={
          <a href="mailto:zenil.karia@uwaterloo.ca" target="_blank">
            <MdOutlineEmail className="text-4xl hover:text-white transition-all duration-300" />
          </a>
        }
      />
      <SingleInfo
        Image={
          <a href="https://www.linkedin.com/in/zenil-karia-0190b729b/" target="_blank">
            <FaLinkedin className="text-4xl hover:text-white transition-all duration-300" />
          </a>
        }
      />
      <SingleInfo
        Image={
          <a href="https://github.com/zen-karia" target="_blank">
            <IoLogoGithub className="text-4xl hover:text-white transition-all duration-300" />
          </a>
        }
      />
      <SingleInfo
        Image={
          <a href="https://www.instagram.com/zen_karia/" target="_blank" rel="noopener noreferrer" className="group">
            <FaInstagram className="text-4xl hover:text-white transition-all duration-300" />
          </a>
        }
      />
    </div>
  );
};
