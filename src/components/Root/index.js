import React, { Component } from "react";
import { downloadImage } from '../../repeats/Image';
import Header from "../../repeats/Header";
import Footer from "../../repeats/Footer";
import { withRouter } from 'react-router-dom';

class RootContainer extends Component {

  state = {
    imageURL: ""
  }

  componentDidMount() {
    downloadImage(this.props.location.pathname).then(url => (
      this.setState({ imageURL: url })
    ))
  }

  componentDidUpdate(nextProps) {
    if (nextProps.location !== this.props.location) {
      downloadImage(this.props.location.pathname).then(url => (
        this.setState({ imageURL: url })
      ))
    };
  }

  render() {
    const { location, children } = this.props;
    const { imageURL } = this.state;
    return (
      <div>
        <Header url={imageURL} location={location} />
        {children}
        <Footer />
      </div>
    )
  }
};

export default withRouter(RootContainer);
