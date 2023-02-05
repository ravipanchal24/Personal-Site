import React from "react";
import contactkeeper from "../Images/contactkeeper.png";
import githubfinder1 from "../Images/githubfinder1.png";
import githubfinder2 from "../Images/githubfinder2.png";
import todolist from "../Images/todolist.png";
const Projects = () => {
  return (
    <div className="project-container" id="project">
      <h1 className="heading">Projects</h1>
      <div className="project">
        <h2 className="project-title">Contact Keeper</h2>
        <div className="project-info">
          <img
            src={contactkeeper}
            alt="contactkeeper"
          />
          <p className="project-hover">Hover over the image to zoom</p>
          <p className="project-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            velit veniam enim sit asperiores nesciunt blanditiis provident
            eligendi inventore veritatis.
          </p>
          <a
            href="https://github.com/ravipanchal24/Contact-Keeper"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github fa-3x"></i>
          </a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h2 className="project-title">Github Finder</h2>
        <div className="project-info">
          <img
            src={githubfinder1}
            alt="githubfinder1"
          />
          <p className="project-hover">Hover over the image to zoom</p>
          <img
            src={githubfinder2}
            alt="githubfinder2"
          />
          <p className="project-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            velit veniam enim sit asperiores nesciunt blanditiis provident
            eligendi inventore veritatis.
          </p>
          <a
            href="https://github.com/ravipanchal24/github-finder"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github fa-3x"></i>
          </a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h2 className="project-title">To-do List</h2>
        <div className="project-info">
          <img
            src={todolist}
            alt="todolist"
            style={{ width: "150px", height: "100px" }}
          />
          <p className="project-hover">Hover over the image to zoom</p>
          <p className="project-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            velit veniam enim sit asperiores nesciunt blanditiis provident
            eligendi inventore veritatis.
          </p>
          <a
            href="https://github.com/ravipanchal24/todoListApp"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
