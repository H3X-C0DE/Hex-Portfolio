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
                  <p className="cv-card-p">
                    Et fantastisk kurs som har gitt meg mye kunnskap innen
                    front-end og lært meg hvordan man effektivt jobber i
                    gruppeprosjekter gjennom bruk av GitHub. I tillegg fikk jeg
                    muligheten til å delta på et tilleggs introduksjons kurs
                    innen backend hvor jeg lærte om node.js, SQL, Express og
                    MongoDB.
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
                    <p className="cv-card-p">
                      På dette kurset lærte jeg grunnleggende design, HTML5,
                      CSS, Javascript, React, Rest-API, WordPress og typografi,
                      for å nevne noen områder.
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
                      <p className="cv-card-p">
                        Jeg valgte å ta opp tredje året mitt på videregående
                        skole for å forbedre karakterene mine samtidig som jeg
                        kunne jobbe med noe jeg var interessert i. I løpet av
                        denne perioden fokuserte jeg mye på design, spesielt
                        innenfor produktemballasje og plakater. I tillegg lærte
                        jeg videoredigering og forbedret mine ferdigheter innen
                        bildebehandling.
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
                      <p className="cv-card-p">
                        Da jeg gikk på folkehøyskolen, fikk jeg muligheten til å
                        lære om ulike emner, blant annet fargeteori,
                        komposisjon, typografi, fotografering og andre former
                        for multimediaproduksjon. I tillegg var det fokus på
                        samarbeid med andre og utvikling av sosiale ferdigheter.
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
                <img src={img3} alt="Nova spektrum logo" />
                <div className="cv-card-content">
                  <h3>Frivilig</h3>
                  <p className="cv-card-under-title">
                    NOVA Spektrum <span>·</span> Sesong
                  </p>
                  <p className="cv-card-info">Nov 2014 - Nov 2022 </p>
                  <p className="cv-card-info">Lillestrøm, Viken, Norway</p>
                  <p className="cv-card-p">
                    Jeg har hatt gleden av å jobbe som frivillig på Spillexpo i
                    flere år. Hvert år reiser jeg tilbake for å delta og de
                    siste årene har jeg hatt rollen som frivillig koordinator.
                    Denne rollen innebærer å støtte og avlaste ledelsen, samt
                    sikre at nye frivillige får en god opplevelse. Målet er å
                    gjøre Spillexpo til en fantastisk opplevelse for så mange
                    som mulig, både gjester og frivillige.
                  </p>
                </div>
              </div>
            </FadeInOut>
            <div className="cv-card">
              <img src={img7} alt="Bergenfest logo" />
              <div className="cv-card-content">
                <h3>Frivilig</h3>
                <p className="cv-card-under-title">
                  Bergenfest <span>·</span> Sesong
                </p>
                <p className="cv-card-info">Jun 2022 - Jun 2022 </p>
                <p className="cv-card-info">Bergen, Norway</p>
                <p className="cv-card-p">
                  Jeg har jobbe som frivillig på Bergenfest, og hovedsakelig var
                  mitt ansvar å passe på utstyret til andre frivillige. Jeg
                  sørget også for at de som var på vakt fikk kaffe og annet når
                  de hadde pauser. I tillegg ble jeg også sendt til andre
                  stasjoner når det var behov for ekstra hjelp.
                </p>
              </div>
            </div>
            <FadeInOut>
              <SeeMore>
                <FadeInOut>
                  <div className="cv-card">
                    <img src={img1} alt="EC-play logo" />
                    <div className="cv-card-content">
                      <h3>Junior front-end developer</h3>
                      <p className="cv-card-under-title">
                        EC-Play <span>·</span> Sesong
                      </p>
                      <p className="cv-card-info">
                        Jun 2021 - Aug 2021 · 3 mos
                      </p>
                      <p className="cv-card-info">Bergen, Norge</p>
                      <p className="cv-card-p">
                        Jeg hadde en sommerjobb der jeg jobbet med å lage
                        komponenter til deres webapp i TypeScript. I tillegg
                        fikk jeg også ansvaret med å designe sider som ennå ikke
                        var utviklet, som for eksempel en landingsside for
                        e-postbekreftelse og lignende.
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
