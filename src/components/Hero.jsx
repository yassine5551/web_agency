import React from 'react'
import hero from '../assets/hero.png'
import {motion} from "framer-motion";

const Hero = () => {
  const variantHero = {
    hidden :{
      x:-100,
      opacity:0
    },
    visible : {
      x:0,
      opacity:1,
      transition :{
        duration:1.6,
        delay:1,
        ease:"easeIn"
        
      }
    }
  }
  const variantHeroImg = {
    hidden :{
      x:100,
      opacity:0
    },
    visible : {
      x:0,
      opacity:1,
      transition :{
        duration:1.6,
        delay:1.8,
        ease:"easeIn"
        
      }
    }
  }
  return (
    <>
      <div className='pl-[1.5rem] bg-neutralSilver flex flex-col-reverse md:flex-row justify-around items-center h-[100vh] mt-[32px] '>
        <motion.div variants={variantHero} initial="hidden" animate="visible" className='md:w-[60%] w-[100%]'>
          <h1 className=' md:text-7xl text-5xl font-medium tracking-normal text-secondary mb-[2rem]'>Lessons and insights</h1>
          <span className='text-shade md:text-7xl text-5xl font-medium tracking-normal '>from 8 years</span>
          <p className='text-secondary mt-[2rem] font-light'>where to grow your business as a photographer: site or social media?</p>
          <button className='mt-[2rem] bg-none border-none bg-shade hover:bg-green px-[2.2rem] py-[1rem] text-white rounded-md'>Register</button>
        </motion.div>
        
          <motion.img variants={variantHeroImg} initial="hidden" animate="visible" exit={{x:100,opacity:0}}  src={hero} alt=""  className='md:w-[391px] md:h-[407px] w-[400px] h-[280px] object-contain md:object-cover'/> 
        
      </div>
    </>
  )
}

export default Hero