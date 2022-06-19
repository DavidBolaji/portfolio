import React from "react";
import Container from "../container/Container";
import Ecom from "../../assets/images/e-coomerce.png";
import Calc from "../../assets/images/calculator.png";
import ProjCard from "./card/ProjCard";
import "./Projects.css";

const Project = () => {
  return (
    <Container className="proj">
      <div className="proj-one">
        <h1>Latest Projects</h1>
        <ProjCard icon={Ecom} />
      </div>
      <div className="proj-two">
        <ProjCard icon={Calc} />
      </div>
      <div className="proj-three">
        <ProjCard icon={Calc} />
      </div>
    </Container>
  );
};

export default Project;
