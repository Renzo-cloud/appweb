import React, {useRef} from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import {motion, useScroll} from "framer-motion";

const Login = () => {
 
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <motion.p animate={{x:50}} className="text-[#cbd5e1] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </motion.p>
        <motion.h1 animate={{x:50}} className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </motion.h1>
        <div className='flex justify-center items-center'>
          <motion.p animate={{x:50}} className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </motion.p>
          <motion.div animate={{x:50}} className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 p-2">
          <TypeAnimation 
           sequence={['BTB', 1000, 'BTC', 1000, 'SASS', 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          />
          </motion.div>         
        </div>
        <motion.p animate={{x:50}} className='md:text-2xl text-xl font-bold text-[#cbd5e1]'>Monitor your Data Analytics</motion.p>
        <motion.div animate={{x:50}} className='bg-violet-950 w-[200px] rounded-md font-medium my-6 mx-auto py-3'><Link to={"/home"}>Get Started</Link></motion.div>
      </div>
    </div>
  );
};

export default Login;
