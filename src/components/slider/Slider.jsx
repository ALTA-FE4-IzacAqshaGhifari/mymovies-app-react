import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css";

export default function Slider() {
  return (
    <div className="SliderContainer">
      <Carousel className="Slider">
        <Carousel.Item interval={5000} className="IsiSlider">
          <img
            className="d-block w-100 SliderImage"
            src="https://c4.wallpaperflare.com/wallpaper/317/900/851/action-drama-2017-4k-wallpaper-preview.jpg"
            alt="First slide"
          />
          <div className="SliderCaption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="IsiSlider">
          <img
            className="d-block w-100 SliderImage"
            src="https://c4.wallpaperflare.com/wallpaper/317/900/851/action-drama-2017-4k-wallpaper-preview.jpg"
            alt="First slide"
          />
          <div className="SliderCaption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="IsiSlider">
          <img
            className="d-block w-100 SliderImage"
            src="https://c4.wallpaperflare.com/wallpaper/317/900/851/action-drama-2017-4k-wallpaper-preview.jpg"
            alt="First slide"
          />
          <div className="SliderCaption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
