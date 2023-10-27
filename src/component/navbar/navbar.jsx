import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  const [click, setClick]= useState(false);
  const handleClick = () => {
    setClick(!click)
  }
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-gradient-to-r from-slate-700 to-violet-950 text-white">
      <section className="">
        <nav className="py-10 mb-12 flex justify-between ml-12">
          <Link to="/Login" className="title">
            <h1 className="text-6xl font-serif"> Website </h1>
          </Link>
          <div
            className="menu flex absolute"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="w-100 bg-white"></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : "flex item-center space-x-6 mx-8"}>
            <h1 className="text-xl font-serif">
              <Link spy={true} smooth={true} to={"/home"}>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Home
                </li>
              </Link>
            </h1>

            <h1 className="text-xl font-serif">
              <Link spy={true} smooth={true} to={"/Gallery"}>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Gallery
                </li>
              </Link>
            </h1>

            <h1 className="text-xl font-serif">
              <Link spy={true} smooth={true} to={"/Contact"}>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Contact
                </li>
              </Link>
            </h1>
          </ul>
        </nav>
      </section>
    </main>
  );
};
export default Navbar;
