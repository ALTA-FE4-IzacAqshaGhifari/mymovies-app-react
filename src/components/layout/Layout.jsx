import React from "react";
import "./Layout.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
