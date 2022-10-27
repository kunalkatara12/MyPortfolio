import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <section id="projects__section">
        <h2>My Recent Work</h2>
        <div className="container projects__container">
          <article className="projects__item">
            <div className="projects__item-image"></div>
            <h3>Title of Project</h3>
            <a href="https://github.com">Github</a>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Projects;
