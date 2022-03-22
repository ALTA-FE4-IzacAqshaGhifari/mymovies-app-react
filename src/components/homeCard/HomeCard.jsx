import React, { Component } from "react";
import "./HomeCard.css";
import { Link } from "react-router-dom";

export default class HomeCard extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="KontenKartu">
        <p>{this.props.konten}</p>
        <div className="ButtonArrow">
          <div>
            <Link
              to={this.props.link}
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
}
