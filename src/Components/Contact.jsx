import React from "react";
import Social from "./Social";

export default function Contact() {
  return (
    <section id="top-contact">
      <h2 className="about-title">Contact</h2>
      <form
        className="contact-form"
        action="http://formsubmit.co/vetlet.kodehode@gmail.com"
        method="POST"
      >
        <div className="half left contact-form">
          <input type="text" name="_honey" style="display: none" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="thankyou.html" />
          <label for="input-name"></label>
          <input type="text" id="input-name" placeholder="Name" required />
          <label for="input-email"></label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            name="_subject"
            placeholder="Subject"
            value="New Message!"
          />
        </div>
        <div className="half right contact-form">
          <textarea
            name="message"
            type="text"
            id="input-message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input type="submit" value="Submit" id="input-submit" />
      </form>
      <Social />
      <h3>Follow Me</h3>
      <div className="social-list">
        <ul>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/IIHEXYII"
              className="fa fa-lg fa-twitter"
            ></a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/H3X-C0DE"
              className="fa fa-lg fa-github"
            ></a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vetle-tessem/"
              className="fa fa-lg fa-linkedin"
            ></a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/iihexyii/"
              className="fa fa-lg fa-instagram"
            ></a>
          </li>
          <button className="discord-btn" onclick="CopyToClip()">
            <i className="fab fa-discord"></i>
          </button>
          <input
            className="hidden"
            type="text"
            value="H3X-C0D3#5572"
            id="myInput"
          />
        </ul>
      </div>
    </section>
  );
}
