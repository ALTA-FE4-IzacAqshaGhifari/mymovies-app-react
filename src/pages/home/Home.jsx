import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import "./Home.css";
import Introduction from "../../components/introduction/Introduction";
import Slider from "../../components/slider/Slider";
import Title from "../../components/title/Title";
import HomeCard from "../../components/homeCard/HomeCard";
import LoadSpin from "../../components/loadSpin/LoadSpin";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1}`
      )
      .then((response) => {
        setMovies(response.data.results.slice(0, 5));
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  let result;
  if (isReady) {
    result = (
      <>
        <Introduction text="Movies List, Movies details, and Your Favorite List!!" />
        <div className="ContainerIsi">
          <Title titleText={"Featured Today"} />
          <Slider moviesData={movies} />
          <Title titleText={"Movies List"} />
          <HomeCard
            konten="List of Popular MOVIES!! check it out"
            link="/movies-list"
          />
          <Title titleText={"Favorites"} />
          <HomeCard
            konten="Collection of your Favorite Movies"
            link="/favorite"
          />
        </div>
      </>
    );
  } else {
    result = <LoadSpin />;
  }

  return <div className="HomeBackground">{result}</div>;
}
