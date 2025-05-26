import React from 'react'
import { ContactMeLeft } from './ContactMeLeft';
import { ContactMeRight } from './ContactMeRight';


export const ContactMeMain = () => {
  return (
    <div id="contact" className='max-w-[1200px] mx-auto items-center justify-center mt-[150px] px-4'>
        <h2 className='text-6xl text-cyan mb-10 text-center'>Contact Me</h2>
        <div className='flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col'>
            <ContactMeLeft />
            <ContactMeRight />
        </div>
    </div>
  )
}
