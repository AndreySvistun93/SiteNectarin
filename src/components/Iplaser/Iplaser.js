import React, { Component } from "react";
import "./Iplaser.scss";

export default class Iplaser extends Component {
  render() {
    return (
      <article className="section_info_laser">
        <span className="header_section">IP Laser</span>
        <p className="info_laser">
          Система IPLaser существенно отличается от других видов лазерной
          эпиляции, поскольку в ней происходит не одна, а три вспышки света в
          течение одной секунды. Из-за высокой концентрации энергии снижаются
          болевые ощущения, поэтому процедура безболезненная. К тому же для
          удаления волос требуется значительно меньше времени, а
          реабилитационный период проходит легче.
        </p>
        <ul className="list_perfect">
          <li className="fist_li">
            <div className="circle">
              <img src="./img/face.png" alt="test" />
            </div>
            <span className="description">
              Желаемый результат от 4-10 процедур
            </span>
          </li>
          <li>
            <div className="circle">
              <img src="./img/no-grow.png" alt="test" />
            </div>
            <span className="description">
              Удаление волос на период от 2-х лет
            </span>
          </li>
          <li>
            <div className="circle">
              <img src="./img/no-pain.png" alt="test" />
            </div>
            <span className="description">Абсолютно безболезненно</span>
          </li>
          <li>
            <div className="circle">
              <img src="./img/no-fire.png" alt="test" />
            </div>
            <span className="description">
              Безопасно- аппарат не наносит ожегов
            </span>
          </li>
        </ul>
      </article>
    );
  }
}
