import React, { useState, useRef} from "react";
import {motion, useScroll} from "framer-motion";


function Gallery() {
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
    // <h1 className="font-serif text-left text-6xl text-white ml-12">
    //   Gallery</h1>
      <div>
        <div className=" h-96 w-full bg-cover bg-center relative ">
          <img
            src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <div className="p-24">
            <h1 className="text-black text-4xl font-bold font-serif">
              This is the headline
            </h1>
            <h2 className="text-black text-2xl font-light mt-5">
              Some really great stuff goes here
            </h2>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-10  bg-gradient-to-r from-slate-700 to-violet-950 min-h-screen">
        <div className="columns-1 gap-5 lg:gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5">
          <img
            className="rounded-lg transition duration-300 ease-in-out hover:scale-110"
            src="https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"
            alt=""
          />
          <img
            className="rounded-lg transition duration-300 ease-in-out hover:scale-110"
            src="https://images.unsplash.com/photo-1697457053997-555dfc117cf1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D"
            alt=""
          />
          <img
            className="rounded-lg transition duration-300 ease-in-out hover:scale-110"
            src="https://images.unsplash.com/photo-1697807713049-d171c4dd9d5e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fHw%3D"
            alt=""
          />
          <img
            className="rounded-lg transition duration-300 ease-in-out hover:scale-110"
            src="https://images.unsplash.com/photo-1697301453753-19514aeb0199?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="rounded-lg transition duration-300 ease-in-out hover:scale-110"
            src="https://images.unsplash.com/photo-1697653568339-e8f8a5dd7318?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="rounded-lg transition duration-300 ease-in-out hover:scale-110"
            src="https://images.unsplash.com/photo-1697946594607-04d755acff2b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"
            alt=""
          />
          <img
            className="rounded-lg transition duration-300 ease-in-out hover:scale-110"
            src="https://plus.unsplash.com/premium_photo-1681245769078-c9f9d6d3bdfd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"
            alt=""
          />
          <img
            className="rounded-lg transition duration-300 ease-in-out hover:scale-110"
            src="https://images.unsplash.com/photo-1690369804511-be9b1371e58b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNXxNOGpWYkxiVFJ3c3x8ZW58MHx8fHx8"
            alt=""
          />
          <img
            className="rounded-lg transition duration-300 ease-in-out hover:scale-110"
            src="https://images.unsplash.com/photo-1697652675913-745fa5fb9dc6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMXxNOGpWYkxiVFJ3c3x8ZW58MHx8fHx8"
            alt=""
          />
        </div>
      </div>
      </motion.section>
  );
}

export default Gallery;
