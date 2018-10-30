import React, { Component } from 'react';
import ServicesContent from './Content';

class ServicesContainer extends Component {
    render() {
        return (
            <div id="services">
                <h1>I am the Services Portion</h1>
                <ServicesContent />
            </div>
        )
    }
}

export default ServicesContainer;