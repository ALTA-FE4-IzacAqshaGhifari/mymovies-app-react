import React from "react";
import axios from "axios";

import "./MoviesList.css";
import MoviesCard from "../../components/moviesCard/MoviesCard";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MoviesList = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        setMovies(response.data.results);
        setPage(page + 1);
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  const handleClick = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        setMovies(movies.concat(response.data.results));
        setPage(page + 1);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  let result;
  if (isReady) {
    result = (
      <>
        <div className="listContent">
          {movies.map((item) => {
            return (
              <div key={item.id}>
                <MoviesCard
                  title={item.title}
                  image={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                      : `https://via.placeholder.com/400x400?text=Image+Not+available`
                  }
                  onClick={() => {
                    navigate(`/detail/${item.id}`);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div
          className="btn btn-primary buttonMore"
          onClick={() => handleClick()}
        >
          View More
        </div>
      </>
    );
  } else {
    result = <LoadSpin />;
  }

  return <div className="PageLayout">{result}</div>;
};
export default MoviesList;
