import React, { Component } from "react";
import "./Layout.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default class Layout extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <Navbar />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
