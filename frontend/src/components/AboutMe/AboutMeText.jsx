import React from 'react'

export const AboutMeText = () => {
  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-6xl text-cyan gap-3 flex items-center mb-10 ml-[120px]'>
          About Me
        </h2>
        <p className='text-white text-2xl ml-[100px] justify-items-center'>
            A CS student @ UWaterloo who loves clean code, messy bugs, 
            and the dopamine rush of fixing them at 3 a.m. By day, I’m a Software Developer 
            Intern at eSentire. By night, I’m either training AI models, dancing, performing 
            magic tricks, or trying to convince Spotify that my gesture-controlled music 
            player wasn't a mistake. I've built things that talk back (SkillScan), sort trash 
            smarter than most humans (RecyClean), and even help the visually impaired navigate 
            the world (BeMyEyes). I write Python like poetry, debug like Sherlock, and dream of 
            deploying code that never breaks (one day... maybe). Let's build something awesome 
            — preferably after coffee!! 😁
        </p>
        <div>
            <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white ml-[100px]'>Click here to explore some cool stuff that I've made!!! 🚀</button>
        </div>
    </div>
  )
}
