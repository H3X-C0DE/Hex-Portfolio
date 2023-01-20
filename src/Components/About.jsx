import React from "react";
import "../Assets/Styles/About.css";
export default function About() {
  return (
    <section id="top-about">
      <div className="about-container">
        <h2 className="about-title">About</h2>
        <div className="pitch">
          <p>
            Heisann! mitt navn er Vetle. Jeg holder for tiden på med å studere
            front-end utvikling for å kunne få meg en IT relatert jobb I et
            spennende og kreativ Jobb.
          </p>
          <p>
            Interessen min for webutvikling begynte med brukerprofiler på
            nettsider som hadde muligheter til å bruke CSS og BBcoder til å
            gjøre profilen mer unike. Interessen min har bare vokst siden den
            gang. Har alltid elsket å være kreative og jobbe med visuelt arbeid
            som photography, design, og lignende. På fritiden liker jeg å spille
            dataspill med venner på nett og se serier.
          </p>
          <div className="tag-container">
            <h3 className="tag-title">Tools of trade</h3>
            <div className="tag-content">
              <div className="tag tag-teal">#Visual Studio Code</div>
              <div className="tag tag-teal">#Adobe PhotoShop</div>
              <div className="tag tag-teal">#Adobe Illustrator</div>
              <div className="tag tag-teal">#Figma</div>
              <div className="tag tag-teal">#Canon_Camera</div>
            </div>

            <h3 className="tag-title">Skills</h3>
            <div className="tag-content">
              <div className="tag tag-purple">#HTML5</div>
              <div className="tag tag-purple">#CSS</div>
              <div className="tag tag-purple">#SCSS</div>
              <div className="tag tag-purple">#UI & UX</div>
              <div className="tag tag-purple">#Web Design</div>
              <div className="tag tag-purple">#Javascript</div>
              <div className="tag tag-purple">#React</div>
            </div>

            <h3 className="tag-title">Learning</h3>
            <div className="tag-content">
              {/* <div className="tag tag-pink">#HTML5</div>
              <div className="tag tag-pink">#CSS</div> */}
              {/* <div className="tag tag-pink">#Javascript</div> */}
              <div className="tag tag-pink">#Basic Human Decency</div>
              <div className="tag tag-pink">#Rest Api</div>
              <div className="tag tag-pink">Tailwind</div>
              <div className="tag tag-pink">MongoDB</div>
              <div className="tag tag-pink">Node.js/Express</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
