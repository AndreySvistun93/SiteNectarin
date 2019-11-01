import React, { Component } from "react";
import "./SectionComplex.scss";

export default class SectionComplex extends Component {
  render() {
    const { area, pryse } = this.props.props;
    return (
      <div className="container-section-complex">
        <ul className="list-img">
          {area.map((elem, index) => {
            return (
              <li className={`item-img-${index + 1}`} key={index}>
                <img src={elem.url} alt={elem.name} />
              </li>
            );
          })}
        </ul>
        <ul className="list-procedure">
          {area.map((elem, index) => {
            return <li key={index}>{elem.name}</li>;
          })}
        </ul>
        <div className="container-prise">
          <span>
            <span>{pryse}</span> руб.
          </span>
        </div>
        <button className="button-complex">Заказать комплекс</button>
      </div>
    );
  }
}
