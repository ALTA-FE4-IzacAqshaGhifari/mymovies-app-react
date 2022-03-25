import React from "react";
import "./Introduction.css";

export default function Introduction(props) {
  return (
    <div className="Introduction">
      <h1 className="H1Introduction">{props.text}</h1>
    </div>
  );
}
