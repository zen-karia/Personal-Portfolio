import React from 'react'
import { ProjectsText } from './ProjectsText'
import { SingleProject } from './SingleProject'

const Projects = () => [
  {
    name: 'SkillScan',
    image: '/images/SkillScan.png',
    link: '#',
  },
  {
    name: 'RecyClean',
    image: '/images/RecyClean.jpg',
    link: '#',
  },
  {
    name: 'GestureGroove',
    image: '/images/GestureGroove.png',
    link: '#',
  },
  {
    name: 'BeMyEyes',
    image: '/images/BeMyEyes.png',
    link: '#',
  },
  {
    name: 'Personal Portfolio',
    image: '/images/MyPortfolio.png',
    link: '#',
  },
  {
    name: 'European Soccer Database Management System',
    image: '/images/EuropeanSoccerDBMS.png',
    link: '#',
  }
]
export const ProjectsMain = () => {
  return (
    <div className='relative max-w-[1200px] mx-auto px-4'>
        <ProjectsText />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 mt-8'>
            {Projects().map((project, index) => {
                return (
                    <SingleProject key={index} project={project} />
                )})}
        </div>
    </div>
  )
}
