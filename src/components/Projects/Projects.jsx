import React from "react";
import Project from "./Project/Project";
import "./Projects.scss"
const Projects = () => {
  return (
    <div id="projects">
      <section id="projects__section">
        <h2 id="projects__heading">My Recent Work</h2>
        <div className="projects__container">
          {/* <article className="projects__item">
            <div className="projects__item-image"></div>
            <h3>Title of Project</h3>
            <a href="https://github.com">Github</a>
          </article> */}
          <Project
            name="Sorting Visualizer"
            Plink="https://kunalkatara12.github.io/SortAlgo-Visualizer/"
            Glink="https://github.com/kunalkatara12/SortAlgo-Visualizer"
          />
          <Project
            name="Youtube Clone"
            Plink="https://youtube-clone-gemini.netlify.app/"
            Glink="https://github.com/kunalkatara12/youtube-clone-gemini"
          />
          <Project
            name="Zip Extractor"
            Plink="https://kunalkatara12.github.io/Zip-Extractor/"
            Glink="https://github.com/kunalkatara12/Zip-Extractor"
          />
        </div>
        <div style={{ fontWeight: "bold", marginTop: 20 }}>
          More Projects coming soon....
        </div>
      </section>
    </div>
  );
};

export default Projects;
