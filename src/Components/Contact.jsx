// TODO: add ReCAPTCHA
import React, { useState } from "react";

import emailjs from "emailjs-com";
import "../Styles/contact.css";
export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_ssobyap",
        "template_fgkyl4k",
        e.target,
        "sGbr0SFgk1Rrfr3ok"
      )
      .then(
        (result) => {
          window.location.reload(); //This is reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const [isRobot, setIsRobot] = useState(false);

  return (
    <section id="top-contact">
      <div className="content-wrapper">
        <h2 className="about-title">Get in contact</h2>
        <form onSubmit={sendEmail}>
          <div className="contact-form">
            <div className="left">
              <input type="hidden" name="contact_number" />
              <label>Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="from_email"
                placeholder="Email@example.com"
                required
              />
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="right">
              <label>Message</label>
              <textarea name="html_message" placeholder="Hello!" required />
            </div>
            <div className="submit-container">
              <label id="isRobot">
                I'm Human&nbsp;
                <input
                  type="checkbox"
                  checked={isRobot}
                  onChange={() => setIsRobot(!isRobot)}
                />
              </label>
              <input
                id="submit-btn"
                type="submit"
                value="Send"
                disabled={!isRobot}
                style={{
                  backgroundColor: !isRobot ? "#495057" : "#0d6efd",
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
