import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <>
      <nav className='bg-neutralSilver flex justify-between items-center py-[2rem] px-[2.5rem] fixed top-0 w-full h-[32px]   '>
        <div><img src={logo} alt="" /></div>  
        
          <ul className='flex gap-[2rem] '>
          <li className='cursor-pointer hover:text-shade transition-all font-semibold'>Home</li>
          <li className='cursor-pointer hover:text-shade transition-all'>Service</li>
          <li className='cursor-pointer hover:text-shade transition-all'>Feature</li>
          <li className='cursor-pointer hover:text-shade transition-all'>Product</li>
          <li className='cursor-pointer hover:text-shade transition-all'>Testimonial</li>
          <li className='cursor-pointer hover:text-shade transition-all'>FAQ</li>
          </ul>
          
          <div className='flex'>
            <button className='bg-none border-none px-[20px] py-[10px] text-shade'>Login</button>
            <button className='bg-shade px-[20px] py-[10px] rounded-md hover:bg-green transition-all text-white '>Sign up</button>
          </div>
      </nav>
    </>
  )
}

export default Header