import React, { Component } from 'react';
import { Footer } from './footer_css';
import FooterCopyright from './Copyright';

class FooterContainer extends Component {
  render() {
    return (
      <Footer>
        <FooterCopyright />
      </Footer>
    )
  }
}

export default FooterContainer;
