import React from 'react';
import { ContactImageContainer, ContactImg } from './contact_css';

const ContactImage = ({ url, location }) => {
    return (
        <ContactImageContainer>
            <ContactImg src={url} location={location} />
        </ContactImageContainer>
    )
}

export default ContactImage;