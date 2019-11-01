import React, { Component } from "react";
import "./PriseSection.scss";

export default class PriseSection extends Component {
  render() {
    const { url,pryse, description } = this.props.props;
    return (
      <li className = "price-list-item">
        <img className="price-circle" src = {url} alt = "Область"/>
        <span className="name_service">{description}</span>
        <span className="prise_service">
          <span>{pryse}</span> р.
        </span>
      </li>
    );
  }
}
