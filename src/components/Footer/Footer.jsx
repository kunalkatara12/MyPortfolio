import React from "react";
import "./Footer.scss";
import {
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsMedium,
} from "react-icons/bs";
import { SiCodechef, SiHackerrank } from "react-icons/si";
const Footer = () => {
  return (
    <div id="footer">
      <h2 id="footer__title">Kunal Katara's Portfolio</h2>
      <div>
        {" "}
        <h4>Let's connect</h4>
        <div className="icon_of_my-handles">
          <a href="https://www.instagram.com/kunalkatara2877/">
            <BsInstagram />
          </a>
          <a href="">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/kunal-k-9809391b3/">
            <BsLinkedin />
          </a>{" "}
          <a href="">
            <BsTwitter />
          </a>{" "}
          <a href="">
            <BsMedium />
          </a>
          <a href="">
            <SiCodechef />
          </a>
          <a href="">
            <SiHackerrank />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
