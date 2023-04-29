import React from "react";
import Project from "./Project/Project";
import "./Projects.scss"
import sortAlgo from "../../assets/Screenshot (208).png"
import youtubeClone from "../../assets/Screenshot (209).png"
import zipExt from "../../assets/Screenshot (210).png"
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
          {/* <Slider className="projects__slider"> */}
          <Project
            name="Sorting Visualizer"
            imgLink={sortAlgo}
            Plink="https://kunalkatara12.github.io/SortAlgo-Visualizer/"
            Glink="https://github.com/kunalkatara12/SortAlgo-Visualizer"
          />
          <Project
            name="Youtube Clone"
            imgLink={youtubeClone}
            Plink="https://youtube-clone-gemini2.vercel.app/"
            Glink="https://github.com/kunalkatara12/youtube-clone-gemini"
          />
          <Project
            name="Zip Extractor"
            imgLink={zipExt}
            Plink="https://kunalkatara12.github.io/Zip-Extractor/"
            Glink="https://github.com/kunalkatara12/Zip-Extractor"
          />
          <Project
            name="Chat App"
            Plink="https://chat-app-gemini.vercel.app/"
            Glink="https://github.com/kunalkatara12/ChatApp"
          />
          {/* </Slider> */}
        </div>
        <div style={{ fontWeight: "bold", marginTop: 20 }}>
          More Projects coming soon....
        </div>
      </section>
    </div>
  );
};

export default Projects;

