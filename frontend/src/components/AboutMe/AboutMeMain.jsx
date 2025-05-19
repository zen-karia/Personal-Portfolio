import React from 'react'
import { AboutMeText } from './AboutMeText'
import { AboutMeImage } from './AboutMeImage'

export const AboutMeMain = () => {
  return (
    <div className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto justify-between items-center'>
        <AboutMeText />
        <AboutMeImage />
    </div>
  )
}
