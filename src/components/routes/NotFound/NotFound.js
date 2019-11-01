import React, { Component } from "react";
import "./NotFound.scss";

export default class NotFound extends Component {
  render() {
    return (
      <main className="main">
        <section className="NotFound_container">
          <h1>Whoops!</h1>
          <span>404</span>
          <p>You seem to have stumbled off the beaten path.</p>
        </section>
      </main>
    );
  }
}
