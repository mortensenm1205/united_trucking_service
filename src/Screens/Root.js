import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../Components/About';
import Contact from '../Components/Contact';

class ScreenRoot extends Component {
  render() {
    return(
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    )
  }
}

export default ScreenRoot;
