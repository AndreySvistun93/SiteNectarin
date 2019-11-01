import React, { Component } from "react";
import "./CommentElement.scss";

export default class CommentElement extends Component {
  render() {
    const { date, description, name, url } = this.props.props;
    return (
      <section className="section-client">
        <img className="container-img" src={url} alt = ""/>
        <img className="img" src={url} alt = "" />
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
