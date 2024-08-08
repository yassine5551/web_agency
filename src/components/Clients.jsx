import React from 'react'
import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"
import client4 from "../assets/client4.png"
import client5 from "../assets/client5.png"
import client6 from "../assets/client6.png"
import client7 from "../assets/client7.png"
import {motion} from "framer-motion"
const Clients = () => {
  return (
    <>
    <motion.div initial={{opacity:0,y:150}} whileInView={{opacity:1,y:0,transition:{duration:1}}} exit={{opacity:0,scaleX:0.5}} className='flex flex-col justify-center gap-9 items-center bg-white h-[50vh] mb-[250px] md:mb-0'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-secondary text-3xl font-medium mb-[6px]'>Our Clients</h1>
        <p className='text-secondary font-light text-center'>We have been working with some Fortune 500+ clients</p>
        </div>
      <div className='flex justify-evenly items-center gap-4 md:gap-0'>
        <img src={client1} alt="" className=''/>
        <img src={client2} alt="" className='md:ml-[10rem]'/>
        <img src={client3} alt="" className='md:ml-[10rem]'/>
        <img src={client4} alt="" className='md:ml-[10rem]'/>
        <img src={client5} alt="" className='md:ml-[10rem]'/>
        <img src={client6} alt="" className='md:ml-[10rem]'/>
        <img src={client7} alt="" className='md:ml-[10rem]'/>
      </div>
    </motion.div>
    </>
  )
}

export default Clients