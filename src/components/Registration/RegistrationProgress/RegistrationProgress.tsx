import React from 'react';

import RegistrationStep from '../../../constants/RegistrationStep';

import RegistrationProgressItem from '../RegistrationProgressItem/RegistrationProgressItem';

import './RegistrationProgress.scss';
import Logo from '../../../assets/svg/Logo';

interface Props {
    activeIndex: number;
    steps: RegistrationStep[]
}

const RegistrationProgress: React.FC<Props> = ({ activeIndex, steps }) => {
    return (
        <div className="rgs-Progress">
            <div className="rgs-Progress_Inner">
                <div className="rgs-Progress_Body">
                    <div className="rgs-Progress_Logo">
                        <Logo/>
                    </div>

                    <ul className="rgs-Progress_Items">
                        {steps.map((step, index) =>
                            <li key={step.id} className={step.id === activeIndex
                                ? 'rgs-Progress_Item rgs-Progress_Item-active'
                                : 'rgs-Progress_Item'
                            }>
                                <RegistrationProgressItem
                                    completed={step.completed}
                                    stepNumber={index + 1}
                                    title={step.title}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RegistrationProgress;
