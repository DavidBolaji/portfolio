import React from "react";
import Container from "../container/Container";
import Tab from "../tab/Tab";
import "./Services.css";

const Services = () => {
  return (
    <Container className="services">
      <div className="service-text">
        <h2>
          Offer |<br /> Services
        </h2>
        <p>
          I help ambitious business like yours generate more profits by by
          building applications with outstanding features that will help drive
          sales.
        </p>
      </div>
      <div className="service-card">
        <Tab num="01/" text="Web UI/UX Design" />
        <Tab num="02/" text="Mobile App UI/UX Design" />
        <Tab num="03/" text="Dashboard & Saas Design" />
      </div>
    </Container>
  );
};

export default Services;
