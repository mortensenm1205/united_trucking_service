import React from 'react';
import { HeadImageContainer } from './header_css';

const HeaderImage = ({ url, location }) => {
    return (
        <HeadImageContainer>
            <img src={url} alt={location.pathname === "/" ? "/home" : location.pathname} />
        </HeadImageContainer>
    )
}

export default HeaderImage;