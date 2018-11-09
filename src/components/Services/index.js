import React, { Component } from 'react';
import RootContainer from '../Root';

class ServicesContainer extends Component {
    render() {
        const { children } = this.props;
        return (
            <RootContainer>
                <h1>"SERVICES" PAGE TITLE</h1>
                {children}
            </RootContainer>
        )
    }
}

export default ServicesContainer;