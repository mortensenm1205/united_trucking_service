import React, { Component } from 'react';
import AboutContent from './Content';
import AboutImage from './Image';

class AboutContainer extends Component {
  render() {
    return (
      <div>
        <h1>“ABOUT” PAGE TITLE</h1>
        <AboutContent />
        <AboutImage />
      </div>
    )
  }
}

export default AboutContainer;
