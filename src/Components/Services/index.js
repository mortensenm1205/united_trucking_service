import React, { Component } from 'react';
import ServiceTypes from './Types/';

class ServicesContainer extends Component {
    render() {
        return (
            <div>
                <h1>I am the Services Portion</h1>
                <ServiceTypes {...this.props} />
            </div>
        )
    }
}

export default ServicesContainer;