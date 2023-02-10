import React, { useState, useEffect } from "react";
import "../Styles/About.css";
import FadeInOut from "./misc/scrollInOut";
export default function About() {
  const [age, setAge] = useState(0);

  //update Age so i don't have to update it every year :)
  const today = new Date();
  const birthdate = new Date("August 22, 1993");
  const diffTime = today - birthdate;
  const ageInDays = diffTime / (1000 * 60 * 60 * 24);
  const ageInYears = Math.floor(ageInDays / 365);

  useEffect(() => {
    setAge(ageInYears);
  }, [ageInYears]);

  return (
    <section id="about">
      <div className="about-container">
        <FadeInOut>
          <h2 className="about-title">Om Meg</h2>
          <div className="pitch">
            <p>
              Heisann, Mitt navn er Vetle jeg er {age} og holder for tiden på
              med å studere front-end utvikling for å kunne få meg en IT
              relatert, spennende og kreativ Jobb. Som kan bidra til å styrke
              både interessen min og kunnskapen min innen yrket.
            </p>
            <p>
              Interessen min for webutvikling begynte med brukerprofiler på
              nettsider som hadde muligheter til å bruke CSS og BBcoder til å
              gjøre profilen mer unike. Interessen min har bare vokst siden den
              gang siden jeg alltid elsker å være kreative og jobbe med visuelt
              arbeid som fotografering, design og lignende. På fritiden liker
              jeg å spille dataspill med venner på nett og se serier.
            </p>
            <p>
              Drømen er å bli en fullstack utvikler som kan delta i støre
              prosjekter som andre kan ta nytte av, som jeg kan være stolt av å
              ha vært med på.
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
