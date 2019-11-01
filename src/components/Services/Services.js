import React, { Component } from "react";
import "./Services.scss";
import ServicesPrise from "../../components/ServicesPrise/ServicesPrise";
import Order from "../../components/Order/Order";
import Complex from "../../components/Complex/Complex";
import Sertificate from "../../components/Sertificate/Sertificate";
export default class Services extends Component {
  render() {
    return (
      <article className="container-services-page">
        <div className="container-center">
          <ServicesPrise />
          <Order />
          <Complex />
          <Sertificate />
          <Order />
        </div>
      </article>
    );
  }
}
