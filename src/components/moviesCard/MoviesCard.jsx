import React from "react";
import "./MoviesCard.css";

import { Link } from "react-router-dom";
// import { withRouter } from "../../utils/navigation";

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

        <Link
          to={props.link}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="btn btn-primary DetailButton">Detail</div>
        </Link>
      </div>
    </div>
  );
}
