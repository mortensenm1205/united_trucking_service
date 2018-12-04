import React, { Component } from 'react';
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
      <div>
        <h1>About Us</h1>
        <AboutContent />
        <AboutImage url={aboutImageURL} location={location} />
      </div>
    )
  }
}

export default AboutContainer;
