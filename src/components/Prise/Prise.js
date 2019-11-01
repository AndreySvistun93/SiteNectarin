import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Prise.scss";

export default class Prise extends Component {
  render() {
    return (
      <article className="prise" alt="Телефон">
        <span className="header_prise">Цены на процедуры</span>
        <p className="prise_description">
          Цена зависит от колличества выбранных вами зон, за каждую последующую
          зону +10% к скидке
        </p>
        <div className="section_container_list_prise">
          <ul className="container_left_list_prise">
            <li>
              <span className="prise_service">
                <span>25 </span> р.
              </span>
              <span className="name_service">Подмышечные впадины</span>
              <div className="price-circle circle-8"></div>
            </li>
            <li>
              <span className="prise_service">
                <span>55 </span> р.
              </span>
              <span className="name_service">Руки</span>
              <div className="price-circle circle-9"></div>
            </li>
            <li>
              <span className="prise_service">
                <span>23 </span> р.
              </span>
              <span className="name_service">Шея</span>
              <div className="price-circle circle-10"></div>
            </li>
            <li>
              <span className="prise_service">
                <span>15 </span> р.
              </span>
              <span className="name_service">Верхняя губа</span>
              <div className="price-circle circle-11"></div>
            </li>
            <li>
              <span className="prise_service">
                <span>15 </span> р.
              </span>
              <span className="name_service">Подбородок</span>
              <div className="price-circle circle-12"></div>
            </li>
            <li>
              <span className="prise_service">
                <span>42 </span> р.
              </span>
              <span className="name_service">Грудь</span>
              <div className="price-circle circle-13"></div>
            </li>
            <li>
              <span className="prise_service">
                <span>15 </span> р.
              </span>
              <span className="name_service">Полоска живота</span>
              <div className="price-circle circle-14"></div>
            </li>
          </ul>

          <div className="section_container_img">
            <div className="slider-sale">
              <img src="/img/face.jpg" alt="" />
              <img src="/img/test1.jpg" alt="" />
              <img src="/img/test2.jpg" alt="" />
              <img src="/img/test3.jpg" alt="" />
            </div>

            <Link className="button-services" to="/services">
              Все услуги
            </Link>
            {/* <img src="/img/bikini.jpeg" /> */}
          </div>

          <ul className="container_list_prise">
            <li>
              <div className="price-circle circle-1"></div>
              <span className="name_service">Глубокое Бикини</span>
              <span className="prise_service">
                <span>50 </span> р.
              </span>
            </li>
            <li>
              <div className="price-circle circle-2"></div>
              <span className="name_service">Классическое бикини</span>
              <span className="prise_service">
                <span>30 </span> р.
              </span>
            </li>
            <li>
              <div className="price-circle circle-3"></div>
              <span className="name_service">Ягодицы</span>
              <span className="prise_service">
                <span>36 </span> р.
              </span>
            </li>
            <li>
              <div className="price-circle circle-4"></div>
              <span className="name_service">Голени</span>
              <span className="prise_service">
                <span>50 </span> р.
              </span>
            </li>
            <li>
              <div className="price-circle circle-5"></div>
              <span className="name_service">Поясница</span>
              <span className="prise_service">
                <span>23 </span> р.
              </span>
            </li>
            <li>
              <div className="price-circle circle-6"></div>
              <span className="name_service">Бёдра</span>
              <span className="prise_service">
                <span>60 </span> р.
              </span>
            </li>
            <li>
              <div className="price-circle circle-7"></div>
              <span className="name_service">Стопы и пальцы</span>
              <span className="prise_service">
                <span>5 </span> р.
              </span>
            </li>
          </ul>
        </div>
      </article>
    );
  }
}
