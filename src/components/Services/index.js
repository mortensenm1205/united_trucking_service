import React, { Component } from 'react';
import { downloadImage } from '../../repeats/Image';
import ServicesImage from './Image';
import TypesNav from './Types/Nav';
import { withRouter } from 'react-router-dom';

class ServicesContainer extends Component {
    state = {
        servicesImageURL: ""
    }

    componentDidMount() {
        if (this.props.location.pathname === "/services") {
            downloadImage(this.props.location.pathname).then(url => (
                this.setState({ servicesImageURL: url })
            ))
        } else {
            downloadImage("/services").then(url => (
                this.setState({ servicesImageURL: url })
            ))
        }
    }

    render() {
        const { children, location } = this.props;
        const { servicesImageURL } = this.state;
        return (
            <div>
                <h1>"SERVICES" PAGE TITLE</h1>
                <TypesNav />
                {children}
                <ServicesImage url={servicesImageURL} location={location} />
            </div>
        )
    }
}

export default withRouter(ServicesContainer);