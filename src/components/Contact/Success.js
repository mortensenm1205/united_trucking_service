import React from 'react';
import { Success } from './contact_css';

const ContactSuccess = ({ success }) => {
    return (
        <Success>
            {success ? <h3>Message Sent! Someone will be in touch soon :)</h3> : null}
        </Success>
    )
}

export default ContactSuccess;