import React from "react";
import "../Styles/Cv.css";
// import placeholderImg from "../Assets/Images/me.jpg";
import img1 from "../Assets/Images/ecPlay.jpg";
import img2 from "../Assets/Images/noroff.jpg";
import img3 from "../Assets/Images/nova.jpg";
import img4 from "../Assets/Images/jobLoop.jpg";
import img5 from "../Assets/Images/sharpsborg.jpg";
import img6 from "../Assets/Images/vgs.jpg";
import img7 from "../Assets/Images/bergenfest.jpg";
import SeeMore from "./misc/seeMore";
import FadeInOut from "./misc/scrollInOut";

export default function Cv() {
  return (
    <section id="cv">
      <div className="cv">
        <div className="cv-container">
          <FadeInOut>
            <h2 className="about-title">Curriculum Vitae</h2>
            <h2 className="cv-title">Utdanning</h2>
          </FadeInOut>
          <div className="utdanning">
            <FadeInOut>
              <div className="cv-card">
                <img src={img4} alt="Kodehode logo" />
                <div className="cv-card-content">
                  <h3>KodeHode</h3>
                  <p className="cv-card-under-title">
                    Kurs <span>·</span> Front-End Development
                  </p>
                  <p className="cv-card-info">Sep 2022 - DD</p>
                  <p className="cv-card-info">Bergen, Norge</p>
                  <p>
                    Et fantastik kurs hvor jeg har lært mye om front-end
                    relatert kunnskap og hvordan jobbe i gruppe under prosjekter
                    med andre igjennom github. Var også innom et lite tileggs
                    kurs innen backend hvor jeg lærte om node.js, SQL, Express
                    og MongoDB.
                  </p>
                </div>
              </div>
            </FadeInOut>
            <FadeInOut>
              <div className="utdanning">
                <div className="cv-card">
                  <img src={img2} alt="Noroff logo" />
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

              <SeeMore>
                <FadeInOut>
                  <div className="cv-card">
                    <img src={img6} alt="Årstad vgs logo" />
                    <div className="cv-card-content">
                      <h3>Årstad Videregående</h3>
                      <p className="cv-card-under-title">
                        Videregående <span>·</span> Media og kommunikasjon
                      </p>
                      <p className="cv-card-info">Aug 2015 - Jun 2017</p>
                      <p className="cv-card-info">Bergen, Hordaland, Norge</p>
                      <p>
                        tok opp 3rd året mitt på VGS for å fikse karakterer mens
                        jeg gjorde noe jeg var interesert i samtidig. Så ble mye
                        design innen f.eks product embalasje, plakat også fikk
                        jeg lært meg videoredigering samt forbedret meg innen
                        bilde redigering.
                      </p>
                    </div>
                  </div>
                  <div className="cv-card">
                    <img src={img5} alt="skjeberg logo" />
                    <div className="cv-card-content">
                      <h3>Skjeberg Folkehøyskole</h3>
                      <p className="cv-card-under-title">
                        Folkehøyskole <span>·</span> Grafisk design
                      </p>
                      <p className="cv-card-info">Aug 2011 - Mai 2012</p>
                      <p className="cv-card-info">
                        Sarpsborg, Østlandet, Norge
                      </p>
                      <p>
                        Lærte blant annet farge teori, komposison, Typography,
                        Photograpy og annet mix media og ikke minst samarbeid
                        med andre.
                      </p>
                    </div>
                  </div>
                </FadeInOut>
              </SeeMore>
            </FadeInOut>
            <FadeInOut>
              <h2 className="cv-title">Erfaring</h2>
            </FadeInOut>

            <FadeInOut>
              <div className="cv-card">
                <img src={img1} alt="EC-play logo" />
                <div className="cv-card-content">
                  <h3>Junior front-end developer</h3>
                  <p className="cv-card-under-title">
                    EC-Play <span>·</span> Sesong
                  </p>
                  <p className="cv-card-info">Jun 2021 - Aug 2021 · 3 mos</p>
                  <p className="cv-card-info">Bergen, Norge</p>
                  <p>
                    Jeg lagde componenter til web-Appen deres i typescript og
                    jobbet med design til sider som ikke var laget enda som for
                    ekempel email verification landings side og lignende.
                  </p>
                </div>
              </div>
            </FadeInOut>
            <FadeInOut>
              <div className="cv-card">
                <img src={img3} alt="Nova spektrum logo" />
                <div className="cv-card-content">
                  <h3>Frivilig</h3>
                  <p className="cv-card-under-title">
                    NOVA Spektrum <span>·</span> Sesong
                  </p>
                  <p className="cv-card-info">Nov 2014 - Nov 2022 </p>
                  <p className="cv-card-info">Lillestrøm, Viken, Norway</p>
                  <p>
                    Har jobbet på Spillexpo I flere år som frivilig. Jeg reiser
                    tilbake vært år for å delta, nå er jeg med som frivilig
                    leder for andre frivilige og hjelper til 110% i de 3 dagene
                    det pågår sånn at Spillexpo er og blir en fantastik
                    opplevelse for så mange som mulig, for både gjester og
                    frivilige.
                  </p>
                </div>
              </div>

              <SeeMore>
                <FadeInOut>
                  <div className="cv-card">
                    <img src={img7} alt="Bergenfest logo" />
                    <div className="cv-card-content">
                      <h3>Frivilig</h3>
                      <p className="cv-card-under-title">
                        Bergenfest <span>·</span> Sesong
                      </p>
                      <p className="cv-card-info">Jun 2022 - Jun 2022 </p>
                      <p className="cv-card-info">Bergen, Norway</p>
                      <p>
                        Jobbet som frivillig på Bergenfest og var for det meste
                        å passet på utstyr til andre frivillige og passet på at
                        de som var på vakt fikk kaffe og sånt når de kom på
                        pause, men ble også sendt på andre stasjoner hvis det
                        var mangel på folk siden jeg var det for å hjelpe til.
                      </p>
                    </div>
                  </div>
                </FadeInOut>
              </SeeMore>
            </FadeInOut>
          </div>
        </div>
      </div>
    </section>
  );
}
