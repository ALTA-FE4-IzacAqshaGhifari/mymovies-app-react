import React from "react";
import "./MoviesCard.css";

export default function MoviesCard(props) {
  return (
    <div className="kartuMovie">
      <div className="isiKartu">
        <div
          className="imageMovie"
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        ></div>
        <div className="OverFlowHandler movieTitle">{props.title}</div>

        <div className="btn btn-primary DetailButton" onClick={props.onClick}>
          Detail
        </div>
      </div>
    </div>
  );
}
