import React from "react";
import { useContext } from "react";
import "./App.css";
import Home from "./components/Home";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from './components/Footer'
import { ThemeContext } from "./themeContext";
import Blogs from "./components/Blogs";
function App() {
  const {toggle,toggleFunction,mode,style}=useContext(ThemeContext);
 
 
  return (
    <>
      <div style={style}>
        <MobileNav />
        <Navbar/>
        <Home />
        <Blogs/>
        <Project />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}

export default App;
