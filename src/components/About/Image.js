import React from 'react';
import { AboutImageContainer, AboutImg } from './about_css';

const AboutImage = ({ url, location }) => {
    return (
        <AboutImageContainer>
            <AboutImg src={url} location={location} />
        </AboutImageContainer>
    )
}

export default AboutImage;