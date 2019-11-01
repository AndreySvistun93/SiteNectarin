import React, { Component } from "react";
import "./HeaderFirst.scss";

export default class HeaderFirst extends Component {
  render() {
    return (
      <section className="header_first_container">
        <div className="work_time_info_container">
          <ul className="info_list_header">
            <li>
              <img
                className="location"
                src="./img/location-48px-black.png"
                alt="Где мы находимся"
              />
              <span> Расположение</span>
            </li>
            <li>
              <img
                className="number"
                src="./img/phone-48px-black.png"
                alt="Телефон"
              />
              <span className="tell_mobyle">
                <a href="tel:+ 375336097718 "> +375(33) 609 77 18</a>
              </span>
              <span className="telltell_PC"> +375(29) 609 77 18</span>
            </li>
            <li>
              <img
                className="work_time"
                src="./img/clock-48px-black.png"
                alt="Время работы"
              />
              <span> Ежедневно c 10:00 - 19:00 (кроме понедельника)</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
