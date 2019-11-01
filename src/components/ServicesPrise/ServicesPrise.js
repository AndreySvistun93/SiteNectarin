import React, { Component } from "react";
import { connect } from "react-redux";
import "./ServicesPrise.scss";
import PriseSection from "./PriseSection/PriseSection";

class ServicesPrise extends Component {
  render() {
    const { dataApp } = this.props;
    return (
      <article className="ServicesPrise" alt="Телефон">
        <span className="header_prise">Все услуги по удалению волос</span>
        <p className="prise_description">
          Цена зависит от колличества выбранных вами зон, за каждую последующую
          зону +10% к скидке
        </p>
        <div className="section_container_list_prise">
          <ul className="container_list_prise">
            {dataApp.books
              ? dataApp.books.priseSection.map((elem, index) => {
                  return (
                    <PriseSection
                      key={index}
                      props={{
                        url: elem.url,
                        pryse: elem.pryse,
                        description: elem.description
                      }}
                    />
                  );
                })
              : null}
          </ul>
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

export default connect(putStateToProps)(ServicesPrise);
