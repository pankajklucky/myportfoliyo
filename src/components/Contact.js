import React from "react";
import {useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../themeContext.js'
import { useContext } from "react";



const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const { toggle, toggleFunction,mode,style }=useContext(ThemeContext)
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
          "service_tnxetyc",
          "template_3exegim",
          form.current,
          "MfwTOlf-sMQ1cKab6"
        ).then(
          (result) => {
            console.log(result.text);
                setDone(true);
                (function (){ 
                    document.getElementById("myForm").reset(); 
                    })()
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
   

  return (
    <>
      <div className="p-4 bg-sky-100" style={style} id='contact'>
        <h1 className="text-center p-4 text-2xl font-semibold text-red-500 ml-16 max-[320px]:mr-12">
          Contact Me
        </h1>
        <form ref={form} onSubmit={sendEmail} id='myForm'>
          <div className="flex flex-col gap-3 max-[320px]:gap-1">
            <div className="flex justify-center gap-10 pt-4 pb-4 max-[500px]:gap-2">
              <div className="md:text-xl md:font-bold text-neutral-700 max-[320px]:hidden">
                Name
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter the name..."
                  className="ml-4 p-2 rounded  md:w-96 text-red-500  focus:outline-red-300"
                                  name="user_name"
                                  required
                />
              </div>
            </div>
            <div className="flex justify-center gap-10 pt-4 pb-4 max-[500px]:gap-2">
              <div className="md:text-xl md:font-bold text-neutral-700 max-[320px]:hidden">
                Email
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter the email..."
                  className="ml-4 p-2 rounded  md:w-96 text-red-500   focus:outline-red-300 "
                                  name="user_email"
                                  required
                />
              </div>
            </div>
            <div className="flex justify-center gap-10 pt-4 pb-4 max-[500px]:gap-2">
              <div className=" md:text-xl md:font-bold text-neutral-700 max-[320px]:hidden">
                Message
              </div>
              <div>
                <textarea
                  placeholder="Type message..."
                  className="  p-2 rounded  md:w-96 md:mr-2 text-red-500 max-[320px]:ml-5  focus:outline-red-300 "
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                value="send"
                className="  rounded-sm bg-red-500 md:w-36 text-white pt-1 pb-1 pl-4 pr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-black shadow-sm ml-28 max-[320px]:mr-24 max-[500px]:mr-16 max-[764px]:mr-5"
              />
                      </div>
                      <div className="flex justify-center mb-5"> <span className="ml-24 max-[500px]:mr-10">{done && "Thaanks for contactin me"}</span></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
