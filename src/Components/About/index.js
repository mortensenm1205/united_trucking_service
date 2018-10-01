import React, { Component } from 'react';
import AboutContent from './Content';
import AboutTeam from './Team';

class AboutContainer extends Component {
  render() {
    return(
      <div>
        <AboutContent />
        <AboutTeam />
      </div>
    )
  }
}

export default AboutContainer;
