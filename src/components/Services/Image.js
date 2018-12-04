import React from 'react';

const ServicesImage = ({ url, location }) => {
    return (
        <figure>
            <img src={url} alt={location} />
        </figure>
    )
}

export default ServicesImage;