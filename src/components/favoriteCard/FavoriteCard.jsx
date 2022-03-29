import React from "react";

import "./FavoriteCard.css";

export default function FavoriteCard(props) {
  const dataDetail = props.detailFavorite;
  // console.log(dataDetail);

  return (
    <>
      <div className="FavoriteCard">
        <div
          className="FavoritePoster"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${dataDetail.poster_path})`,
          }}
        ></div>
        <div className="FavoriteDetail">
          <h1 className="FavoriteTitle">{`${
            dataDetail.title.length > 23
              ? dataDetail.title.slice(0, 23) + "..."
              : dataDetail.title
          }`}</h1>
          <div className="BintangFavorite">
            <h2>
              <i className="fa-solid fa-star"></i> {dataDetail.vote_average / 2}{" "}
              / 5
            </h2>
          </div>
          <div className="GenreFavorite"></div>
          <p>release year: {dataDetail.release_date.slice(0, 4)}</p>
          <div
            className="btn btn-primary FavoriteCardButton"
            onClick={props.clickDetail}
          >
            Detail
          </div>
          <div
            className="btn btn-primary FavoriteCardButton"
            onClick={props.clickRemove}
          >
            Remove
          </div>
        </div>
      </div>
    </>
  );
}
