import React from "react";
import { useState } from "react";
import Toggle from "./Toggle";
import {Link} from "react-scroll";

const MobileNav = () => {
  
  const myFunction = () => {
    var x = document.getElementById('links')
    if (x.style.display === 'block') {
          x.style.display='none'
    } else {
      x.style.display='block'
        }
  }

  return (
    <>
      <div className="min-w-full p-4 md:hidden">
        <div className="flex  min-w-full justify-between">
          <div className=" mt-3 ">
            <Toggle />
          </div>
          <div className="  " onClick={myFunction}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div id="links" className="mt-2">
          <ul className="flex flex-col gap-5 font-bold">
            <Link to="project" smooth={true} duration={1000} className="hover:text-red-500 cursor-pointer">Projects</Link>
            <Link to="blog" smooth={true} duration={1000} className="hover:text-red-500 cursor-pointer">Blog</Link>
            <Link to="contact" smooth={true} duration={1000} className="hover:text-red-500 cursor-pointer">Contact</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
