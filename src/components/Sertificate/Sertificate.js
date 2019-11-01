import React, { Component } from "react";
import { connect } from "react-redux";
import "./Sertificate.scss";
import Card from "./Card/Card";

class Sertificate extends Component {
  render() {
    const { dataApp } = this.props;
    return (
      <article className="sertificate">
        <span className="header_sertificate">Подарочные сертификаты</span>
        <p className="sertificate_description">
          Красота и здоровье – это то, чего мы желаем себе и друг другу на
          всевозможных праздниках. Больше не нужно просто желать, подарите это
          Вашим друзьям и близким!
        </p>
        <div className="container_card">
          {dataApp.books
            ? dataApp.books.sertificate.map((elem, index) => {
                return (
                  <Card
                    key={index}
                    props={{
                      pryse: elem.pryse,
                      money: elem.money,
                      description: elem.description
                    }}
                  />
                );
              })
            : null}
        </div>
      </article>
    );
  }
}

const putStateToProps = state => {
  return {
    dataApp: state.app.dataApp
  };
};

export default connect(putStateToProps)(Sertificate);
