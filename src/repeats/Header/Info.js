import React from 'react';
import { HeadInfoContainer, HeadInfoImageContainer } from './header_css';

const HeaderInfo = () => {
    return (
        <HeadInfoContainer>
            <HeadInfoImageContainer>
                <img className="header_logo" src="https://firebasestorage.googleapis.com/v0/b/united-trucking-company.appspot.com/o/dummy_banner.jpg?alt=media&token=cf949563-0832-4b16-add7-d0549ab9612a" alt="United Truck Service Logo" />
            </HeadInfoImageContainer>
        </HeadInfoContainer>
    );
}

export default HeaderInfo;