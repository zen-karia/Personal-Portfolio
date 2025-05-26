import React from 'react'
import { PiPlugsConnectedDuotone } from "react-icons/pi";
import { ContactForm } from './ContactForm';

export const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
            <h2 className='flex text-orange text-3xl mb-4 gap-2'>Let's Connect <PiPlugsConnectedDuotone /></h2>
        </div>
        <ContactForm />
    </div>
  )
}
