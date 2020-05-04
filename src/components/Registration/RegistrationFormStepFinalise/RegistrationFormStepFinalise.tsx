import React from 'react';
import { observer } from 'mobx-react';

import RegisterStore from '../../../stores/RegisterStore';

import RegistrationSummaryItem from '../RegistrationSummaryItem/RegistrationSummaryItem';

import './RegistrationFormStepFinalise.scss';

interface Props {
    registerStore: RegisterStore;
}

@observer
class RegistrationFormStepFinalise extends React.Component<Props> {
    render() {
        const { registerStore } = this.props;

        return (
            <div className="rgs-FormStepFinalise">
                <ul className="rgs-FormStepFinalise_Items">
                    <li className="rgs-FormStepFinalise_Item">
                        <RegistrationSummaryItem
                            field="Name"
                            value={registerStore.fields.name.value}
                        />
                    </li>

                    <li className="rgs-FormStepFinalise_Item">
                        <RegistrationSummaryItem
                            field="Email"
                            value={registerStore.fields.email.value}
                        />
                    </li>

                    <li className="rgs-FormStepFinalise_Item">
                        <RegistrationSummaryItem
                            field="Role"
                            value={registerStore.fields.role.value.length > 0
                                ? registerStore.fields.role.value.length
                                : 'N/A'
                            }
                        />
                    </li>
                </ul>
            </div>
        );
    }
};

export default RegistrationFormStepFinalise;
