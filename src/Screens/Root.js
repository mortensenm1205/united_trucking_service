import React, { Component } from 'react';
import RootContainer from '../Components/Root';
import { Switch, Route } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Services from './Services';

class ScreenRoot extends Component {
  render() {
    return(
      <RootContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Services />
        </Switch>
      </RootContainer>
    )
  }
}

export default ScreenRoot;
