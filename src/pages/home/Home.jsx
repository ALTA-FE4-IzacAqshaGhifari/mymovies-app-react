import React from "react";
import "./Home.css";

import Introduction from "../../components/introduction/Introduction";
import Slider from "../../components/slider/Slider";
import Title from "../../components/title/Title";
import HomeCard from "../../components/homeCard/HomeCard";

export default function Home() {
  return (
    <div className="HomeBackground">
      <Introduction text="Movies List, Movies details, and Your Favorite List!!" />
      <div className="ContainerIsi">
        <Title titleText={"Featured Today"} />
        <Slider />
        <Title titleText={"Movies List"} />
        <HomeCard
          konten="List of Popular MOVIES!! check it out"
          link="/movies-list"
        />
        <Title titleText={"Favorites"} />
        <HomeCard konten="List of your Favorite Movies" link="/favorite" />
      </div>
    </div>
  );
}
