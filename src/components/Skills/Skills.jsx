import React from "react";
import "./Skills.scss";
import {
  DiCss3,
  DiBootstrap,
  DiHtml5,
  DiJava,
  DiGit,
  DiGithubBadge,
  DiJavascript,
  DiMongodb,
  DiNodejs,
  DiNpm,
  DiPython,
  DiSass,
  DiSqllite,
  DiReact,
} from "react-icons/di";
import { SiTailwindcss, SiCplusplus, SiExpress } from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
const Skills = () => {
  return (
      <div id="skills">
        <section id="skills__section">
          <h3 id="title">Skills</h3>
          <span id="subtitle">My technical level</span>
          <div id="skills__container container grid">
            {" "}
            <div id="skills__content-progress">
              <div id="skills__header">
                <BiCodeCurly />
                <div id="">
                  <h1 id="skills__title">Frontend Developer</h1>
                  <span id="skills__subttitle">More than 2 years</span>
                </div>
                <RiArrowDropDownLine />
                <div id="skills__list grid">
                  <div id="skills__data">
                    <div id="skills__title">
                      <h3 id="skill__name">HTML</h3>
                      <span id="skill__progress-percent">95%</span>
                    </div>
                    <div id="skills__progress-bar">
                      <span id="skill__percentage skill__html"></span>
                    </div>
                  </div>
                  <div id="skills__data">
                    <div id="skills__title">
                      <h3 id="skill__name">CSS</h3>
                      <span id="skill__progress-percent">85%</span>
                    </div>
                    <div id="skills__progress-bar">
                      <span id="skill__percentage skill__css"></span>
                    </div>
                  </div>
                  <div id="skills__data">
                    <div id="skills__title">
                      <h3 id="skill__name">JavaScript</h3>
                      <span id="skill__progress-percent">75%</span>
                    </div>
                    <div id="skills__progress-bar">
                      <span id="skill__percentage skill__javascript"></span>
                    </div>
                  </div>
                  <div id="skills__data">
                    <div id="skills__title">
                      <h3 id="skill__name">React</h3>
                      <span id="skill__progress-percent">80%</span>
                    </div>
                    <div id="skills__progress-bar">
                      <span id="skill__percentage skill__react"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="skills__tools-techno">
            <DiBootstrap className="tech__icons" />
            <DiCss3 className="tech__icons" />
            <DiHtml5 className="tech__icons" />
            <DiJava className="tech__icons" />
            <DiGit className="tech__icons" />
            <DiGithubBadge className="tech__icons" />
            <DiJavascript className="tech__icons" />
            <DiMongodb className="tech__icons" />
            <DiNodejs className="tech__icons" />
            <DiNpm className="tech__icons" />
            <DiPython className="tech__icons" />
            <DiSass className="tech__icons" />
            <DiSqllite className="tech__icons" />
            <DiReact className="tech__icons" />
            <SiTailwindcss className="tech__icons" />
            <SiCplusplus className="tech__icons" />
            <SiExpress className="tech__icons" />
          </div>
        </section>
      </div>
 
  );
};

export default Skills;
