import React from "react";
import { useContext } from "react";
// import { useState } from "react";
import { ThemeContext } from "../themeContext";

const Toggle = () => {

 const { toggle, toggleFunction,mode } = useContext(ThemeContext);
  // const [them, setThem] = useState(toggle);
  // const [mode, setMode] = useState("Night");
  

  // const hendalClick = () => {
  //   if (them === false) {
  //     setThem(true);
  //     setMode("Day");
  //   } else if (them === true) {
  //     setThem(false);
  //     setMode("Night");
  //   }
  
  
  return (
    <div>
      <label class="inline-flex relative items-center mr-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          onClick={toggleFunction}
          class="sr-only peer"
          checked={toggle}
        />
        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-400 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          <span className="font-bold  text-red-500">{mode} </span>
        </span>
      </label>
    </div>
  );
};

export default Toggle;
