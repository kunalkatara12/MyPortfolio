import React from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
   const openInNewTab = (url) => {
     window.open(url, "_blank");
   };
  return (
    <>
      <nav className="navbar">
        {/* <div id="navbar__title">My Portfolio</div> */}
        <div
         id="navbar__title"
          onClick={() => {
            openInNewTab("/");
          }}
          style={{ marginRight: "2px" }}
        >
          {/* <House /> */}
          <span className="button-title ms-2">
            {/* <Message id="back-to-home" /> */}
            My Portfolio
          </span>
        </div>
        <ul className="app__navbar-links">
          {[
            "home",
            "about",
            "projects",
            // "experience",
            "education",
            "skills",
            "contact",
          ].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="app__navbar-menu">
          <HiMenuAlt4
            style={{
              backgroundColor: "black",
              padding: "5px",
              borderRadius: "50%",
            }}
            onClick={() => setToggle(false)}
          />{" "}
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              {" "}
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {[
                  "home",
                  "about",
                  "projects",
                  // "experience",
                  "education",
                  "skills",
                  "contact",
                ].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
