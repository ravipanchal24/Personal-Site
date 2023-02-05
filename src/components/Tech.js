import React from "react";
const Tech = () => {
  return (
    <div className="tech-wrapper-main">
      <h1 className="heading">Technologies</h1>
      <div className="tech-wrapper">
        <div className="tech-card">
          <h2 className="title">HTML</h2>
          <i className="fa-brands fa-html5 fa-8x fa-bounce"></i>
          <p className="description">
            HTML is the standard markup language for documents designed to be displayed in a web browser.
          </p>
        </div>
        <div className="tech-card">
          <h2 className="title">CSS</h2>
          <i className="fa-brands fa-css3-alt fa-8x fa-shake"></i>
          <p className="description">
            Cascading Style Sheets is a style sheet language used for describing the presentation of a HTML or XML document.
          </p>
        </div>
        <div className="tech-card">
          <h2 className="title">JavaScript</h2>
          <i className="fa-brands fa-js fa-8x fa-beat"></i>
          <p className="description">
            JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
          </p>
        </div>
        <div className="tech-card">
          <h2 className="title">React</h2>
          <i className="fa-brands fa-react fa-8x fa-flip"></i>
          <p className="description">
            React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
