import React from "react";
import { ThemeContext } from '../themeContext'
import { useContext } from "react";

const Blogs = () => {
  const {toggle,toggleFunction,mode,style}=useContext(ThemeContext);
  return (
    <>
      <div className="bg-sky-100 pb-8" style={style} id='blog'>
        <h4 className="text-center pt-3 min-w-full md:text-2xl text-red-500">Recent post</h4>
        <div className="flex p-4 flex-col gap-7   m-3 justify-center  md:gap-12 md:flex-row   " >
         
          <div className="bg-white h-96  flex flex-col p-8 gap-5 rounded  md:p-10 md:w-2/4  shadow-black shadow-sm" style={style}>
            <h1 className="font-black md:text-xl">Making a design system from scratch</h1>
            <div className="flex gap-1 ">
              <span className="font-semibold">12 Feb 2020</span>
              <span></span>
              <span className="font-semibold">|</span>
              <span></span>
              <span className="font-semibold">12 Feb 2020</span>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div className="bg-white h-96 flex flex-col  p-8 gap-5 rounded  md:p-10 md:w-2/4 shadow-black shadow-sm" style={style}>
            <h1 className="font-black md:text-xl">
              Creating pixel perfect icons in Figma
            </h1>
            <div className="flex gap-1 ">
              <span className="font-semibold">12 Feb 2020</span>
              <span></span>
              <span className="font-semibold">|</span>
              <span></span>
              <span className="font-semibold">12 Feb 2020</span>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Blogs;
