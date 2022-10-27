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
import { SiTailwindcss, SiCplusplus,  SiExpress } from "react-icons/si";
const Skills = () => {
  return (
    <>
      <div id="skills">
        <section id="skills__section">
          <h3 id="title">Skills</h3>
          <div id="skills__circular-progress"></div>
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
    </>
  );
};

export default Skills;
