import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HeaderSecond.scss";

export default class HeaderSecond extends Component {
  render() {
    return (
      <article className="header_second_container">
        <div className="second_container_logo">
          <img className="logo_img" src="./img/3445179.png" alt="Логотип" />
        </div>
        <nav className="second_container_menu">
          <ul>
            <li>
              <Link className="link_router" to="/">
                ГЛАВНАЯ
              </Link>
            </li>
            <li>
              <Link className="link_router" to="/services">
                УСЛУГИ
              </Link>
            </li>
            <li>
              <Link className="link_router" to="/company">
                О НАС
              </Link>
            </li>
            <li>
              <Link className="link_router" to="/location">
                КОНТАКТЫ
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    );
  }
}
