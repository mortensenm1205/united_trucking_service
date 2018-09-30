import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../Components/About';

class ScreenRoot extends Component {
  render() {
    return(
      <Switch>
        <Route path="/about" component={About} />
      </Switch>
    )
  }
}

export default ScreenRoot;
