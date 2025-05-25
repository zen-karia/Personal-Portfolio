import React from 'react'
import { SkillsText } from './SkillsText'
import { AllSkills } from './AllSkills'
import { AllSkillsSM } from './AllSkillsSM'

export const SkillsMain = () => {
  return (
    <div id="skills">
        <div className='max-w-[1200px] px-4 mx-auto min-h-[550px] relative overflow-hidden mt-[50px]'>
            <SkillsText />
            <div className=' left-[50%] absolute -translate-x-[50%] lg:block sm:hidden'>
                <AllSkills />
            </div>
            <div className='sm:block lg:hidden'>
                <AllSkillsSM />
            </div>
        </div>
    </div>
  )
}
