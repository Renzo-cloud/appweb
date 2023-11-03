import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {motion} from "framer-motion";


export const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (

    

    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <motion.h1 animate={{x:50}} className='w-full text-3xl font-bold text-white'>
        Website
        </motion.h1>
      <ul className='hidden md:flex'>
      <motion.li animate={{x:50}} className='p-4'><Link to={"/home"}>Home</Link></motion.li> 
        <motion.li animate={{x:50}} className='p-4'><Link to={"/Gallery"}> Gallery </Link></motion.li>
        <motion.li animate={{x:50}} className='p-4'>Contact</motion.li>
        <motion.li animate={{x:50}} className='p-4'>About</motion.li>
        <motion.li animate={{x:50}} className='p-4'>Resources</motion.li>
      </ul>
      <div className='block md:hidden'>
        <button onClick={handleNav} >
        {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>} 
        </button>
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-violet-950 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-violet-950 m-4'>Website </h1>

        <ul className='uppercase p-4'>
        <li className='p-4 border-b border-violet-950 text-violet-950'><Link to={"/home"}>Home</Link></li>
        <li className='p-4 border-b border-violet-950 text-violet-950'><Link to={"/Gallery"}> Gallery </Link></li>
        <li className='p-4 border-b border-violet-950 text-violet-950'>Contact</li>
        <li className='p-4 border-b border-violet-950 text-violet-950'>About</li>
        <li className='p-4 text-violet-950'>Resources</li>
        </ul>
      </div>
    </div>

  );
};
export default Navbar;
