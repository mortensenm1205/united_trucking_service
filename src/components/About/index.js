import React, { Component } from 'react';
import AboutContent from './Content';
import AboutTeam from './Team';
import RootContainer from '../Root';

class AboutContainer extends Component {
  render() {
    return(
      <RootContainer>
        <h1>“ABOUT” PAGE TITLE</h1>
        <AboutContent />
        <AboutTeam />
      </RootContainer>
    )
  }
}

export default AboutContainer;
