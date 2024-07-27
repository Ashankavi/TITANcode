import React, {useState} from  'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

import Logo from "../Assets/Home/Logo.png"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex max-w-auto mx-8 mt-5 font-bold px-10 text-black bg-[#FFFFFF] rounded-[50px]'>
        <img className='h-[20px] my-5' src={Logo} /> 

        <h1 className='w-full text-3xl font-bold text-[#00df9a]'> </h1>
        <ul className='hidden tracking-wide md:flex font-sans font-normal '>
            <li className='p-4'>Home</li>
            <li className='p-4'>About&nbsp;Us</li>
            <li className='p-4'>Services</li>
            <li className='p-4'>Portfolio</li>
            <li className='p-4'>Careers</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block mt-5 md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FFFFFF] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img className='h-[25px] m-8' src={Logo} /> 
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> </h1>

            <ul className='p-4 tracking-wide uppercase font-londrina'>
            <li className='p-4 border-b border-[#b8b8b8b6]'>Home</li>
            <li className='p-4 border-b border-[#b8b8b8b6]'>About&nbsp;Us</li>
            <li className='p-4 border-b border-[#b8b8b8b6]'>Services</li>
            <li className='p-4 border-b border-[#b8b8b8b6]'>Portfolio</li>
            <li className='p-4 border-b border-[#b8b8b8b6]'>Careers</li>
            <li className='p-4 border-b border-[#b8b8b8b6]'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar