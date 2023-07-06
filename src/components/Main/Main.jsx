import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
// import Experience from "../Experience/Experience";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

import "./Main.scss";
const Main = () => {
  return (
    <>
      <Home/>
      <About/>
      <Projects/>
      {/* <Experience/> */}
      {/* <Education/> */}
      <Skills/>
      <Contact/>
    </>
  );
};

export default Main;
