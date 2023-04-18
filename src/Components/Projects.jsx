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
              <h2 className="news-card__title">Mine-Sweeper</h2>
              <div className="news-card__post-date">Feb 27, 2023</div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt">
                  This is my take on the classic minesweeper game. however its
                  made with vanilla Javascript for practice purposes. It was a
                  lot of fun to make and play around with and sharing it with
                  others to get feedback so I could update it after user
                  needs&hellip;
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
                  the main focus of this project was learning how to use an API,
                  so I tried to use the majority of the data that comes from the
                  API i used&hellip;
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
              Sound Pad
            </a>
            <img src={soundPad} alt="" className="news-card__image" />
            <div className="news-card__text-wrapper">
              <h2 className="news-card__title">Sound Pad</h2>
              <div className="news-card__post-date">Nov 23, 2022</div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt">
                  Simple one pager with a set of buttons you can press for a
                  funny sound, as well as pressing the keys on your
                  keyboard&hellip;
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
                  This was a group project, we had around October hench the dark
                  and gloomy theme of the site my roll in the project went from
                  only making landing page to making the contact page as well as
                  making all pages have the same consistency throughout all
                  pages&hellip;
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
                  My attempt on making a basic random password generator. This
                  isn't 100% random and not really secure either since it only
                  gives you a set of letters numbers and symbols in upper and
                  lower case.
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
                      Motivation is important so I made a motivational webpage
                      that tried to give you a smile&hellip;
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
                      This is a simple practice website and on how to utilizing
                      the Parallax style and added a topic of interest &hellip;
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
