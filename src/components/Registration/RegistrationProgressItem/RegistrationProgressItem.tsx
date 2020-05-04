import React from 'react';

import './RegistrationProgressItem.scss';
import Arrow from '../../../assets/svg/Arrow';
import Tick from '../../../assets/svg/Tick';

interface Props {
    completed: boolean;
    stepNumber: number
    title: string;
}

const RegistrationProgressItem: React.FC<Props> = ({ completed, stepNumber, title }) => {
    return (
        <div className={completed
            ? 'rgs-ProgressItem rgs-ProgressItem-completed'
            : 'rgs-ProgressItem'}>
            <div className="rgs-ProgressItem_Number">
                {stepNumber}

                <span className="rgs-ProgressItem_Icon">
                    <Tick/>
                </span>
            </div>
            <p className="rgs-ProgressItem_Text">{title}</p>

            <span className="rgs-ProgressItem_Arrow">
                <Arrow/>
            </span>
        </div>
    );
};

export default RegistrationProgressItem;
