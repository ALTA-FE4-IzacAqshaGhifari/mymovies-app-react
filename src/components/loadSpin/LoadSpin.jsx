import React, { Component } from "react";
import "./LoadSpin.css";

export default class LoadSpin extends Component {
  render() {
    return (
      <div className="spinnerScreen">
        <div className="spinner">
          <div className="innerSpinner">Loading</div>
        </div>
      </div>
    );
  }
}
