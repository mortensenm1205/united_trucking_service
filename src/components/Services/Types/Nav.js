import React from 'react';
import { TypesNavigation, TypesLink } from '../services_css';

const TypesNav = () => {
    return (
        <TypesNavigation>
            <TypesLink exact={true} to="/services/heavyDutyTowing">HEAVY DUTY TOWING</TypesLink>
            <TypesLink to="/services/carTowing">CAR TOWING</TypesLink>
            <TypesLink to="/services/roadsideAssistance">ROADSIDE ASSISTANCE</TypesLink>
            <TypesLink to="/services/wreckerService">WRECKER SERVICE</TypesLink>
        </TypesNavigation>
    )
}

export default TypesNav;