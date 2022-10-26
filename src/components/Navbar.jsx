import React from "react";
import "./style.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="app__navbar-links">
          {["Home", "About", "Projects",  "Contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
