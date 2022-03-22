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
              backgroundImage:
                "url(https://c4.wallpaperflare.com/wallpaper/317/900/851/action-drama-2017-4k-wallpaper-preview.jpg)",
            }}
          ></div>
          <p className="movieTitle">Dunkirk</p>
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
