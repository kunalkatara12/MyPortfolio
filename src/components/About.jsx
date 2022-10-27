import React from "react";
import Me from "../assets/1666248103726.jpeg";
import {FaAward} from  "react-icons/fa"
import {VscFolderLibrary} from  "react-icons/vsc"
import "./style.scss"
const About = () => {
  return (
    <>
      <section id="about">
        <header className="about__heading" >
          {" "}
          <h5 >Get To know</h5>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              libero pariatur harum nihil quod asperiores ut vero, quisquam
              odio. Nam ipsa quo maiores sint eum hic recusandae consequuntur
              ipsam tempora dolorem rem, id quibusdam totam.
            </p>
            <a href="#Contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
