import React from "react";
import "../Styles/Social.css";
export default function Social() {
  return (
    <div className="social-media">
      <h3>Social Media</h3>
      <div className="social-list">
        <ul>
          <li>
            {/* <a
              target="_blank"
              href="https://twitter.com/IIHEXYII"
              className="fa fa-lg fa-twitter"
            >
            </a> */}
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
          {/* <button className="discord-btn" onclick="CopyToClip()">
            <i className="fab fa-discord"></i>
          </button>
          <input className="hidden" type="text" value="Vetle#5572" id="myInput" /> */}
        </ul>
      </div>
    </div>
  );
}
