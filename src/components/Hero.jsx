import React from 'react'
import hero from '../assets/hero.png'
const Hero = () => {
  return (
    <>
      <div className='pl-[1.5rem] bg-neutralSilver flex justify-around items-center h-[100vh]'>
        <div className='w-[60%]'>
          <h1 className=' text-7xl font-medium tracking-normal text-secondary mb-[2rem]'>Lessons and insights</h1>
          <span className='text-shade text-7xl font-medium tracking-normal '>from 8 years</span>
          <p className='text-secondary mt-[2rem] font-light'>where to grow your business as a photographer: site or social media?</p>
          <button className='mt-[2rem] bg-none border-none bg-shade hover:bg-green px-[2.2rem] py-[1rem] text-white rounded-md'>Register</button>
        </div>
        
          <img src={hero} alt=""  className='w-[391px] h-[407px] object-cover'/> 
        
      </div>
    </>
  )
}

export default Hero