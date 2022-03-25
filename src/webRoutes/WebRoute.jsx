import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import MoviesList from "../pages/moviesList/MoviesList";
import Detail from "../pages/detail/Detail";
import Favorite from "../pages/favorite/Favorite";

export default function WebRoute() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies-list" element={<MoviesList />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
