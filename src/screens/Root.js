import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "./Services";

class ScreenRoot extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Services />
      </Switch>
    );
  }
}

export default ScreenRoot;
