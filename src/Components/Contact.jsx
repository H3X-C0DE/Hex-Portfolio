// TODO: add ReCAPTCHA
import React from "react";
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

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="html_message" />
      <input type="submit" value="Send" />
    </form>
  );
}
