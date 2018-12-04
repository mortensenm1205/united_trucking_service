import React, { Component } from "react";
import { RootContain } from './root_css';
import { downloadHeadImage } from '../../repeats/Image';
import Header from "../../repeats/Header";
import Footer from "../../repeats/Footer";
import { withRouter } from 'react-router-dom';

class RootContainer extends Component {

  state = {
    headImageURL: ""
  }

  componentDidMount() {
    if (this.props.location.pathname === "/services") {
      downloadHeadImage(this.props.location.pathname).then(url => (
        this.setState({ servicesImageURL: url })
      ))
    } else {
      downloadHeadImage("/services").then(url => (
        this.setState({ headImageURL: url })
      ))
    }
  }

  componentDidUpdate(nextProps) {
    if (nextProps.location !== this.props.location) {
      downloadHeadImage(this.props.location.pathname).then(url => (
        this.setState({ headImageURL: url })
      ))
    };
  }

  render() {
    const { location, children } = this.props;
    const { headImageURL } = this.state;
    return (
      <RootContain>
        <Header url={headImageURL} location={location} />
        {children}
        <Footer />
      </RootContain>
    )
  }
};

export default withRouter(RootContainer);
