import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Services from './Services';

class ScreenRoot extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Services />
      </Switch>
    )
  }
}

export default ScreenRoot;
