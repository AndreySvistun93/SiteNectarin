import React, { Component } from "react";
import "./Slider.scss";

export default class Slider extends Component {
  render() {
    return (
      <article className="greeting-container">
        <section className="greeting_posts">
          <h1>
            Студия IP лазерной эпиляции в Бресте
          </h1>
          <p className="container-text-order-interest">
            Совершенно новая технология, безболезненного, аппаратного удаления
            волос навсегда
          </p>
          <div className="container-text-order">
            <p> В начале сезона действуют скидки до</p>
            <span> 50% </span>
          </div>
          <button className="order-button">Сделать заказ</button>
        </section>
      </article>
    );
  }
}
