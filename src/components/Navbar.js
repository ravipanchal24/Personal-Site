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
          <a href="#intro"><b>About</b></a>
        </li>
        <li>
          <a href="#project"><b>Projects</b></a>
        </li>
        <li>
          <a href="#!"><b>Contact</b></a>
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
