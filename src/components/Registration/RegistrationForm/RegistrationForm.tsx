import React from 'react'

import RegistrationStep from '../../../constants/RegistrationStep';

import RegistrationButtons from '../RegistrationButtons/RegistrationButtons';
import RegistrationFormStep from '../RegistrationFormStep/RegistrationFormStep';

import './RegistrationForm.scss';

interface Props {
    activeIndex: number;
    onClickNextStep: () => void;
    onClickPreviousStep: () => void;
    steps: RegistrationStep[];
}

const RegistrationForm: React.FC<Props> = ({
                                               activeIndex,
                                               onClickNextStep,
                                               onClickPreviousStep,
                                               steps
                                           }) => {
    return (
        <div className="rgs-Form">
            <div className="rgs-Form_Inner">
                <div className="rgs-Form_Content">
                    <div className="rgs-Form_Body">
                        <ul className="rgs-Form_Items">
                            {steps.map(step => (
                                <li key={step.id} className={step.id === activeIndex
                                    ? 'rgs-Form_Item rgs-Form_Item-active'
                                    : 'rgs-Form_Item'
                                }>
                                    <RegistrationFormStep
                                        form={step.component}
                                        title={step.title}/>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <footer className="rgs-Form_Footer">
                        <RegistrationButtons
                            onClickNextStep={onClickNextStep}
                            onClickPreviousStep={onClickPreviousStep}
                        />
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
