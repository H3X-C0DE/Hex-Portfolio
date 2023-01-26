import React from "react";
import "../Styles/Cv.css";
import placeholderImg from "../Assets/Images/me.jpg";
import img1 from "../Assets/Images/ecPlay.jpg";
import img2 from "../Assets/Images/noroff.jpg";
import img3 from "../Assets/Images/nova.jpg";
import img4 from "../Assets/Images/jobLoop.jpg";
import SeeMore from "./misc/seeMore";

export default function Cv() {
  return (
    <section id="top-cv">
      <div className="cv">
        <div className="cv-container">
          <h2 className="about-title">Curriculum Vitae</h2>
          <h2 className="cv-title">Experience</h2>
          <div className="cv-card">
            <img src={img1} alt="company logo" />
            <div className="cv-card-content">
              <h3>Junior front-end developer</h3>
              <p className="cv-card-under-title">
                EC-Play <span>·</span> Seasonal
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
            <img src={img3} alt="company logo" />
            <div className="cv-card-content">
              <h3>Frivilig</h3>
              <p className="cv-card-under-title">
                NOVA Spektrum <span>·</span> Seasonal
              </p>
              <p className="cv-card-info">Nov 2014 - Nov 2022 </p>
              <p className="cv-card-info">Lillestrøm, Viken, Norway</p>
              <p>
                Har jobbet på Spillexpo I flere år som frivilig. jeg reiser
                tilbake vært år for å delta, nå er jeg med som frivilig leder
                for andre frivilige og hjelper til 110% i de 3 dagene det pågår
                sånn at Spillexpo er og blir en fantastik opplevelse for så
                mange som mulig, for både gjester og frivilige.
              </p>
            </div>
          </div>
          <SeeMore>
            <div className="cv-card">
              <img src={placeholderImg} alt="company logo" />
              <div className="cv-card-content">
                <h3>Frivilig</h3>
                <p className="cv-card-under-title">
                  NOVA Spektrum <span>·</span> Seasonal
                </p>
                <p className="cv-card-info">Nov 2014 - Nov 2022 </p>
                <p className="cv-card-info">Lillestrøm, Viken, Norway</p>
                <p>
                  Har jobbet på Spillexpo I flere år som frivilig. jeg reiser
                  tilbake vært år for å delta, nå er jeg med som frivilig leder
                  for andre frivilige og hjelper til 110% i de 3 dagene det
                  pågår sånn at Spillexpo er og blir en fantastik opplevelse for
                  så mange som mulig, for både gjester og frivilige.
                </p>
              </div>
            </div>
          </SeeMore>

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
          <div className="utdanning">
            <div className="cv-card">
              <img src={img4} alt="company logo" />
              <div className="cv-card-content">
                <h3>KodeHode</h3>
                <p className="cv-card-under-title">
                  Kurs <span>·</span> Front-End Development
                </p>
                <p className="cv-card-info">Sep 2022</p>
                <p className="cv-card-info">Bergen, Norge</p>
                <p>
                  Et fantastik kurs hvor jeg har lært en hel del om front-end
                  relatert kunnskap og hvordan jobbe i gruppe under prosjekter
                  med andre igjennom github. Var også innom et lite tileggs kurs
                  innen backend hvor jeg Lærte om node.js, SQL, Express og
                  MongoDB.
                </p>
              </div>
            </div>
            <SeeMore>More Content</SeeMore>
          </div>
        </div>
      </div>
    </section>
  );
}
