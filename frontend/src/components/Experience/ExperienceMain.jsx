import React from 'react'
import { ExperienceText } from './ExperienceText'
import { ExperienceTop } from './ExperienceTop'
import { AllExperience } from './AllExperience'

export const ExperienceMain = () => {
  return (
    <div id="experience" className='max-w-[1200px] mx-auto px-4'>
        <ExperienceText />
        <ExperienceTop />
        <div className='w-full h-[5px] mt-4 bg-lightGrey lg:block sm:hidden'></div>
        <AllExperience />
    </div>
  )
}
