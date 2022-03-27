import React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import LoadSpin from "../../components/loadSpin/LoadSpin";
import Introduction from "../../components/introduction/Introduction";
import "./Detail.css";
import VideoCard from "../../components/videoCard/VideoCard";

const Detail = () => {
  let params = useParams();

  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(
        `http://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
      )
      .then((response) => {
        setDetail(response.data);
        setGenres(response.data.genres);
        setVideos(response.data.videos.results);
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  let result;
  if (isReady) {
    result = (
      <div className="detailLayout">
        <div
          className="backdrop"
          style={{
            backgroundImage: `url(${
              detail.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${detail.backdrop_path}`
                : `https://via.placeholder.com/400x400?text=Image+Not+available`
            })`,
          }}
        >
          <div className="containerDetail">
            <div
              className="posterDetail"
              style={{
                backgroundImage: `url(${
                  detail.poster_path
                    ? `https://image.tmdb.org/t/p/w500${detail.poster_path}`
                    : `https://via.placeholder.com/400x400?text=Image+Not+available`
                })`,
              }}
            ></div>
            <div className="isiDetail">
              <h1 className="detailTitle">{detail.title}</h1>
              <div className="ratingBintang">
                <h2>
                  <i className="fa-solid fa-star"></i>{" "}
                  {detail.vote_average ? detail.vote_average / 2 : "-"} / 5
                </h2>
              </div>
              <div className="containerGenre">
                {genres.map((item) => {
                  return (
                    <div key={item.id} className="genre">
                      {item.name}
                    </div>
                  );
                })}
              </div>
              <p>release date: {detail.release_date}</p>
              <p>{detail.overview}</p>
            </div>
          </div>
        </div>
        <Introduction text="Movies TRAILERS!!" />
        <VideoCard videos={videos} />
      </div>
    );
  } else {
    result = <LoadSpin />;
  }

  return result;
};

export default Detail;
