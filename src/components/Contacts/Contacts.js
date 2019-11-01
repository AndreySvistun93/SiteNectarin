import React, { Component } from "react";
import "./Contacts.scss";

export default class Contacts extends Component {
  render() {
    return (
      <article className="container-contacts">
        <div className="container-center">
          <h1>Контактные данные</h1>
          <p className="contacts-description">
            Телефон по которому с нами можно связаться{" "}
          </p>
          <div className="tel_contacts">
            <p className="tell_mobyle">
              <a href="tel:+ 375336097718 ">
                <span> +375(29) 609 77 18</span>
              </a>
            </p>
            <p className="contacts-number">
              <span> +375(29) 609 77 18</span>
            </p>
          </div>
          <p className="contacts-social">Наши социальные сети </p>
          <div className="container-social">
            <div className="img-social"></div>
            <a href="https://instagram.com/iplaser.brest?igshid=1nsod6lnphv6m">
              <span className="text-social">@iplaser.brest</span>
            </a>
          </div>
        </div>
      </article>
    );
  }
}
