import React from 'react';
import { HeadImageContainer, HeadImage } from './header_css';

const HeaderImage = ({ url, location }) => {
    return (
        <HeadImageContainer>
            <HeadImage src={url} location={location} />
        </HeadImageContainer>
    )
}

export default HeaderImage;