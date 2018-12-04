import React from 'react';

const ContactImage = ({ url, location }) => {
    return (
        <figure>
            <img src={url} alt={location} />
        </figure>
    )
}

export default ContactImage;