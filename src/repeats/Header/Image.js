import React from 'react';

const HeaderImage = ({ url, location }) => {
    return (
        <figure>
            <img src={url} alt={location.pathname === "/" ? "/home" : location.pathname} />
        </figure>
    )
}

export default HeaderImage;