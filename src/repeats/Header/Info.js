import React from 'react';
import { HeadInfoContainer, HeadInfoImageContainer, HeadInfoContent } from './header_css';

const HeaderInfo = () => {
    return (
        <HeadInfoContainer>
            <HeadInfoContent>
                <h3>SALES, PARTS & SANDBLASTING</h3>
                <p>(908) 361-0376</p>
            </HeadInfoContent>
            <HeadInfoImageContainer>
                <img className="header_logo" src="https://firebasestorage.googleapis.com/v0/b/united-trucking-company.appspot.com/o/dummy_banner.jpg?alt=media&token=cf949563-0832-4b16-add7-d0549ab9612a" alt="United Truck Service Logo" />
            </HeadInfoImageContainer>
            <HeadInfoContent>
                <h3>TOWING</h3>
                <p>(908) 224-0060</p>
            </HeadInfoContent>
        </HeadInfoContainer>
    );
}

export default HeaderInfo;