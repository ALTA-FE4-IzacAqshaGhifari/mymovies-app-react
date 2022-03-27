import React from "react";
import { Carousel } from "react-bootstrap";
import "./VideoCard.css";

export default function VideoCard(props) {
  let videoCollection = props.videos;

  return (
    <div className="carouselContainer">
      <Carousel className="carouselDetail" interval={null}>
        {videoCollection.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <div className="videoContainer">
                <iframe
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="video"
                  className="carouselVideos"
                  allowFullScreen
                ></iframe>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
