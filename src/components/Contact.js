import React from "react";
import { useState } from "react";
const Tech = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: [e.target.value] });
  };

  const onSubmit = () => {};

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
          <form>
            <input
              name="name"
              type="text"
              value={contact.name}
              placeholder="Your Name"
              onChange={onChange}
            />
            <input
              name="email"
              type="email"
              value={contact.email}
              placeholder="Your Email"
              onChange={onChange}
            />
            <input
              name="phone"
              type="number"
              value={contact.phone}
              placeholder="Your Phone"
              onChange={onChange}
            />
            {/*<input type="text" value={msg} placeholder="Your Message" className="msg" /> */}
            <textarea
              name="msg"
              placeholder="Your Message"
              value={contact.msg}
              onChange={onChange}
            ></textarea>
            <button onClick={onSubmit} className="submitForm">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tech;
