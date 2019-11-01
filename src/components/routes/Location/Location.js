import React, { Component } from "react";

import "./Location.scss";
import Contacts from "../../Contacts/Contacts";
import Address from "../../Address/Address";
import Map_Component from "../../Map_Component/Map_Component";

export default class Location extends Component {
  render() {
    return (
      <main className="main">
        <div className="container_location_page">
          <Contacts />
          <Address />
          <Map_Component />
        </div>
      </main>
    );
  }
}
