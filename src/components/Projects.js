import React from "react";
import contactkeeper from "../Images/contactkeeper.png";
import githubfinder1 from "../Images/githubfinder1.png";
import githubfinder2 from "../Images/githubfinder2.png";
import todolist from "../Images/todolist.png";
import livechat from "../Images/livechat.png";
const Projects = () => {
  return (
    <div className="project-container" id="project">
      <h1 className="heading">Projects</h1>
      <div className="project">
        <h2 className="project-title">Live Chat App</h2>
        <div className="project-info">
          <img
            src={livechat}
            alt="contactkeeper"
          />
          <p className="project-hover">Hover over the image to zoom</p>
          <p className="project-description">
            Live chat app allows user to chat with each other in real time. Front-end made using ReactJS, backend using Node.js and socket.IO to manage connections.
          </p>
          <a
            href="https://github.com/ravipanchal24/Live-Chat-App"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github fa-3x"></i>
          </a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h2 className="project-title">Contact Keeper</h2>
        <div className="project-info">
          <img
            src={contactkeeper}
            alt="contactkeeper"
          />
          <p className="project-hover">Hover over the image to zoom</p>
          <p className="project-description">
            A full stack MERN application that allows user to create, manage & organize their contacts with basic CRUD functionality along with login and sign up features.
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
            A simple React app that allows to search Github users and see their profile along with information like public repos, followers etc.
            Implemented using public Github APIs.
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
            Basic task management app made in React that can be used to manage day to day tasks and activities with options like to mark tasks as done or sort them in a particular order.
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
