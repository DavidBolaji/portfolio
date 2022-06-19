import React from "react";
import Icon from "../../icon/Icon";
import "./ProjCard.css";

const ProjCard = (props) => {
  return (
    <div className="proj-card">
      <hr
        style={{
          borderColor: "#000",
          padding: 0,
          margin: 0,
        }}
      />
      <div className="proj-card-cont">
        <div className="proj-card-text">
          <h2>Educational Landing Page Design</h2>
          <p>Web Landing Page</p>
        </div>
        <div className="proj-card-icon">
          <Icon className="proj-card-icon-icon" />
        </div>
      </div>
      <div className="proj-card-img">
        <div className="proj-card-img-cont">
          <img src={props.icon} alt="Project" />
        </div>
      </div>
    </div>
  );
};

export default ProjCard;
