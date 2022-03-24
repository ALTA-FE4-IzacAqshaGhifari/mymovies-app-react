import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
        <h1 className="H1Navbar">
          <i className="fa-solid fa-user-secret"></i> IzacNONTON
        </h1>
      </Link>

      <ul className="ulNavbar">
        <li className="navListEffek">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            Home
          </Link>
        </li>
        <li className="navListEffek buttonMovieList">
          <Link
            to="/movies-list"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Movies List
          </Link>
        </li>
        <li>
          <Link
            to="/favorite"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="buttonFavorite"> Favorite</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
