import React, { useState, useRef} from "react";
import {motion, useScroll} from "framer-motion";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1697301453753-19514aeb0199?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1697301453753-19514aeb0199?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1697301453753-19514aeb0199?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Home = () => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })

  return(
    <motion.section
    ref={ref}
    style={{
     scale: scrollYProgress,
    //  opacity: scrollYProgress, 
    }}>
  <div>
    <header>
      <title>HomePage</title>
    </header>

    <main>
      <section className="min-h-screen">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <div>
            <p className="font-serif text-left space-x-4 text-violet-950 ml-10 mx-10">
              <h1 className="text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                possimus? Nam veniam,
              </h1>
            </p>

            <div className="font-serif text-violet-950 ml-10 mx-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              saepe praesentium minus mollitia corrupti iure eligendi reiciendis
              doloribus voluptate accusamus doloremque, fugit tempora quo
              provident hic quibusdam modi dolores eos?
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1697301453753-19514aeb0199?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-auto max-w-full rounded-lg  transition duration-300 ease-in-out hover:scale-110"
          />
          <div className="text-center text-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              quia sequi suscipit quod
            </p>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center  min-h-screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid:cols-3 gap-10">
          <div className="card">
            <div className="p-5 flex flex-col">

               
              <div className="rounded-xl overflow-hidden transition duration-300 ease-in-out hover:scale-110">
                <img
                  src="https://images.unsplash.com/photo-1697807713049-d171c4dd9d5e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fHw%3D"
                  alt=""
                ></img>
              </div>
              <h5 className="font-serif text-2xl md:text-3xl font-medium mt-3">
                PIC1
              </h5>
              <p className="font-serif text-slate-500 text-lg mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                minus labore delectus tempore dolores rem voluptate reiciendis
                animi illum voluptas, similique porro ex corrupti. Minima quam
                blanditiis ab possimus porro!
              </p>
              <a
                href="./Gallery"
                className="text-center bg-gradient-to-r from-slate-700 to-violet-950 py-2 rounded-lg font-semibold mt-4 hover:bg-slate-700 transition duration-300 ease-in-out hover:scale-110"
              >
                Explore
              </a>
            </div>
          </div>

          <div className="card">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden transition duration-300 ease-in-out hover:scale-110">
                <img
                  src="https://images.unsplash.com/photo-1697457053997-555dfc117cf1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D"
                  alt=""
                ></img>
              </div>
              <h5 className="font-serif text-2xl md:text-3xl font-medium mt-3">
                PIC2
              </h5>
              <p className="font-serif text-slate-500 text-lg mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                minus labore delectus tempore dolores rem voluptate reiciendis
                animi illum voluptas, similique porro ex corrupti. Minima quam
                blanditiis ab possimus porro!
              </p>
              <a
                href="./Gallery"
                className="text-center bg-gradient-to-r from-slate-700 to-violet-950 py-2 rounded-lg font-semibold mt-4 hover:bg-slate-700 transition duration-300 ease-in-out hover:scale-110"
              >
                Explore
              </a>
            </div>
          </div>

          <div className="card">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden transition duration-300 ease-in-out hover:scale-110">
                <img
                  src="https://images.unsplash.com/photo-1697463039113-729043bb558e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"
                  alt=""
                ></img>
              </div>
              <h5 className="font-serif text-2xl md:text-3xl font-medium mt-3">
                PIC3
              </h5>
              <p className="font-serif text-slate-500 text-lg mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                minus labore delectus tempore dolores rem voluptate reiciendis
                animi illum voluptas, similique porro ex corrupti. Minima quam
                blanditiis ab possimus porro!
              </p>
              <a
                href="./Gallery"
                className="text-center bg-gradient-to-r from-slate-700 to-violet-950 py-2 rounded-lg font-semibold mt-4 hover:bg-slate-700 transition duration-300 ease-in-out hover:scale-110"
              >
                Explore
              </a>
            </div>
          </div>
        </div>    
      </div>
    </main>
  </div>
  </motion.section>
)};
export default Home;
