import React from "react";
import "./Hero.css";
import Container from "../container/Container";
import David from "../../assets/images/dav.png";
import { SiGithub } from "react-icons/si";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <Container className="hero">
      <div className="hero-cont">
        <h1>I have web Development Experience</h1>
        <p>
          Hi! my name is David and i am a web Developer. My goal is to create
          outstanding, High performance and scalable applicationsis what am all
          about
        </p>
        <div>
          <button>let's Talk</button>
          <button>Download cv</button>
        </div>
      </div>
      <div className="hero-img">
        <div className="hexagon-mine">
          <div className="hexagon"></div>
          <div className="hex-img">
            <img src={David} alt="David Ologunleko" />
          </div>
        </div>
        <div className="close"></div>
      </div>
      <div className="social-media">
        <div className="link whatsapp">
          <AiOutlineWhatsApp />
        </div>
        <div className="link linked-in">
          <FaLinkedinIn />
        </div>
        <div className="link github">
          <SiGithub />
        </div>
      </div>
    </Container>
  );
};

export default Hero;