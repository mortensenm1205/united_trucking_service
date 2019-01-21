import React from 'react';
import { HeadInfoContainer, HeadInfo, HeadInfoImage } from './header_css';

const HeaderInfo = () => {
    return (
        <HeadInfoContainer>
            <HeadInfo>
                <p>Need Towing?</p>
                <p>908.361.0376</p>
            </HeadInfo>
            <HeadInfoImage src="https://firebasestorage.googleapis.com/v0/b/united-trucking-company.appspot.com/o/uts_logo.png?alt=media&token=dcaee300-b331-46df-a867-d0bad99b94ef"  />
            <HeadInfo>
                <p>Have Questions?</p>
                <p>Email us at: unitedtruck@yahoo.com</p>
            </HeadInfo>
        </HeadInfoContainer>
    );
}

export default HeaderInfo;