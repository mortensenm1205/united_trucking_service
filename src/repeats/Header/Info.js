import React from 'react';
import { HeaderInfoContain } from './header_css';

const HeaderInfo = () => {
    return (
        <HeaderInfoContain>
            <div className="header_infoLeft">
                <div className="sales">SALES, PARTS & SANDBLASTING</div>
                <div className="phoneNumber">(908) 361-0376</div>
            </div>
            <img className="header_logo" src="" alt="United Truck Service Logo" />
            <div className="header_infoRight">
                <div className="towing">TOWING</div>
                <div className="phoneNumber">(908) 224-0060</div>
            </div>
        </HeaderInfoContain>
    );
}

export default HeaderInfo;