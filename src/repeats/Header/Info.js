import React from 'react';
import { HeadInfoContainer, HeadInfoImage } from './header_css';

const HeaderInfo = () => {
    return (
        <HeadInfoContainer>
            <HeadInfoImage src="https://firebasestorage.googleapis.com/v0/b/united-trucking-company.appspot.com/o/uts_logo.png?alt=media&token=81f83abe-79a4-4668-8b9e-720a8fc7e2c6"  />
        </HeadInfoContainer>
    );
}

export default HeaderInfo;