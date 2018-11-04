import React, { Component } from 'react';
import RootContainer from '../Components/Root';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Services from '../Components/Services';

class ScreenRoot extends Component {
  render() {
    return(
      <RootContainer>
        <Home />
        <About />
        <Services />
        <Contact />
      </RootContainer>
    )
  }
}

export default ScreenRoot;
