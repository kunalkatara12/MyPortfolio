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
import { BiCodeCurly, BiServer } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
const Skills = () => {
  return (
    <div id="skills">
      <section id="skills__section">
        <h3 id="skills__title">Skills</h3>
        <h5 id="skills__subtitle">My technical level</h5>
        <div className="skills__container container grid">
          {" "}
          <div id="skills__container-inside-container">
            {/* Skills 1 */}
            <div className="skills__content-progress">
              <div className="skills__header">
                <BiCodeCurly className="skills__icon" />
                <div className="skills__title-before">
                  <h1 className="skills__title">Frontend Developement</h1>
                  <span className="skills__subtitle">More than 2 years</span>
                </div>
                <RiArrowDropDownLine className="skills__arrow" />
              </div>
              <div className="skills__list grid">
                <div className="skill__data">
                  <div className="skill__title">
                    <h3 className="skill__name">HTML</h3>
                    {/* skills__number ki jagah neeche wali */}
                    <span className="skill__progress-percent">95%</span>
                  </div>
                  <div className="skill__progress-bar">
                    <span className="skill__percentage skill__html"></span>
                  </div>
                </div>
                <div className="skill__data">
                  <div className="skill__title">
                    <h3 className="skill__name">CSS</h3>
                    <span className="skill__progress-percent">85%</span>
                  </div>
                  <div className="skill__progress-bar">
                    <span className="skill__percentage skill__css"></span>
                  </div>
                </div>
                <div className="skill__data">
                  <div className="skill__title">
                    <h3 className="skill__name">JavaScript</h3>
                    <span className="skill__progress-percent">75%</span>
                  </div>
                  <div className="skill__progress-bar">
                    <span className="skill__percentage skill__javascript"></span>
                  </div>
                </div>
                <div className="skill__data">
                  <div className="skill__title">
                    <h3 className="skill__name">React</h3>
                    <span className="skill__progress-percent">80%</span>
                  </div>
                  <div className="skill__progress-bar">
                    <span className="skill__percentage skill__react"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* Skills 1 */}
            {/* Skills 2 */}
            <div className="skills__content-progress">
              <div className="skills__header">
                <BiServer className="skills__icon" />
                <div className="skills__title-before">
                  <h1 className="skills__title">Backend Developenent</h1>
                  <span className="skills__subtitle">6 months</span>
                </div>
                <RiArrowDropDownLine className="skills__arrow" />
              </div>
              <div className="skills__list grid">
                <div className="skill__data">
                  <div className="skill__title">
                    <h3 className="skill__name">Node.Js</h3>
                    <span className="skill__progress-percent">55%</span>
                  </div>
                  <div className="skill__progress-bar">
                    <span className="skill__percentage skill__node"></span>
                  </div>
                </div>
                <div className="skill__data">
                  <div className="skill__title">
                    <h3 className="skill__name">Express.Js</h3>
                    <span className="skill__progress-percent">45%</span>
                  </div>
                  <div className="skill__progress-bar">
                    <span className="skill__percentage skill__express"></span>
                  </div>
                </div>
                <div className="skill__data">
                  <div className="skill__title">
                    <h3 className="skill__name">MongoDB</h3>
                    <span className="skill__progress-percent">55%</span>
                  </div>
                  <div className="skill__progress-bar">
                    <span className="skill__percentage skill__mongo"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* Skills 2 */}
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
