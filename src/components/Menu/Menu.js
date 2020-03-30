import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openMenuState, closeMenuState } from "../../store/menu/action";
import "./Menu.scss";

class Menu extends Component {
  render() {
    const { menuState, openMenuState, closeMenuState } = this.props;

    return (
      <div className="container-menu">
        <div
          className="menu"
          onClick={() => {
            openMenuState();
          }}
        >
        </div>
        {menuState ? (
          <div className="menu-menu">
            <div className="close-container">
              <div
                className="button-close-menu"
                onClick={() => {
                  closeMenuState();
                }}
              ></div>
            </div>

            <div className="container-items-menu">
              <div className="header-menu">МЕНЮ</div>
              <ul className="list-menu">
                <li>
                  <Link
                    className="link_router"
                    onClick={() => {
                      closeMenuState();
                    }}
                    to="/"
                  >
                    ГЛАВНАЯ
                  </Link>
                </li>
                <li>
                  <Link
                    className="link_router"
                    onClick={() => {
                      closeMenuState();
                    }}
                    to="/services"
                  >
                    УСЛУГИ
                  </Link>
                </li>
                <li>
                  <Link
                    className="link_router"
                    onClick={() => {
                      closeMenuState();
                    }}
                    to="/company"
                  >
                    О НАС
                  </Link>
                </li>
                <li>
                  <Link
                    className="link_router"
                    onClick={() => {
                      closeMenuState();
                    }}
                    to="/location"
                  >
                    КОНТАКТЫ
                  </Link>
                </li>
              </ul>
            </div>
          </div> 
        ) : null}
      </div>
    );
  }
}
const putStateToProps = state => {
  return {
    menuState: state.menu.menuState
  };
};

const putActionToProps = dispatch => {
  return {
    openMenuState: bindActionCreators(openMenuState, dispatch),
    closeMenuState: bindActionCreators(closeMenuState, dispatch)
  };
};

export default connect(
  putStateToProps,
  putActionToProps
)(Menu);
