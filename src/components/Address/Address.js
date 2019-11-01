import React, { Component } from "react";
import "./Address.scss";

export default class Address extends Component {
  render() {
    return (
      <article className="container-address">
        <div className="container-center">
          <div className="container-address-discription">
            <p className="header-block">Мы находимся по адресу:</p>
            <div className="container-discription">
              <p className="name-strit">ул. Советская, д. 80</p>
              <p className="name-center">ТРЦ "Берестейский Пассаж"</p>
              <p className="name-citi">г. Брест</p>
            </div>
          </div>
          <div className="container-address-video"></div>
        </div>
      </article>
    );
  }
}
