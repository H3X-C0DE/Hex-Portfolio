import React from "react";
import "../Styles/Social.css";
export default function Social() {
  return (
    <div className="social-media">
      <h3>Social Media</h3>
      <div className="social-list">
        <ul>
          {/* <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/IIHEXYII"
            >
              {" "}
              <i className="fa fa-lg fa-twitter"></i>
            </a>
          </li> */}
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/H3X-C0DE"
            >
              <i className="fa fa-lg fa-github"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/vetle-tessem/"
            >
              <i className="fa fa-lg fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/iihexyii/"
            >
              <i className="fa fa-lg fa-instagram"></i>
            </a>
          </li>
          {/* <button className="discord-btn" onclick="CopyToClip()">
            <i className="fab fa-discord"></i>
          </button>
          <input className="hidden" type="text" value="Vetle#5572" id="myInput" /> */}
        </ul>
      </div>
    </div>
  );
}
