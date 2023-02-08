import React from "react";
import { useState } from "react";
const Tech = () => {
  const [contact, setContact] = useState({
    name: "a",
    email: "a",
    phone: "7",
    msg: "a",
  });

  const { name, email, phone, msg } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: [e.target.value] });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && phone !== "" && msg !== "") {
      document.querySelector("#submitForm").style.display = "none";
      document.querySelector(".submitSuccess").style.display = "flex";
      document.querySelector(".errormsg").style.display = "none";
    } else if (name === "" || email === "" || phone === "" || msg === "") {
      document.querySelector(".errormsg").style.display = "block";
    }
  };

  return (
    <div className="contact-wrapper-main" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h1>Contact Information</h1>
          <h2>I would love to hear from you, please drop a message.</h2>
          <p>
            <i className="fa-solid fa-phone"></i> 8510968934
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> mpravikumar04@gmail.com
          </p>
          <div className="social-media">
            <a
              href="https://github.com/ravipanchal24"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-github fa-2x"></i>
            </a>
            <a
              href="https://linkedin.com/in/ravi-panchal24"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <h3
            className="errormsg"
            style={{
              color: "red",
              border: "none",
              margin: "1rem 0 -1rem 1rem",
              display: "none",
            }}
          >
            Please fill all the fields!
          </h3>
          <form>
            <input
              name="name"
              type="text"
              value={contact.name}
              placeholder="Your Name"
              onChange={onChange}
              required
            />
            <input
              name="email"
              type="email"
              value={contact.email}
              placeholder="Your Email"
              onChange={onChange}
              required
            />
            <input
              name="phone"
              type="number"
              value={contact.phone}
              placeholder="Your Phone"
              onChange={onChange}
              required
            />
            <textarea
              name="msg"
              placeholder="Your Message"
              value={contact.msg}
              onChange={onChange}
              required
            ></textarea>
            <button onClick={onSubmit} className="submitForm" id="submitForm">
              Send Message
            </button>
            <button
              onClick={onSubmit}
              className="submitForm submitSuccess"
              disabled="disabled"
            >
              <i className="fa-solid fa-check-circle fa-xl"></i> Message Sent
              Successfully!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tech;
