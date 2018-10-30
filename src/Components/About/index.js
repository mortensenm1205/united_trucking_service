import React, { Component } from 'react';
import AboutContent from './Content';
import AboutTeam from './Team';

class AboutContainer extends Component {
  render() {
    return(
      <div id="about">
        <h1>I am the About Portion</h1>
        <AboutContent />
        <AboutTeam />
      </div>
    )
  }
}

export default AboutContainer;
