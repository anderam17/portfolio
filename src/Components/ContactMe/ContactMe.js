import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import SectionHeading from "../SectionHeading/SectionHeading";
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function ContactMe() {
  const [emailState, setEmailState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //save the user's name
  //! does value need ()
  //! Do I need return?
  const nameChange = (event) => {
    setEmailState({ ...emailState, name: event.target.value });
  };

  //save user's email
  //! does value need ()
  //! Do I need return?
  const emailChange = (event) => {
    setEmailState({ ...emailState, email: event.target.value });
  };

  //save user's message
  //! does value need ()
  //! Do I need return?
  const messageChange = (event) => {
    setEmailState({ ...emailState, message: event.target.value });
  };

  //on submit of email form
  const handleSubmit = (event) => {
    event.preventDefault();

    //This templateId is created in EmailJS.com
    const templateId = "template_wpg7sm6";

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    sendFeedback(templateId, {
      name: emailState.name,
      email: emailState.email,
      message: emailState.message,
    });
  };

  const sendFeedback = (templateID, variables) => {
    window.emailjs.send(
      "gmail",
      templateID,
      variables
    ).then((res) => {
      //email sent msg
      console.log("email sent");
    }).catch((err) => {
      console.log(`Email error ${err}`);
    })
  };

return (
  <>
  <SectionHeading title="Contact Me" id="contact-me"/>
  {/* //form layout that always requires a name, email, and message */}
  <form className="test-mailing" onSubmit={handleSubmit}>
    <div style={{fontSize: "1.2rem"}}>
    <h6>You can also send me an email directly from here</h6>
    <div>
                  <label htmlFor="name">Name</label>
                  <input className="form-control email-inputs" name="user_name" type="text" 
                    id="name" onChange={nameChange} required/>
              </div>
              <div>
                  <label htmlFor="email">Email</label>
                  <input className="form-control email-inputs" name="user_email" type="text"
                    id="email" onChange={emailChange} required/>
              </div>
              <label htmlFor="message">
                  Message
              </label>
              <div>
                <textarea
                  id="message"
                  name="message"
                  onChange={messageChange}
                  placeholder="Put your message here"
                  required
                  className="email-text-area form-control"
                  rows="15"
                  cols="20"
                />
              </div>
              <input type="submit" value="Submit" className="btn btn-outline-light" />
              <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  </form>
  </>
)

}

export default ContactMe;

//   const [emailState, setEmailState] =useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//   const resetForm = () =>  {
//     setEmailState({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     })
//   };
//   const handleChange = (param, e) => {
//     setEmailState({...emailState, [param]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const {name, email, subject, message} = emailState;

//     let templateParams = {
//       from_name: email,
//       to_name: 'allana.anderson17@gmail.com',
//       subject: subject,
//       message_html: message,
//      }

//      emailjs.send(
//       'gmail',
//       'template_wpg7sm6',
//        templateParams,
//       'user_uIXiC2sRHiSXX6rbPIiGJ'
//      )

//      resetForm();

//   };
//   return (
//     <>
//    <SectionHeading title="Contact Me" id="contact-me"/>

//           <h1 className="p-heading1">Get in Touch</h1>
//           {/* //Took this out of parens */}
//           <Form onSubmit={handleSubmit(this)}>
//             <FormGroup controlId="formBasicEmail">
//               <Label className="text-muted">Email address</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={emailState.email}
//                 className="text-primary"
//                 onChange={handleChange("email", this)}
//                 placeholder="Enter email"
//               />
//             </FormGroup>
// <FormGroup controlId="formBasicName">
//               <Label className="text-muted">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={emailState.name}
//                 className="text-primary"
//                 onChange={handleChange().bind('name', this)}
//                 placeholder="Name"
//               />
//             </FormGroup>
// <FormGroup controlId="formBasicSubject">
//               <Label className="text-muted">Subject</Label>
//               <Input
//                 type="text"
//                 name="subject"
//                 className="text-primary"
//                 value={emailState.subject}
//                 onChange={handleChange.bind('subject', this)}
//                 placeholder="Subject"
//               />
//             </FormGroup>
// <FormGroup controlId="formBasicMessage">
//               <Label className="text-muted">Message</Label>
//               <Input
//                 type="textarea"
//                 name="message"
//                 className="text-primary"
//                 value={emailState.message}
//                 onChange={handleChange.bind('message', this)}
//               />
//             </FormGroup>
// <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//     </>
//   );
