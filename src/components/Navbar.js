import React, { useState } from "react";
import logo from "../Images/logo.png";
{
  /* const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [addAnimation, setAddAnimation] = useState(false);
  const showNavbar = () => {
    setAddAnimation(showMobileNav);

    setTimeout(() => {
      setShowMobileNav(!showMobileNav);
    }, 300);
  };
  return (
    <section className="navbarSection">
      <div className="mobileNav">
        {!showMobileNav && (
          <button
            onClick={() => {
              showNavbar();
            }}
            className="hamburgerMenu"
          >
            <i className="fa-solid fa-bars fa-2x"></i>
          </button>
        )}
        <div
          className={`mobileNavOpen ${showMobileNav ? "visible" : "hide"} ${
            addAnimation ? "animate" : ""
          } `}
        >
          <div className="closeIcon">
            <i
              className="fa-solid fa-xmark fa-2x"
              onClick={() => {
                showNavbar();
              }}
            ></i>
          </div>
          <ul className="navlinks navlinksMobile">
            <li>
              <a href="#intro">
                <b>About</b>
              </a>
            </li>
            <li>
              <a href="#project">
                <b>Projects</b>
              </a>
            </li>
            <li>
              <a href="#contact">
                <b>Contact</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" style={style} />
        </div>
        <ul className="navlinks">
          <li>
            <a href="#intro">
              <b>About</b>
            </a>
          </li>
          <li>
            <a href="#project">
              <b>Projects</b>
            </a>
          </li>
          <li>
            <a href="#contact">
              <b>Contact</b>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
*/
}

const Navbar = () => {
  return (
    <section className="navbarSection">
      <div className="mobileNav">
        <button
          id="hamburgerMenu"
          onClick={() => {
            document.getElementById("hamburgerMenu").classList.toggle("hide");
            document.getElementById("mobileNavOpen").classList.toggle("show");
            document.getElementById("mobileNavOpen").style.width = "100%";
          }}
        >
          <i className="fa-solid fa-bars fa-2x"></i>
        </button>
        <div className="mobileNavOpen hide" id="mobileNavOpen">
          <div className="closeIcon">
            <i
              className="fa-solid fa-xmark fa-2x"
              onClick={() => {
                document
                  .getElementById("hamburgerMenu")
                  .classList.toggle("hide");
                document
                  .getElementById("mobileNavOpen")
                  .classList.toggle("show");
              }}
            ></i>
          </div>
          <ul className="navlinks navlinksMobile">
            <li>
              <a
                href="#intro"
                onClick={() => {
                  document
                    .getElementById("hamburgerMenu")
                    .classList.toggle("hide");
                  document
                    .getElementById("mobileNavOpen")
                    .classList.toggle("show");
                }}
              >
                <b>About</b>
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={() => {
                  document
                    .getElementById("hamburgerMenu")
                    .classList.toggle("hide");
                  document
                    .getElementById("mobileNavOpen")
                    .classList.toggle("show");
                }}
              >
                <b>Projects</b>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  document
                    .getElementById("hamburgerMenu")
                    .classList.toggle("hide");
                  document
                    .getElementById("mobileNavOpen")
                    .classList.toggle("show");
                }}
              >
                <b>Contact</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" style={style} />
        </div>
        <ul className="navlinks">
          <li>
            <a href="#intro">
              <b>About</b>
            </a>
          </li>
          <li>
            <a href="#project">
              <b>Projects</b>
            </a>
          </li>
          <li>
            <a href="#contact">
              <b>Contact</b>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
const style = {
  widht: "50px",
  height: "50px",
  clipPath: "circle()",
};

export default Navbar;
