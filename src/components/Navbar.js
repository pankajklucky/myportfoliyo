import React from "react";
import Toggle from "./Toggle";
import { useContext } from "react";
import { ThemeContext } from "../themeContext.js";
import {Link} from "react-scroll";
const Navbar = () => {
  const {toggle,toggleFunction,mode,style}=useContext(ThemeContext);
  return (
    <> 
    <div className=" md:mb-8 hidden   md:block" style={style}>
        <ul className="flex flex-row-reverse mt-4 mr-2 p-4" style={style}>
          <li className="mt-3 ml-3"><Toggle /></li>
          <li>
          <Link to="contact" smooth={true} duration={1000} className="m-3 font-bold text-4xl hover:text-red-500 cursor-pointer">Contact</Link>
          </li>
          <li>
          <Link to="blog" smooth={true} duration={1000} className="m-3 font-bold text-4xl hover:text-red-500 cursor-pointer">Blog</Link>
          </li>
          <li>
          <Link to="project" smooth={true} duration={1000} className="m-3 font-bold text-4xl hover:text-red-500 cursor-pointer">Projects</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
