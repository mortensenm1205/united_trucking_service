import React from 'react';

const HomeImage = ({ url, location }) => {
    return (
        <figure>
            <img src={url} alt={location.pathname} />
        </figure>
    )
}

export default HomeImage;