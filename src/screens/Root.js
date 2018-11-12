import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "./Services";

class ScreenRoot extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Services />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default ScreenRoot;
