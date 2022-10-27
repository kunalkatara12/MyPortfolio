import React from "react";
import Me from "../../assets/1666248103726.jpeg";
import {FaAward} from  "react-icons/fa"
import {VscFolderLibrary} from  "react-icons/vsc"
import "./About.scss"
const About = () => {
  return (
    <>
      <div id="about">
        <section id="about__div">
          <header className="about__heading">
            {" "}
            <h5>Get To know</h5>
            <h2 id="heading">About Me</h2>
          </header>

          <div className="container about__container">
            <div id="about__me">
              <div id="my__img">
                <img src={Me} alt="my_image" />
              </div>
            </div>

            <div id="content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon" />
                  <h5>Experience</h5>
                  <small>2+ years of experience as a Web Developer</small>
                </article>
                <article className="about__card">
                  <VscFolderLibrary className="about__icon" />
                  <h5>Projects</h5>
                  <small>5 projects completed</small>
                </article>
              </div>
              <p id="about__para">
                | GSSoC'22 | Frontend Web Developer | 2⭐(1535) @CodeChef |
                 5 ⭐
                @Hackerrank(C++) | Learning Enthusiast |
              </p>
              <a href="#Contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
