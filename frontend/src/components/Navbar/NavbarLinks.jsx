import React from 'react'
import { Link } from 'react-scroll'

const Links = [
    { link: "About Me", section: "about" },
    { link: "Experience", section: "experience" },
    { link: "Skills", section: "skills" },
    { link: "Projects", section: "projects" },
];

export default function NavbarLinks ({ onLinkClick}) {
  return (
    <ul className="flex gap-6 text-white font-bold text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full">
        {Links.map((link, index) => {
            return (
                <li key={index} className="group">
                    <Link to={link.section} smooth={true} spy={true} duration={500} offset={-160} className="cursor-pointer text-white hover:text-cyan transition-all duration-500" onClick={onLinkClick}>{link.link}</Link>
                    <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                </li>
            )
        })}
    </ul>
  )
}
