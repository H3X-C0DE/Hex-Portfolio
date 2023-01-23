import React from "react";
import "../Styles/Cv.css";
import img1 from "../Assets/Images/me.jpg";
export default function Cv() {
  return (
    <section id="top-cv">
      <div className="cv">
        <div className="cv-container">
          <h2 className="cv-title">Experience</h2>
          <div className="cv-card">
            <img src={img1} alt="company logo" />
            <div className="cv-card-content">
              <h3>Jobb title</h3>
              <p className="cv-card-under-title">
                Company <span>Stilling</span>
              </p>
              <p className="cv-card-info">Jun 2021 - Aug 2021 · 3 mos</p>
              <p className="cv-card-info">Bergen, Norge</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus optio dicta dolor tenetur eius. Minus doloribus
                magnam, aliquid ratione et dicta! Aperiam autem harum illum
                doloremque labore fugit.
              </p>
            </div>
          </div>
          <div className="cv-card">
            <img src={img1} alt="company logo" />
            <div className="cv-card-content">
              <h3>Jobb title</h3>
              <p className="cv-card-under-title">
                Company <span>Stilling</span>
              </p>
              <p className="cv-card-info">Jun 2021 - Aug 2021 · 3 mos</p>
              <p className="cv-card-info">Bergen, Norge</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus optio dicta dolor tenetur eius. Minus doloribus
                magnam, aliquid ratione et dicta! Aperiam autem harum illum
                doloremque labore fugit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
