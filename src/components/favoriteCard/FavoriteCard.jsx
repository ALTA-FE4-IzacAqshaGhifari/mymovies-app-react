import React from "react";
import "./FavoriteCard.css";

export default function FavoriteCard(props) {
  return (
    <>
      <div>
        <div className="CardContainer">
          <div className="FavoriteCard">
            <div
              className="FavoritePoster"
              style={{
                backgroundImage: `url(https://asset.kompas.com/crop/39x0:1051x1349/300x400/data/photo/2019/04/03/2579847035.jpg)`,
              }}
            ></div>
            <div className="FavoriteDetail">
              <h1 className="FavoriteTitle">Joker</h1>
              <div className="ratingBintang">
                <h2>
                  <i className="fa-solid fa-star"></i> 5 / 5
                </h2>
              </div>
              <div className="GenreFavorite">
                <div key={""} className="genre">
                  Action
                </div>
                <div key={""} className="genre">
                  Action
                </div>
                <div key={""} className="genre">
                  Action
                </div>
              </div>
              <p>release date: 2022-03-01</p>
              <p>
                In his second year of fighting crime, Batman uncovers corruption
                in Gotham City that connects to his own family while facing a
                serial killer known as the Riddler.
              </p>
            </div>
          </div>

          <div className="FavoriteCard">
            <div
              className="FavoritePoster"
              style={{
                backgroundImage: `url(https://asset.kompas.com/crop/39x0:1051x1349/300x400/data/photo/2019/04/03/2579847035.jpg)`,
              }}
            ></div>
            <div className="FavoriteDetail">
              <h1 className="detailTitle">Joker</h1>
              <div className="ratingBintang">
                <h2>
                  <i className="fa-solid fa-star"></i> 5 / 5
                </h2>
              </div>
              <div className="GenreFavorite">
                <div key={""} className="genre">
                  Action
                </div>
              </div>
              <p>release date: 2022-03-01</p>
              <p>
                In the not-too-distant future, two drifters traveling through
                the desert stumble across the biggest gold nugget ever found and
                the dream of immense wealth and greed takes hold. They hatch a
                plan to excavate their bounty, with one man leaving to secure
                the necessary tools while the other remains with the gold. The
                man who remains must endure harsh desert elements, ravenous wild
                dogs, and mysterious intruders, while battling the sinking
                suspicion that he has been abandoned to his fate
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
