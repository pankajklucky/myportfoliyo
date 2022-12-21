import React from "react";
import img from "./img/business.png";
import img2 from "./img/weather.png";
import img3 from "./img/portfolio.png";
import img4 from "./img/todo.png";
import img5 from "./img/e-commerce.png"




const Project = () => {
  return (
    <>
      <div className="p-5" id='project'>
        <h3 className="text-center md:text-start md:ml-10 md:mt-10 md:font-bold text-red-500 md:text-3xl">
          My Projects
        </h3>
        <div className="flex justify-center flex-col  items-center p-2">
          <div className="flex flex-col md:gap-16 mt-4 gap-3 shadow-sm shadow-black p-4 md:flex-row md:shadow-none">
            <div className="rounded md:w-1/4 md:shadow-sm md:shadow-black md:mt-12 flex">
              <img src={img} alt="" />
            </div>
            <div className="flex flex-col gap-3 justify-center w-3/4">
              <h1 className="text-3xl font-bold mt-2">Business Website</h1>
              <div className="flex gap-3 ">
                <span className="rounded-full bg-gray-700 text-white pl-3 pr-3 font-medium">
                  2022
                </span>
                <span className="text-red-500  font-semibold ">
                  <a
                    className="hover:bg-red-500 hover:text-white rounded-full p-2"
                    href="https://regal-melba-8d3487.netlify.app"
                    target="_blank"
                  >
                    Click here
                  </a>
                </span>
              </div>
              <p className="mt-3 ">
                This is a singal page application .
                I have used React Router to make this a single page application. 
                Bootstrap was used to make  Responsive.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:gap-16 mt-4 gap-3 shadow-sm shadow-black p-4 md:flex-row md:shadow-none">
            <div className="rounded md:w-1/4 md:shadow-sm md:shadow-black md:mt-12 flex">
              <img src={img2} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-3 w-3/4">
              <h1 className="text-3xl font-bold mt-2">Weather App</h1>
              <div className="flex gap-3">
                <span className="rounded-full bg-gray-700 text-white pl-3 pr-3 font-medium">
                  2022
                </span>
                <span className="text-red-500  font-semibold">
                  <a
                    className="hover:bg-red-500 hover:text-white rounded-full p-2 "
                    href="https://gilded-brigadeiros-108f73.netlify.app"
                    target="_blank"
                  >
                    Click Here
                  </a>
                </span>
              </div>
              <p className="mt-3">
                There is a weather app, I have used weather API to make it, which has search functionality.
                In this application, we can search the location and know the weather conditions there.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:gap-16 mt-4 gap-3 shadow-sm shadow-black p-4 md:flex-row md:shadow-none">
            <div className="rounded md:w-1/4 md:shadow-sm md:shadow-black md:mt-12 flex">
              <img src={img3} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-3 w-3/4">
              <h1 className="text-3xl font-bold mt-2">Old Portfolio</h1>
              <div className="flex gap-3 ">
                <span className="rounded-full bg-gray-700 text-white pl-3 pr-3 font-medium">
                  2022
                </span>
                <span className="text-red-500  font-semibold ">
                  <a
                    className="hover:bg-red-500 hover:text-white rounded-full p-2"
                    href="https://verdant-smakager-825484.netlify.app/"
                    target="_blank"
                  >
                    Click here
                  </a>
                </span>
              </div>
              <p className="mt-3 ">
              This is my portfolio website using former motion library swiper library and normal css for styling
              </p>
            </div>
          </div>

          <div className="flex flex-col md:gap-16 mt-4 gap-3 shadow-sm shadow-black p-4 md:flex-row md:shadow-none">
            <div className="rounded md:w-1/4 md:shadow-sm md:shadow-black md:mt-12 flex">
              <img src={img4} alt="" />
            </div>
            <div className="flex flex-col gap-3 justify-center w-3/4">
              <h1 className="text-3xl font-bold mt-2">Todo List</h1>
              <div className="flex gap-3 ">
                <span className="rounded-full bg-gray-700 text-white pl-3 pr-3 font-medium">
                  2022
                </span>
                <span className="text-red-500  font-semibold ">
                  <a
                    className="hover:bg-red-500 hover:text-white rounded-full p-2"
                    href="https://flourishing-custard-7d4590.netlify.app/"
                    target="_blank"
                  >
                    Click here
                  </a>
                </span>
              </div>
              <p className="mt-3 ">
              This is a normal to do list application
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:gap-16 mt-4 gap-3 shadow-sm shadow-black p-4 md:flex-row md:shadow-none">
          <div className="rounded md:w-1/4 md:shadow-sm md:shadow-black md:mt-12 flex">
            <img src={img5} alt="" />
          </div>
          <div className="flex flex-col gap-3 justify-center w-3/4">
            <h1 className="text-3xl font-bold mt-2">E-Commerce</h1>
            <div className="flex gap-3 ">
              <span className="rounded-full bg-gray-700 text-white pl-3 pr-3 font-medium">
                2022
              </span>
              <span className="text-red-500  font-semibold ">
                <a
                  className="hover:bg-red-500 hover:text-white rounded-full p-2"
                  href="https://melodic-babka-9d5226.netlify.app/"
                  target="_blank"
                >
                  Click here
                </a>
              </span>
            </div>
            <p className="mt-3 ">
           This website  is currently only for large  screens. Right now it is in the development phase.
            </p>
          </div>
        </div>

        </div>
      </div>
    </>
  );
};

export default Project;
