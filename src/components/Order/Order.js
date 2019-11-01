import React, { Component } from "react";
import "./Order.scss";

export default class Order extends Component {
  render() {
    return (
      <article className="order">
        <p className="order_discription">
          Оформите заказ прямо сейчас, по самым выгодным ценам!
        </p>
        <button className="button_order">Сделать заказ</button>
      </article>
    );
  }
}
