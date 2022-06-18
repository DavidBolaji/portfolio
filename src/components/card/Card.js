import React from "react";
import "./Card.css";
import { RiPencilRulerLine } from "react-icons/ri";

const Card = (props) => {
  return (
    <div className="card">
      <div className="pic">
        <RiPencilRulerLine />
      </div>
      <div className="text">
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default Card;
