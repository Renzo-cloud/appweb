import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {motion} from "framer-motion";


export const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  // const [click, setClick]= useState(false);
  // const handleClick = () => {
  //   setClick(!click)
  // }
  // const [menuOpen, setMenuOpen] = useState(false);

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
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-violet-950 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
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
    // <main className="bg-gradient-to-r from-slate-700 to-violet-950 text-white">
    //   <section className="">
    //     <nav className="py-10 mb-12 flex justify-between ml-12">
    //       <Link to="/Login" className="title">
    //         <h1 className="text-6xl font-serif"> Website </h1>
    //       </Link>
    //       <div
    //         className="menu flex absolute"
    //         onClick={() => {
    //           setMenuOpen(!menuOpen);
    //         }}
    //       >
    //         <span className="w-100 bg-white"></span>
    //         <span></span>
    //         <span></span>
    //       </div>
    //       <ul className={menuOpen ? "open" : "flex item-center space-x-6 mx-8"}>
    //         <h1 className="text-xl font-serif">
    //           <Link spy={true} smooth={true} to={"/home"}>
    //             <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
    //               Home
    //             </li>
    //           </Link>
    //         </h1>

    //         <h1 className="text-xl font-serif">
    //           <Link spy={true} smooth={true} to={"/Gallery"}>
    //             <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
    //               Gallery
    //             </li>
    //           </Link>
    //         </h1>

    //         <h1 className="text-xl font-serif">
    //           <Link spy={true} smooth={true} to={"/Contact"}>
    //             <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
    //               Contact
    //             </li>
    //           </Link>
    //         </h1>
    //       </ul>
    //     </nav>
    //   </section>
    // </main>
  );
};
export default Navbar;
