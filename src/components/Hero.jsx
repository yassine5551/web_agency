import React from 'react'
import hero from '../assets/hero.png'
const Hero = () => {
  return (
    <>
      <div className='bg-neutralSilver flex justify-around items-center h-[80vh]'>
        <div className='w-[60%]'>
          <h1 className='text-7xl font-semibold text-secondary'>Lessons and insights <br /> <span className='text-shade'>from 8 years</span></h1>
          <p>where to grow your business as a photographer: site or social media?</p>
          <button>Register</button>
        </div>
        <div>
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero