import React from 'react'
import { ExperienceTopLeft } from './ExperienceTopLeft'
import { ExperienceTopRight } from './ExperienceTopRight'

export const ExperienceTop = () => {
  return (
    <div className='flex lg:flex-row sm:flex-col gap-[150px] items-center justify-center'>
        <ExperienceTopLeft />
        <ExperienceTopRight />
    </div>
  )
}
