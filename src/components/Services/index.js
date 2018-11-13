import React, { Component } from 'react';

class ServicesContainer extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <h1>"SERVICES" PAGE TITLE</h1>
                {children}
            </div>
        )
    }
}

export default ServicesContainer;