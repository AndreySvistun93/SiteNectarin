import React, { Component } from "react";
import "./Card.scss";

export default class Card extends Component {
  render() {
    const { pryse, money } = this.props.props;
    return (
      <section className="card">
        <span className="front">
          <p>
            {pryse}
            <span>{money}</span>
          </p>
          <span className="text-top">Нектарин</span>
          <span className="text-bottom"> Сделать заказ</span>
        </span>
        <span className="back">
          <p className="header_back">Нажмите на номер для заказа</p>
          <div className="container-contacts">
            <span className="text-top">Нектарин</span>
            <a className="tell_mobyle" href="tel:+ 375336097718 ">
              +375(33) 609 77 18
            </a>
            <p className="telltell_PC">+375(33) 609-77-18</p>
          </div>
          <div className="back-insta">
            Инстаграм:
            <a href="https://instagram.com/iplaser.brest?igshid=1nsod6lnphv6m">
              <span> @iplaser.brest</span>
            </a>
          </div>
        </span>
      </section>
    );
  }
}
