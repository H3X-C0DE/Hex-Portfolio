import React from "react";
import Social from "./Social";
import "../Styles/footer.css";

export default function Footer() {
  return (
    <section id="top-Footer">
      <div className="footer-container">
        <Social />
        <div className="page-end">
          <span>
            <a
              className="tooltip"
              href="https://github.com/H3X-C0DE/Hex-Portfolio"
            >
              <i class="fa-solid fa-heart "></i>
              <span class="tooltiptext">( ͡~ ͜ʖ ͡° )</span>
              <span> © 2023 Vetle Tessem</span>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
