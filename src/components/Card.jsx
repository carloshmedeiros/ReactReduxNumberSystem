import "./Card.css";
import React from "react";

function getColor(props) {
  if (props.one) return "one";
  if (props.two) return "two";
  if (props.three) return "three";
  if (props.four) return "four";
}

export default (props) => {
  return (
    <div className={`Card ${getColor(props)}`}>
      <div className="Header">
        <span className="Title">{props.title}</span>
      </div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
