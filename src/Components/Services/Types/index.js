import React, { Component } from 'react';
import ServicesContainer from '../index'
import TypeSelection from './Selection';

class TypesContainer extends Component {

    render() {
        const { children } = this.props;
        return (
            <ServicesContainer>
                <TypeSelection />
                {children}
            </ServicesContainer>
        )
    }
}



export default TypesContainer;