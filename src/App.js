import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import Home from "./components/routes/Home/Home";
import ServicesPage from "./components/routes/ServicesPage/ServicesPage";
import Location from "./components/routes/Location/Location";
import Сompany from "./components/routes/Сompany/Сompany";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/routes/NotFound/NotFound";

import { bindActionCreators } from "redux";
import { requestData } from "./store/app/action";
import { movieRequest } from "./store/asyncMidlvar";

class App extends Component {
  componentDidMount() {
    const { movieRequest } = this.props;
    movieRequest({ url: "/docs/data.json", action: requestData });
  }
  render() {
    return (
      <Router>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/company" component={Сompany} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
const putStateToProps = state => {
  return {
    dataApp: state.app.dataApp
  };
};
const putActionToProps = dispatch => {
  return {
    movieRequest: bindActionCreators(movieRequest, dispatch)
  };
};

export default connect(
  putStateToProps,
  putActionToProps
)(App);
