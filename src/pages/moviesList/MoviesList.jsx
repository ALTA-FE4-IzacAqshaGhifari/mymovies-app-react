import React, { Component } from "react";
import axios from "axios";

import "./MoviesList.css";
import MoviesCard from "../../components/moviesCard/MoviesCard";
import LoadSpin from "../../components/loadSpin/LoadSpin";

export default class MoviesList extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      isReady: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${this.state.page}`
      )
      .then((response) => {
        this.setState({ data: response.data.results, isReady: true });
        // this.setState({ isReady: false });
        console.log(response.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }

  render() {
    const kondisi = this.state.isReady;
    let result;
    if (kondisi) {
      result = (
        <div className="listContent">
          {this.state.data.map((item) => {
            return (
              <div key={item.id}>
                <MoviesCard
                  link="/details"
                  title={item.title}
                  image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                />
              </div>
            );
          })}
        </div>
      );
    } else {
      result = <LoadSpin />;
    }

    return <div className="PageLayout">{result}</div>;
  }
}
