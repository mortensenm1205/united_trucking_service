import React, { Component } from 'react';
import { About } from './about_css';
import { downloadImage } from '../../repeats/Image';
import AboutContent from './Content';
import AboutImage from './Image';

class AboutContainer extends Component {

  state = {
    aboutImageURL: ""
  }

  componentDidMount() {
    downloadImage(this.props.location.pathname).then(url => (
      this.setState({ aboutImageURL: url })
    ))
  }

  render() {
    const { location } = this.props;
    const { aboutImageURL } = this.state;
    return (
      <About>
        <h1>About Us</h1>
        <AboutContent />
        <AboutImage url={aboutImageURL} location={location} />
      </About>
    )
  }
}

export default AboutContainer;
