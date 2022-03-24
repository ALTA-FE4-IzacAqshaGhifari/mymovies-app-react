import React from "react";
import "./HomeCard.css";
import { Link } from "react-router-dom";

export default function HomeCard(props) {
  return (
    <div className="KontenKartu">
      <p>{props.konten}</p>
      <div className="ButtonArrow">
        <div>
          <Link
            to={props.link}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="btn btn-primary arrowButton">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
