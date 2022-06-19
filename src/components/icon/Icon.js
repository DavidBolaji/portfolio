import React from "react";
import "./Icon.css";
import { BsArrowUpRight } from "react-icons/bs";

const Icon = (props) => {
  return (
    <div className={`bg ${props.className}`} {...props}>
      <BsArrowUpRight />
    </div>
  );
};

export default Icon;
