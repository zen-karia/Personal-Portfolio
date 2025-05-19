import React from 'react'

export default function HeroGradient() {
    return (
        <div>
            <div className='shadow-cyanMediumShadow fixed top-0 right-[400px] -z-10 animate-pulse'></div>
            <div className='shadow-orangeMediumShadow fixed top-0 right-0 -z-10 animate-pulse'></div>
            <div className='shadow-cyanMediumShadow fixed top-[300px] left-0 -z-10 animate-pulse'></div>
            <div className='shadow-orangeMediumShadow fixed top-[500px] left-0 -z-10 animate-pulse'></div>
        </div>
    )
}