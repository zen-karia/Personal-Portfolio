import React from 'react'
import { ContactInfo } from './ContactInfo'

export const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <img src="/images/email-image.png" alt="Contact Me" className='max-w-[300px]' />
        <ContactInfo />
    </div>
  )
}
