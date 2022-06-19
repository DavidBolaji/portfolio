import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="pic">{props.icon}</div>
      <div className="text">
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default Card;
