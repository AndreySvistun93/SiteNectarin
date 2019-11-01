import React, { Component } from "react";
import "./Map_Component.scss";

export default class Map_Component extends Component {
  render() {
    return (
      <article className="container-Map-component">
        <div className="Map-component" id="map">
          <p className="header-map">Расположение на карте</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d612.8716584954992!2d23.694965258823412!3d52.08907456738705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210bbdb7f73c53%3A0xafbcfea736f854ab!2z0KHRgtGD0LTQuNGPINGN0L_QuNC70Y_RhtC40LggItCd0LXQutGC0LDRgNC40L0i!5e0!3m2!1sru!2sby!4v1571660436813!5m2!1sru!2sby"
            width="100%"
            height="450"
          ></iframe>
        </div>
      </article>
    );
  }
}
