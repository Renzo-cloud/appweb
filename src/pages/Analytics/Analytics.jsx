import React, {useRef} from "react";
import { Link } from "react-router-dom";
import {motion, useScroll} from "framer-motion";

const Analytics = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })

  return (
    <motion.section
    ref={ref}
    style={{
     scale: scrollYProgress,
    //  opacity: scrollYProgress, 
    }}>
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4' src="https://images.unsplash.com/photo-1697301453753-19514aeb0199?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D" />
        <div className='flex flex-col justify-center'>
          <p className='text-violet-950'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            laborum tempora voluptatibus eum laudantium, repellat vitae
            doloribus exercitationem debitis ducimus rem sint nisi harum
            repudiandae velit eos molestias porro pariatur.
          </p>
          <button className='bg-violet-950 w-[200px] rounded-md font-medium my-6 mx-auto py-3'><Link to={"/Gallery"}>Get Started</Link></button>
        </div>
      </div>
    </div>
    </motion.section>
  );
};

export default Analytics;
