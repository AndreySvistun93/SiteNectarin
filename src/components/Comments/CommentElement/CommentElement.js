import React, { Component } from "react";
import "./CommentElement.scss";

export default class CommentElement extends Component {
  render() {
    const { date, description, name } = this.props.props;
    return (
      <section className="section-client">
        <div className="container-img"></div>
        <div className="img"></div>
        <div className="description-section">
          <div className="description-center">
            <p className="header-description">{name}</p>
            <p className="main-description">{description}</p>
            <p className="date-section">{date}</p>
          </div>
        </div>
      </section>
    );
  }
}
