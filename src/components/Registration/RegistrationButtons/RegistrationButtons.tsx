import React from 'react';

import Button from '../../Layout/Button/Button';

import './RegistrationButtons.scss';

interface Props {
    onClickNextStep: () => void;
    onClickPreviousStep: () => void;
}

const RegistrationButtons: React.FC<Props> = ({ onClickNextStep, onClickPreviousStep }) => {
    return (
        <div className="rgs-Buttons">
            <div className="rgs-Buttons_Body">
                <Button onClick={onClickPreviousStep} text="Previous step" secondary/>
                <Button onClick={onClickNextStep} text="Next"/>
            </div>
        </div>
    );
};

export default RegistrationButtons;
