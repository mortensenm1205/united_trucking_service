import React, { Component } from 'react';
import HomeContainer from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Services from '../Components/Services';

class ScreenRoot extends Component {
  render() {
    return(
      <HomeContainer>
        <About />
        <Services />
        <Contact />
      </HomeContainer>
    )
  }
}

export default ScreenRoot;
