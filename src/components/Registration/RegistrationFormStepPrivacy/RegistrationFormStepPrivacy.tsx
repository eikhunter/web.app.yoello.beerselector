import React from 'react';

import RegisterStore from '../../../stores/RegisterStore';

import FormContainer from '../../Form/FormContainer/FormContainer';
import FormItem from '../../Form/FormItem/FormItem';

interface Props {
    registerStore: RegisterStore;
}

class RegistrationFormStepPrivacy extends React.Component<Props> {
    render() {
        const { registerStore } = this.props;

        return (
            <FormContainer>
                <FormItem
                    checkbox
                    fullWidth
                    label="Receive updates about Tray.io product by email"
                    onInputChange={registerStore.onInputChange}
                    inputType="checkbox"
                    name="preferenceProduct"
                />

                <FormItem
                    checkbox
                    fullWidth
                    label="Receive communication by email for other products created by the Tray.io team"
                    onInputChange={registerStore.onInputChange}
                    inputType="checkbox"
                    name="preferenceTeam"
                />
            </FormContainer>
        );
    }
};

export default RegistrationFormStepPrivacy;
