import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Introduction from "../../components/introduction/Introduction";
import FavoriteCard from "../../components/favoriteCard/FavoriteCard";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import "./Favorite.css";

export default function Favorite() {
  const navigate = useNavigate();
  const [reloadTrigger, setReloadTrigger] = useState(false);
  const [detail, setDetail] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setDetail(JSON.parse(localStorage.getItem("detail")));
    setIsReady(true);
  }, [reloadTrigger]);

  const handleRemove = (movieId) => {
    let indexRemove = detail.findIndex((object) => {
      return object.id === movieId;
    });

    let copyDetail = detail;
    copyDetail.splice(indexRemove, 1);

    setDetail(copyDetail);

    localStorage.setItem("detail", JSON.stringify(copyDetail));

    setReloadTrigger(!reloadTrigger);
  };

  let result;
  if (isReady) {
    result = (
      <>
        <Introduction text="Your Favorite Movies Collection" />
        <div className="FavoritePageContainer">
          <div className="CardContainer">
            {detail === null
              ? ""
              : detail.map((item, index) => {
                  return (
                    <FavoriteCard
                      key={index}
                      detailFavorite={item}
                      clickDetail={() => {
                        navigate(`/detail/${item.id}`);
                      }}
                      clickRemove={() => {
                        handleRemove(item.id);
                      }}
                    />
                  );
                })}
          </div>
        </div>
      </>
    );
  } else {
    result = <LoadSpin />;
  }

  return result;
}
