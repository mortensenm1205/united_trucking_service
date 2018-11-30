import React from 'react';
import { HeadInfoContainer } from './header_css';

const HeaderInfo = () => {
    return (
        <HeadInfoContainer>
            <div className="header_infoLeft">
                <div className="sales">SALES, PARTS & SANDBLASTING</div>
                <div className="phoneNumber">(908) 361-0376</div>
            </div>
            <figure>
                <img className="header_logo" src="" alt="United Truck Service Logo" />
            </figure>
            <div className="header_infoRight">
                <div className="towing">TOWING</div>
                <div className="phoneNumber">(908) 224-0060</div>
            </div>
        </HeadInfoContainer>
    );
}

export default HeaderInfo;