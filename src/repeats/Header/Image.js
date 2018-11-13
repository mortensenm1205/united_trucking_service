import React from 'react';

const HeaderImage = ({ url }) => {
    return (
        <figure>
            <img src={url} alt="im_the_huge_header_img" />
        </figure>
    )
}

export default HeaderImage;