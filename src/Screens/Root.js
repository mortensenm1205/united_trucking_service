import React, { Component } from 'react';
import HomeContainer from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';

class ScreenRoot extends Component {
  render() {
    return(
      <HomeContainer>
        <About />
        <Contact />
      </HomeContainer>
    )
  }
}

export default ScreenRoot;
