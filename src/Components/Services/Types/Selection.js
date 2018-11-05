import React from 'react';
import { Link } from 'react-router-dom';

const TypeSelection = () => {
    return(
        <nav>
            <Link to="/services/heavyDutyTowing">HEAVY DUTY TOWING</Link>
            {' '}
            <Link to="/services/carTowing">CAR TOWING</Link>
            {' '}
            <Link to="/services/roadsideAssistance">ROADSIDE ASSISTANCE</Link>
            {' '}
            <Link to="/services/wreckerService">WRECKER SERVICE</Link>
        </nav>
    )
}

export default TypeSelection;