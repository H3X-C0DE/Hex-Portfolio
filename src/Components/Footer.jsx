import React from "react";
import Social from "./Social";
import "../Styles/footer.css";

export default function Footer() {
  return (
    <section id="Footer">
      <div className="footer-container">
        <Social />
        <div className="page-end">
          <div>
            <a href="https://github.com/H3X-C0DE/Hex-Portfolio">
              <div className="tooltip">
                <i className="fa-solid fa-heart fa-beat"></i>
                <span className="tooltiptext">( ͡~ ͜ʖ ͡° )</span>
              </div>
              <p> © 2023 Vetle Tessem</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
