import React from "react";
import { useContext } from "react";
import image from "./img/myimage.jpg";
import { ThemeContext } from '../themeContext'
import resume from './img/resume.pdf'
const Home = () => {
  const {toggle,toggleFunction,mode,style}=useContext(ThemeContext)
  return (
    <>
      <div className="flex flex-col min-w-full mt-2 md:flex-row-reverse p-4 pb-10" style={style}>
        <div className="flex justify-center md:w-2/5 md:mt-36  md:mr-20 ">
          <div className="bg-neutral-100 w-48 h-48 md:scale-200 rounded-full translate-y-2 shadow-sm shadow-black pb-10 "></div>

          <img
            src={image}
            alt=""
            className="w-48 h-48  md:scale-200 rounded-full absolute translate-x-2  shadow-black shadow-sm"
          />
        </div>

        <div className="mt-4 md:w-3/5  md:ml-10 ">
          <h1 className="font-bold text-3xl md:text-5xl md:text-left text-center mt-3">
          <span className="  md:text-8xl  text-red-500"> Hi </span> ,  I am <br/>Pankaj Kumar, <br /> Ui/Ux Devloper
          </h1>
       <p className= "mt-3 text-center text-1xl md:text-2xl md:text-left text-slate-400 font-light md:mt-5" style={style}>
       and I graduated from Bachelor of Science in Information Technology (BSC.IT), From C.I.M & Advance Excellence College PATNA (Magadh University, Bodh Gaya Bihar) with an aggregate of 70.1%. My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences.
                  </p>
                  <div className="flex justify-center md:justify-start  mt-6">
        <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-red-500 mt-3    shadow-black shadow-sm text-white text-sm rounded-sm p-2  h-12 w-52 md:ml-5 md:mt-6">
          <a href={resume}>Download Resume</a>
        </button>
      </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
