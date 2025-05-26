import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Confetti from 'react-confetti';

export const ContactForm = () => {
    const form = useRef();
    const [isMessageSent, setIsMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_wl3dr6o', 'template_k3xxduo', form.current, {
            publicKey: 'J6CYcsto4oRj-pRam',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              form.current.reset();
              setIsMessageSent(true);
                setTimeout(() => {
                    setIsMessageSent(false);
                }, 5000); 
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    };
    
    return (
        <div className='relative'>
            {isMessageSent && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
                <input name="from_name" type="text" placeholder='Your Name' required className='h-12 text-white rounded-lg bg-lightBrown px-2'/>
                <input name="from_email" type="email" placeholder='Your Email' required className='h-12 rounded-lg bg-lightBrown px-2 text-white'/>
                <textarea name="message" type='text' placeholder='Message' rows='9' cols='50' required className='rounded-lg bg-lightBrown p-2 text-white'/>
                <button type="submit" className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500'>Send</button>
            </form>
            {isMessageSent && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <h2 className="text-4xl font-bold text-white animate-bounce">Message Sent 🎉</h2>
                </div>
      )}
        </div>
    )
}
