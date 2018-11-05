import React, { Component } from 'react';
import RootContainer from '../Root';
import HomeContent from './Content';

class HomeContainer extends Component {
    render() {
        return (
            <RootContainer>
                <h1>“HOME PAGE” TITLE</h1>
                <HomeContent />
            </RootContainer>
        )
    }
}

export default HomeContainer;
