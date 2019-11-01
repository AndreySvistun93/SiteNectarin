import React, { Component } from "react";
import Menu from "../../Menu/Menu";
import "./HiddenHeader.scss";

export default class HiddenHeader extends Component {
  render() {
    return (
      <article className="header_hidden_container">
        <div className="left_container">
          <Menu />
          <img className="header_logo" src="./img/3445179.png" alt="Логотип" />
        </div>
        <div className="right_container">
          <nav className="menu_header"></nav>
          <ul className="login_container_small_container">
            <li>
              <img
                className="location"
                src="./img/location-48px-black.png"
                alt="Где мы находимся"
              />
            </li>
            <li>
              <a href="tel:+ 375336097718 ">
                <img
                  className="number"
                  src="./img/phone-48px-black.png"
                  alt="Телефон"
                />
              </a>
            </li>
          </ul>
        </div>
      </article>
    );
  }
}
