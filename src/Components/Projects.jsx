import React from "react";
import "../Styles/Projects.css";
import SeeMore from "./misc/seeMore";
// images
import berserkImage from "../Assets/Images/projects/ParallaxBerserk.jpg";
import securityGenImage from "../Assets/Images/projects/404Security.jpg";
import soundPad from "../Assets/Images/projects/soundPad.jpg";
import youAreAwesome from "../Assets/Images/projects/youareawesome.jpg";
import theDarkGalaxy from "../Assets/Images/projects/thedarkgalaxy.jpg";
import minesweeper from "../Assets/Images/projects/MINE-SWEEPER.png";
import rickAndMorty from "../Assets/Images/projects/rickAndMorty.png";
import FadeInOut from "./misc/scrollInOut";
export default function Projects() {
  return (
    <section id="portfolio">
      <FadeInOut>
        <div className="content-wrapper">
          <h2 className="about-title">Portfolio</h2>
          <div className="news-card">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mine-sweeper-98.netlify.app/"
              className="news-card__card-link"
            >
              Mine-Sweeper
            </a>
            <img src={minesweeper} alt="" className="news-card__image" />
            <div className="news-card__text-wrapper">
              <h2 className="news-card__title">Vanilla JS Minesweeper</h2>
              <div className="news-card__post-date">Feb 27, 2023</div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt">
                  Immerse yourself in my rendition of the classic Minesweeper
                  game, meticulously crafted using vanilla JavaScript. With the
                  primary aim of honing my JavaScript skills, I embarked on this
                  project to gain a deeper understanding of the
                  language.&hellip;
                </p>
                <a
                  href="https://mine-sweeper-98.netlify.app/"
                  className="news-card__read-more"
                >
                  Visit page <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="news-card">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://rick-and-morty-index.netlify.app/"
              className="news-card__card-link"
            >
              Rick & Morty Index
            </a>
            <img src={rickAndMorty} alt="" className="news-card__image" />
            <div className="news-card__text-wrapper">
              <h2 className="news-card__title">Rick & Morty Index</h2>
              <div className="news-card__post-date">Dec 14, 2022 </div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt">
                  In this project, my primary objective was to delve into the
                  fascinating world of APIs and expand my knowledge in their
                  implementation. With a keen interest in the beloved animated
                  series, Rick & Morty,&hellip;
                </p>
                <a
                  href="https://rick-and-morty-index.netlify.app/"
                  className="news-card__read-more"
                >
                  Visit page <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="news-card">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://soundpad.netlify.app/"
              className="news-card__card-link"
            >
              Silly Soundboard
            </a>
            <img src={soundPad} alt="" className="news-card__image" />
            <div className="news-card__text-wrapper">
              <h2 className="news-card__title">Silly Soundboard</h2>
              <div className="news-card__post-date">Nov 23, 2022</div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt">
                  Discover the Silly Soundboard, a delightful one-page
                  experience that invites you to explore a collection of playful
                  sounds. Press buttons or use your keyboard keys (Q-U, A-H,
                  Z-B) to unlock a world of silly sounds and create laughter.
                </p>
                <a
                  href="https://soundpad.netlify.app/"
                  className="news-card__read-more"
                >
                  Visit page <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="news-card">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thedarkgalaxy.netlify.app"
              className="news-card__card-link"
            >
              The Dark Galaxy
            </a>
            <img src={theDarkGalaxy} alt="" className="news-card__image" />
            <div className="news-card__text-wrapper">
              <h2 className="news-card__title">The Dark Galaxy</h2>
              <div className="news-card__post-date">Oct 18, 2022</div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt">
                  Explore my collaborative project, a dark-themed website
                  created by a group of 3 fresh students. With a gloomy
                  October-inspired aesthetic, the site showcases seamless design
                  consistency across all three pages. I contributed to the
                  project by designing both the landing and contact pages,
                  ensuring a cohesive user experience. Immerse yourself in our
                  creation and witness the collective synergy of our team's
                  efforts.&hellip;
                </p>
                <a
                  href="https://thedarkgalaxy.netlify.app"
                  className="news-card__read-more"
                >
                  Visit page <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="news-card">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://404security.netlify.app/"
              className="news-card__card-link"
            >
              404 Security
            </a>
            <img src={securityGenImage} alt="" className="news-card__image" />
            <div className="news-card__text-wrapper">
              <h2 className="news-card__title">404 Security</h2>
              <div className="news-card__post-date">Nov 02, 2022</div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt">
                  Dive into my basic password generator that combines simplicity
                  with security. By leveraging the power of the math.random
                  function, I've crafted a tool that generates unique and
                  unpredictable combinations of letters and numbers. To add a
                  touch of excitement, I've incorporated a library resource that
                  introduces fun effects to the password generation
                  process&hellip;
                </p>
                <a
                  href="https://404security.netlify.app/"
                  className="news-card__read-more"
                >
                  Visit page <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeInOut>
      <FadeInOut>
        <section className="seeMore-projects">
          <SeeMore>
            <div className="seeMore-wrapper">
              <div className="news-card">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://youareawesome.netlify.app/#"
                  className="news-card__card-link"
                >
                  You Are Awesome!
                </a>
                <img src={youAreAwesome} alt="" className="news-card__image" />
                <div className="news-card__text-wrapper">
                  <h2 className="news-card__title">You Are Awesome!</h2>
                  <div className="news-card__post-date">Sep 29, 2022</div>
                  <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">
                      Experience my motivational project, crafted while
                      exploring CSS animations and keyframes. This captivating
                      creation aims to bring a smile to every visitor's face.
                      With the sole purpose of spreading joy and positivity, the
                      project features interactive elements and charming
                      animations that are sure to brighten your day.&hellip;
                    </p>
                    <a
                      href="https://youareawesome.netlify.app/#"
                      className="news-card__read-more"
                    >
                      Visit page <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="news-card">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://parallax-berserk.netlify.app/"
                  className="news-card__card-link"
                >
                  Parallax Berserk
                </a>
                <img src={berserkImage} alt="" className="news-card__image" />
                <div className="news-card__text-wrapper">
                  <h2 className="news-card__title">Parallax Berserk</h2>
                  <div className="news-card__post-date">Sep 23, 2022</div>
                  <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">
                      Discover the seamless scrolling and dynamic depth that the
                      Parallax effect brings, complemented by the enthralling
                      Berserk theme, to create a complete and immersive visual
                      journey. Indulge in the fusion of artistry and
                      interactivity as you delve into this unique and
                      captivating project.&hellip;
                    </p>
                    <a
                      href="https://parallax-berserk.netlify.app/"
                      className="news-card__read-more"
                    >
                      Visit page <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SeeMore>
        </section>
      </FadeInOut>
    </section>
  );
}
