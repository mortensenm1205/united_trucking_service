import React from 'react';
import { ServicesImageContainer, ServicesImg } from './services_css';

const ServicesImage = ({ url, location }) => {
    return (
        <ServicesImageContainer>
            <ServicesImg src={url} location={location} />
        </ServicesImageContainer>
    )
}

export default ServicesImage;