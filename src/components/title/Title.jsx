import React, { Component } from "react";
import "./Title.css";

export default class Title extends Component {
  constructor(props) {
    super();
  }
  render() {
    return <h2 className="TitleStyle">{this.props.titleText}</h2>;
  }
}
