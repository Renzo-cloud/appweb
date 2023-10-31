import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Login = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#cbd5e1] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <div className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 p-2">
          <TypeAnimation 
           sequence={['BTB', 1000, 'BTC', 1000, 'SASS', 1000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          />
          </div>         
        </div>
        <p className='md:text-2xl text-xl font-bold text-[#cbd5e1]'>Monitor your Data Analytics</p>
        <button className='bg-violet-950 w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
      </div>
    </div>
  );
};

export default Login;
