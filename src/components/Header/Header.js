import React, { Component } from "react";
import HiddenHeader from "./HiddenHeader/HiddenHeader";
import HeaderFirst from "./HeaderFirst/HeaderFirst";
import HeaderSecond from "./HeaderSecond/HeaderSecond";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <HiddenHeader />
        <HeaderFirst />
        <HeaderSecond />
      </header>
    );
  }
}
