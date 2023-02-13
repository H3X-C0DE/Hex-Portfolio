import React, { useState } from "react";

import emailjs from "emailjs-com";
import "../Styles/contact.css";
import FadeInOut from "./misc/scrollInOut";
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
    <section id="contact">
      <div className="content-wrapper">
        <FadeInOut>
          <h2 className="about-title">Kontakt Meg</h2>
          <form onSubmit={sendEmail}>
            <div className="contact-form">
              <div className="left">
                <input type="hidden" name="contact_number" />
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="from_name"
                  placeholder="Navnet ditt"
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="from_email"
                  placeholder="Email@Eksempel.no"
                  required
                />
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Emne"
                />
              </div>
              <div className="right">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="html_message"
                  placeholder="Heisann! 😃/"
                  required
                />
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
        </FadeInOut>
      </div>
    </section>
  );
}
