import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p className="Hello">
        Hello, this is Izac !! <br />
        Check out my sosial media accounts If you want to know more about me
      </p>
      <div className="SosmedIcon">
        <a
          href="https://www.instagram.com/izac_aqsha/"
          rel="noreferrer"
          target={"_blank"}
        >
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="https://github.com/IzacFE" rel="noreferrer" target={"_blank"}>
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="https://www.facebook.com/aqsha.izac"
          rel="noreferrer"
          target={"_blank"}
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
      <p className="Email">
        Email me if you have something to ask :{" "}
        <span className="AlamatEmail">izacaqsha@gmail.com</span>
      </p>
    </footer>
  );
}
