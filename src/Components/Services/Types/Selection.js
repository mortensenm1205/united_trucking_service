import React from 'react';

const TypeSelection = ({ change }) => {
    return(
        <div>
            <select onChange={change}>
                <option>HEAVY DUTY TOWING</option>
                <option>CAR TOWING</option>
                <option>ROADSIDE ASSISTANCE</option>
                <option>WRECKER SERVICE</option>
            </select>
        </div>
    )
}

export default TypeSelection;