import React from 'react';
import { HomeImageContainer, HomeImg } from './home_css';

const HomeImage = ({ url, location }) => {
    return (
        <HomeImageContainer>
            <HomeImg src={url} location={location} />
        </HomeImageContainer>
    )
}

export default HomeImage;