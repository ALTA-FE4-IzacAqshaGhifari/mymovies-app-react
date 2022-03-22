import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import MoviesList from "../pages/moviesList/MoviesList";
import Details from "../pages/details/Details";
import Favorite from "../pages/favorite/Favorite";

export default class WebRoute extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies-list" element={<MoviesList />} />
              <Route path="/details" element={<Details />} />
              <Route path="/favorite" element={<Favorite />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </>
    );
  }
}
