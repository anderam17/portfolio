import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./ContactMe.css";

function ContactMe() {
  const [emailState, setEmailState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //save the user's name
  const nameChange = (event) => {
    setEmailState({ ...emailState, name: event.target.value });
  };

  //save user's email
  const emailChange = (event) => {
    setEmailState({ ...emailState, email: event.target.value });
  };

  //save user's message
  const messageChange = (event) => {
    setEmailState({ ...emailState, message: event.target.value });
  };

  //on submit of email form
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_wpg7sm6",
        "email-me-form",
        "user_uIXiC2sRHiSXX6rbPIiGJ"
      )
      .then((res) => {
        console.log("Email Sent");
      })
      .catch((err) => {
        console.log(err);
      });
        //test
    setEmailState({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <SectionHeading title="Contact Me" id="contact-me" />
      {/* //form layout that always requires a name, email, and message */}
      <div className="container">
      <form className="test-mailing" id="email-me-form" onSubmit={handleSubmit}>
        <div id="email-form" style={{ fontSize: "1.2rem" }}>
          <h3>Feel free to reach out. Enter your name, email, and message below! </h3>
          <div>
            <label htmlFor="name">Name</label>
            <input
              className="form-control email-inputs"
              name="name"
              placeholder="Your Name Here"
              type="text"
              id="name"
              value={emailState.name}
              onChange={nameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="form-control email-inputs"
              name="email"
              type="text"
              id="email"
              placeholder="Your Email Here"
              value={emailState.email}
              onChange={emailChange}
              required
            />
          </div>
          <label htmlFor="message">Message</label>
          <div>
            <textarea
              id="message"
              name="message"
              value={emailState.message}
              onChange={messageChange}
              placeholder="Your Message Here"
              required
              className="email-text-area form-control"
              rows="15"
              cols="20"
            />
          </div>

          <div className="btn-row">
          <button id="send-email-btn" type="button" className="btn btn-info" onClick={handleSubmit}>
              SEND
          </button>
          </div>
        </div>
      </form>
      </div>
    </>
  );
}

export default ContactMe;
