import React, { Component } from "react";
import "./MoviesCard.css";

import { Link } from "react-router-dom";

export default class MoviesCard extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="kartuMovie">
        <div className="isiKartu">
          <div
            className="imageMovie"
            style={{
              backgroundImage: `url(${this.props.image})`,
            }}
          ></div>
          <div className="OverFlowHandler movieTitle">{this.props.title}</div>

          <Link
            to={this.props.link}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="btn btn-primary DetailButton">Detail</div>
          </Link>
        </div>
      </div>
    );
  }
}
