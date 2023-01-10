import React from "react";
import Project from "./Project/Project";
import "./Projects.scss"
const Projects = () => {
  return (
    <div id="projects">
      <section id="projects__section">
        <h2 id="projects__heading" >My Recent Work</h2>
        <div className="projects__container">
          {/* <article className="projects__item">
            <div className="projects__item-image"></div>
            <h3>Title of Project</h3>
            <a href="https://github.com">Github</a>
          </article> */}
          <Project name="Sorting Visualizer" />
          <Project name="Youtube Clone" />
          <Project name="Zip Extractor" />
          
        </div>
        <div style={{fontWeight:"bold", marginTop:20}} >More Projects coming soon....</div>
      </section>
    </div>
  );
};

export default Projects;
