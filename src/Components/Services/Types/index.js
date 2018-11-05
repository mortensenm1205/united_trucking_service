import React, { Component } from 'react';
import ServicesContainer from '../index'
import TypesNav from './Nav';

class TypesContainer extends Component {

    render() {
        const { children } = this.props;
        return (
            <ServicesContainer>
                <TypesNav />
                {children}
            </ServicesContainer>
        )
    }
}



export default TypesContainer;