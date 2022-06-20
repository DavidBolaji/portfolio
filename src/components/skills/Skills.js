import React from "react";
import Container from "../container/Container";
import Tilt from "react-parallax-tilt";
import { SiJavascript, SiSemanticuireact, SiSass } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import "./Skills.css";
import Experience from "../experience/Experience";

const Skills = () => {
  return (
    <Container className="skills">
      <div className="skills-cont" data-aos="fade-in" data-aos-duration="1500">
        <div className="skills-text">
          <h2>
            Skills &<br /> Experience
          </h2>
          <p>
            🦋A specialist in Web design. My passion is to build awesome web
            applications that leave my clients amazed, while incoporating modern
            technology.
            <br />
            ⭐⭐⭐⭐⭐
          </p>
        </div>
        <div className="skills-skill">
          <h4 data-aos="fade-in" data-aos-duration="1500">
            skills
          </h4>
          <div className="skill-holder">
            <div className="skills-card">
              <Tilt>
                <div
                  className="skill-card"
                  data-aos="fade-in"
                  data-aos-duration="1500"
                >
                  <div className="skill-img">
                    <SiJavascript style={{ fontSize: 40, color: "#f5de19" }} />
                  </div>
                  <div className="skill-note">Javascript</div>
                </div>
              </Tilt>
              <Tilt>
                <div
                  className="skill-card"
                  data-aos="fade-in"
                  data-aos-duration="1500"
                >
                  <div className="skill-img">
                    <ImHtmlFive style={{ fontSize: 40, color: "#e44c23" }} />
                  </div>
                  <div className="skill-note">HTML</div>
                </div>
              </Tilt>
              <Tilt>
                <div
                  className="skill-card"
                  data-aos="fade-in"
                  data-aos-duration="1500"
                >
                  <div className="skill-img">
                    <IoLogoCss3 style={{ fontSize: 40, color: "#2b64f3" }} />
                  </div>
                  <div className="skill-note">CSS</div>
                </div>
              </Tilt>
            </div>
            <div className="skills-card">
              <Tilt>
                <div
                  className="skill-card"
                  data-aos="fade-in"
                  data-aos-duration="1500"
                >
                  <div className="skill-img">
                    <SiSemanticuireact
                      style={{ fontSize: 40, color: "#54d4fc" }}
                    />
                  </div>
                  <div className="skill-note">React</div>
                </div>
              </Tilt>
              <Tilt>
                <div
                  className="skill-card"
                  data-aos="fade-in"
                  data-aos-duration="1500"
                >
                  <div className="skill-img">
                    <IoLogoNodejs
                      style={{ fontSize: 40, color: "rgb(70,135,69)" }}
                    />
                  </div>
                  <div className="skill-note">Node</div>
                </div>
              </Tilt>
              <Tilt>
                <div
                  className="skill-card"
                  data-aos="fade-in"
                  data-aos-duration="1500"
                >
                  <div className="skill-img">
                    <SiSass style={{ fontSize: 40, color: "#d46c9c" }} />
                  </div>
                  <div className="skill-note">Sass</div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-card2">
        <Experience />
      </div>
    </Container>
  );
};

export default Skills;
