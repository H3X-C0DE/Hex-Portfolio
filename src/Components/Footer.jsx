import React from "react";
import Social from "./Social";
import "../Styles/footer.css";

export default function Footer() {
  return (
    <section id="top-Footer">
      <div className="footer-container">
        <Social />
        <div className="page-end">
          <span>© 2023 Vetle Tessem</span>
        </div>
      </div>
    </section>
  );
}
