import React, { Component } from "react";
import { downloadImage } from '../../repeats/Image';
import Header from "../../repeats/Header";
import Footer from "../../repeats/Footer";
import { withRouter } from 'react-router-dom';

class RootContainer extends Component {

  componentDidUpdate(nextProps) {
    if(nextProps.location !== this.props.location) {
      console.log(this.props.location.pathname);
    };
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Header />
          {children}
        <Footer />
      </div>
    )
  }
};

export default withRouter(RootContainer);
