import React, { Component } from "react";
import { connect } from "react-redux";
import "./Complex.scss";
import SectionComplex from "./SectionComplex/SectionComplex";

class Complex extends Component {
  render() {
    const { dataApp } = this.props;
    return (
      <article className="container-complex">
        <div className="container-center">
          <p>Популярные комплексы</p>
          <div className="container-row-complex">
            {dataApp.books
              ? dataApp.books.complex.map((elem, index) => {
                  return (
                    <SectionComplex
                      key={index}
                      props={{
                        area: elem.area,
                        pryse: elem.pryse
                      }}
                    />
                  );
                })
              : null}
          </div>
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

export default connect(putStateToProps)(Complex);
