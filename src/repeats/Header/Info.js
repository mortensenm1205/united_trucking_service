import React from 'react';
import { HeadInfoContainer, HeadInfoImage } from './header_css';

const HeaderInfo = () => {
    return (
        <HeadInfoContainer>
            <HeadInfoImage src="https://firebasestorage.googleapis.com/v0/b/united-trucking-company.appspot.com/o/uts_logo.png?alt=media&token=dcaee300-b331-46df-a867-d0bad99b94ef"  />
        </HeadInfoContainer>
    );
}

export default HeaderInfo;