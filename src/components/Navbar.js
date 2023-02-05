import React from "react";
import logo from "../Images/logo.png";
const Navbar = () => {
  return (
    <section className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" style={style} />
      </div>
      <ul className="navlinks">
        <li>
          <a href="#intro">About</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#!">Contact</a>
        </li>
      </ul>
    </section>
  );
};

const style = {
  widht: "50px",
  height: "50px",
  clipPath:'circle()'
};

export default Navbar;
