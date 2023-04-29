import React from "react";
import "./Footer.scss";
import {
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsMedium,
} from "react-icons/bs";
import { SiCodechef, SiHackerrank, SiLeetcode } from "react-icons/si";
const Footer = () => {
  const style = { color: "white", fontSize: "1.2em" };
  return (
    <div id="footer">
      <h2 id="footer__title">Kunal Katara's Portfolio</h2>
      <div>
        {" "}
        <h4>Let's connect</h4>
        <div className="icon_of_my-handles">
          <a target={"blank"} href="https://www.instagram.com/kunalkatara2877/">
            <BsInstagram style={style} />
          </a>
          <a target={"blank"} href="https://github.com/kunalkatara12">
            <BsGithub style={style} />
          </a>
          <a
            target={"blank"}
            href="https://www.linkedin.com/in/kunal-k-9809391b3/"
          >
            <BsLinkedin style={style} />
          </a>{" "}
          <a target={"blank"} href="https://twitter.com/KunalKatara4">
            <BsTwitter style={style} />
          </a>{" "}
          <a target={"blank"} href="https://medium.com/@kunalkatara888">
            <BsMedium style={style} />
          </a>
          <a
            target={"blank"}
            href="https://www.codechef.com/users/kunalkatara12"
          >
            <SiCodechef style={style} />
          </a>
          <a target={"blank"} href="https://www.hackerrank.com/kunalkatara888">
            <SiHackerrank style={style} />
          </a>
          <a target={"blank"} href="https://leetcode.com/kunalkatara888/">
            <SiLeetcode style={style}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
