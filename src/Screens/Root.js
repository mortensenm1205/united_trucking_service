import React, { Component } from 'react';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import HomeContainer from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';

class ScreenRoot extends Component {
  render() {
    return(
      <HomeContainer>
        <Header />
          <About />
          <Contact />
        <Footer />
      </HomeContainer>
    )
  }
}

export default ScreenRoot;
