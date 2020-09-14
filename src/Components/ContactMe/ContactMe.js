import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { SMTPClient } from "emailjs";
import SectionHeading from "../SectionHeading/SectionHeading";

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
      <form className="test-mailing" id="email-me-form" onSubmit={handleSubmit}>
        <div style={{ fontSize: "1.2rem" }}>
          <h6>You can also send me an email directly from here</h6>
          <div>
            <label htmlFor="name">Name</label>
            <input
              className="form-control email-inputs"
              name="name"
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
              placeholder="Put your message here"
              required
              className="email-text-area form-control"
              rows="15"
              cols="20"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-outline-light"
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactMe;
