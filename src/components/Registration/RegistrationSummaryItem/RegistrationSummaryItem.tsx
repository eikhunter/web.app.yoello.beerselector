import React from 'react';

import './RegistrationSummaryItem.scss'

interface Props {
    field: string;
    value: string;
}

const RegistrationSummaryItem: React.FC<Props> = ({ field, value }) => {
    return (
        <div className="rgs-SummaryItem">
            <p className="rgs-SummaryItem_Title">{field}</p>
            <p className="rgs-SummaryItem_Text">{value}</p>
        </div>
    );
};

export default RegistrationSummaryItem;
