import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="top-footer">
          <img className="logo_img" src="./img/3445179.png" alt="Логотип" />
          <div>
            <p className="tell_mobyle">
              Телефон:
              <a href="tel:+ 375336097718 ">
                <span> +375(29) 609 77 18</span>
              </a>
            </p>
            <p className="telltell_PC">
              Телефон: <span> +375(29) 609 77 18</span>
            </p>
          </div>
          <div className="footer_insta">
            Инстаграм:
            <a href="https://instagram.com/iplaser.brest?igshid=1nsod6lnphv6m">
              <span> @iplaser.brest</span>
            </a>
          </div>
          <div>
            Время работы: <span>Ежедневно кроме понедельника</span>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="bottom-left-footer">
            Nectarin 2019 © All rights reserved
          </div>
          <div className="bottom-right-footer">
            Designed by <span className="img-circle">AS</span>
          </div>
        </div>
      </footer>
    );
  }
}
