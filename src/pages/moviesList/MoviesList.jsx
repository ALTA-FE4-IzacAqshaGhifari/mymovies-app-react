import React, { Component } from "react";
import MoviesCard from "../../components/moviesCard/MoviesCard";
import "./MoviesList.css";

export default class MoviesList extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="pageLayout">
        <div className="listContent">
          <MoviesCard link="/details" />
        </div>
      </div>
    );
  }
}
