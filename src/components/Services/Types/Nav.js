import React from 'react';
import { TypesNavigation, TypesLink } from '../services_css';

const TypesNav = () => {
    return (
        <TypesNavigation>
            <TypesLink exact={true} to="/services/heavyDutyTowing" activeClassName="types-nav-active">HEAVY DUTY TOWING</TypesLink>
            <TypesLink to="/services/carTowing" activeClassName="types-nav-active">CAR TOWING</TypesLink>
            <TypesLink to="/services/roadsideAssistance" activeClassName="types-nav-active">ROADSIDE ASSISTANCE</TypesLink>
            <TypesLink to="/services/wreckerService" activeClassName="types-nav-active">WRECKER SERVICE</TypesLink>
        </TypesNavigation>
    )
}

export default TypesNav;