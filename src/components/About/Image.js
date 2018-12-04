import React from 'react';

const AboutImage = ({ url, location }) => {
    return (
        <figure>
            <img src={url} alt={location} />
        </figure>
    )
}

export default AboutImage;