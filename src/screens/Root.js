import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RootContainer from '../components/Root';
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "./Services";

class ScreenRoot extends Component {
  render() {
    return (
      <RootContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Services />
        </Switch>
      </RootContainer>
    );
  }
}

export default ScreenRoot;
