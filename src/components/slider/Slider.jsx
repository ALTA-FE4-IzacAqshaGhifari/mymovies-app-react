import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css";

import { useNavigate } from "react-router-dom";

export default function Slider(props) {
  const navigate = useNavigate();
  const featuredData = props.moviesData;

  return (
    <div className="SliderContainer">
      <Carousel className="Slider">
        {featuredData.map((item) => {
          return (
            <Carousel.Item interval={5000} className="IsiSlider" key={item.id}>
              <div
                className="SliderImage"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`,
                }}
              ></div>

              <div className="SliderCaption">
                <h3>{item.title}</h3>
                <div
                  className="btn btn-primary DetailButton"
                  onClick={() => {
                    navigate(`/detail/${item.id}`);
                  }}
                >
                  Detail
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
