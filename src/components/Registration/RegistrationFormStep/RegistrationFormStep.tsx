import React from 'react';

import './RegistrationFormStep.scss';

interface Props {
    form: React.ReactNode;
    title: string;
}

const RegistrationFormStep: React.FC<Props> = ({
                                                   form,
                                                   title
                                               }) => {
    return (
        <div className="rgs-FormStep">
            <h2 className="rgs-FormStep_Title">{title}</h2>

            <div className="rgs-FormStep_Body">
                {form}
            </div>
        </div>
    );
};

export default RegistrationFormStep;
