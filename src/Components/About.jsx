import React from "react";
import "../Styles/About.css";
import FadeInOut from "./misc/scrollInOut";
export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <FadeInOut>
          <h2 className="about-title">Om Meg</h2>
          <div className="pitch">
            <p>
              For tiden holder jeg på med å utdanne meg som front-end utvikler.
              Som en utvikler til jeg bruke min kreativitet og faglig tyngde
              kunne bistå bedrifter innen ulike font-end oppdrag.
            </p>
            <p>
              Jeg har stor interesse for faget og interessen strekker seg
              tilbake til da jeg på egenhånd lærte meg å bruke CSS og bbcoder.
              Som person er jeg svært opptatt av det visuelle og vil i samarbeid
              med oppdragsgiver kunne tilby den beste løsningen, både visuelt og
              funksjonelt.
            </p>
            <p>
              Mitt visuelle talent utvikler jeg hele tiden gjennom fotografering
              og redigering. Kikk gjerne innom resten av portfolioen og bli
              kjent med verktøyene jeg behersker og hva jeg kan tilby.
            </p>
            <p>
              Ta gjerne kontakt med meg om noe av det jeg kan bidra med for deg
              om du er interesset og du vil møte en hyggelig, løsningsorientert,
              kreativ og pliktoppfyllende Frontender.
            </p>
          </div>
        </FadeInOut>
        <FadeInOut>
          <div className="tag-container">
            <h3 className="tag-title">Verktøy</h3>
            <div className="tag-content">
              <div className="tag tag-tool">#Visual Studio Code</div>
              <div className="tag tag-tool">#Adobe PhotoShop</div>
              <div className="tag tag-tool">#Adobe Illustrator</div>
              <div className="tag tag-tool">#Figma</div>
              <div className="tag tag-tool">#Google</div>
            </div>

            <h3 className="tag-title">Ferdigheter</h3>
            <div className="tag-content">
              <div className="tag tag-skill">#HTML5</div>
              <div className="tag tag-skill">#CSS</div>
              <div className="tag tag-skill">#SCSS</div>
              <div className="tag tag-skill">#Javascript</div>
              <div className="tag tag-skill">#UI/UX</div>
              <div className="tag tag-skill">#React</div>
              <div className="tag tag-skill">#Design</div>
              <div className="tag tag-skill">#GitHub</div>
              <div className="tag tag-skill">#Bootstrap</div>
            </div>

            <h3 className="tag-title">utforsker</h3>
            <div className="tag-content">
              <div className="tag tag-learning">#Rest-Api</div>
              <div className="tag tag-learning">#Tailwind</div>
              <div className="tag tag-learning">#MongoDB</div>
              <div className="tag tag-learning">#Node.js/Express</div>
              <div className="tag tag-learning">#Typescript</div>
            </div>
          </div>
        </FadeInOut>
      </div>
    </section>
  );
}
