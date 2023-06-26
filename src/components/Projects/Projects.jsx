import React from "react";
import Project from "./Project/Project";
import "./Projects.scss"
import sortAlgo from "../../assets/Screenshot (208).png"
import youtubeClone from "../../assets/Screenshot (209).png"
import zipExt from "../../assets/Screenshot (210).png"
import randPass from "../../assets/RandomPassGen.png"
import charCount from "../../assets/CharCouter.png"
import chatApp from "../../assets/screenshot-chat-app-eight-sigma.vercel.app-2023.06.26-23_09_13.png"
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
            description="Implemented a wide range of sorting algorithms including Bubble Sort, Selection Sort, Quick Sort, etc. providing users with various options to explore and
understand different sorting techniques."
          />
          <Project
            name="Youtube-Clone-Gemini"
            imgLink={youtubeClone}
            Plink="https://youtube-clone-gemini2.vercel.app/"
            Glink="https://github.com/kunalkatara12/youtube-clone-gemini"
            description="YouTube-Clone-Gemini is a React.js-based project that replicates the popular video-sharing platform YouTube, with some modifications and additional features. It provides users with a familiar interface and functionality while offering unique aspects for an enhanced user experience."
          />
          <Project
            name="Zip Extractor"
            imgLink={zipExt}
            Plink="https://kunalkatara12.github.io/Zip-Extractor/"
            Glink="https://github.com/kunalkatara12/Zip-Extractor"
          />
          <Project
            name="Chat App"
            imgLink={chatApp}
            Plink="https://chat-app-eight-sigma.vercel.app/"
            Glink="https://github.com/kunalkatara12/ChatApp"
          />
          <Project
            name="Random-Password-Generator"
            imgLink={randPass}
            Plink="https://kunalkatara12.github.io/Random-Password-Generator/"
            Glink="https://github.com/kunalkatara12/Random-Password-Generator"
            description="Random Password Generator is a web based project that generates secure and randomized passwords."
          />
          <Project
            name="CharacterCounter"
            imgLink={charCount}
            Plink="https://kunalkatara12.github.io/CharacterCounter/"
            Glink="https://github.com/kunalkatara12/CharacterCounter"
            description="CharacterCounter is a lightweight web based project that allows users to count the number of characters in a text input field in real-time."
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

