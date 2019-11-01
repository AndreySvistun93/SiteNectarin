import React, { Component } from "react";
import "./Home.scss";
import Slider from "../../Slider/Slider";
import Iplaser from "../../Iplaser/Iplaser";
import Sertificate from "../../Sertificate/Sertificate";
import Prise from "../../Prise/Prise";
import Order from "../../Order/Order";
import Comments from "../../Comments/Comments";

export default class Home extends Component {
  render() {
    return (
      <main className="main">
        <div className="container_home">
          <Slider />
          <Iplaser />
          <Sertificate />
          <Prise />
          <Order />
          <Comments />
        </div>
      </main>
    );
  }
}
