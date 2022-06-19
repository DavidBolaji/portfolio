import React from "react";
import Icon from "../icon/Icon";
import "./Tab.css";

const Tab = (props) => {
  return (
    <div className="tab">
      <div className="num">
        <p>{props.num}</p>
      </div>
      <div className="text">
        <h2>{props.text}</h2>
      </div>
      <div className="icon">
        <Icon />
      </div>
    </div>
  );
};

export default Tab;
