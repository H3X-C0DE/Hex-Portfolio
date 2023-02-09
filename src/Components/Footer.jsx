import React from "react";
import Social from "./Social";
import "../Styles/footer.css";

export default function Footer() {
  return (
    <section id="Footer">
      <div className="footer-container">
        <div className="page-end">
          <a href="https://github.com/H3X-C0DE/Hex-Portfolio">
            <div className="tooltip">
              <i className="fa-solid fa-heart fa-beat"></i>
              <span className="tooltiptext">( ͡~ ͜ʖ ͡° )</span>
            </div>
            <p> © 2023 Vetle Tessem</p>
          </a>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/H3X-C0DE"
              >
                <i className="fa fa-lg fa-github">
                  <span className="link-text">github</span>
                </i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/vetle-tessem/"
              >
                <i className="fa fa-lg fa-linkedin">
                  <span className="link-text">linkedin</span>
                </i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/iihexyii/"
              >
                <i className="fa fa-lg fa-instagram">
                  <span className="link-text">instagram</span>
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
