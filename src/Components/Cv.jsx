import React from "react";
import "../Styles/Cv.css";
import placeholderImg from "../Assets/Images/me.jpg";
import img1 from "../Assets/Images/ecplay.jpg";
import img2 from "../Assets/Images/noroff.jpg";

export default function Cv() {
  return (
    <section id="top-cv">
      <div className="cv">
        <div className="cv-container">
          <h2 className="cv-title">Experience</h2>
          <div className="cv-card">
            <img src={img1} alt="company logo" />
            <div className="cv-card-content">
              <h3>Junior front-end developer</h3>
              <p className="cv-card-under-title">
                EC-Play <span>·</span> Sommer Vikar
              </p>
              <p className="cv-card-info">Jun 2021 - Aug 2021 · 3 mos</p>
              <p className="cv-card-info">Bergen, Norge</p>
              <p>
                Jeg lagde componenter til web-Appen deres i typescript Og jobbet
                med design til sider som ikke var laget enda som for ekempel
                email verification landings side og lignende.
              </p>
            </div>
          </div>
          <div className="cv-card">
            <img src={placeholderImg} alt="company logo" />
            <div className="cv-card-content">
              <h3>Jobb title</h3>
              <p className="cv-card-under-title">
                Company <span>·</span> Stilling
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
          <h2 className="cv-title">Utdanning</h2>
          <div className="utdanning">
            <div className="cv-card">
              <img src={img2} alt="company logo" />
              <div className="cv-card-content">
                <h3>Noroff</h3>
                <p className="cv-card-under-title">
                  University <span>·</span> Front-End Development
                </p>
                <p className="cv-card-info">Aug 2019 - May 2021</p>
                <p className="cv-card-info">Bergen, Norge</p>
                <p>
                  Lærte basic nivå i design, HTML5, CSS, Javascript, React,
                  Rest-API, Word-press, og Typography bare for å nevne noe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
