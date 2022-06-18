import React from "react";
import Card from "../card/Card";
import Container from "../container/Container";
import "./Services.css";

const Services = () => {
  return (
    <Container className="services">
      <div className="service-text">
        <h2>
          Offer |<br /> Services
        </h2>
        <p>
          Hello everyone! Here is the new exploration of the Pertoo - Personal
          portfolio website. What do you think? Don't forget to press (L) if you
          like it and feel free to comment.
        </p>
      </div>
      <div className="service-card">
        <div>
          <Card name="Front end Web Design" />
          <Card name="Back end Web Design" />
        </div>
        <div>
          <Card name="Front end Web Design" />
          <Card name="Back end Web Design" />
        </div>
      </div>
    </Container>
  );
};

export default Services;
