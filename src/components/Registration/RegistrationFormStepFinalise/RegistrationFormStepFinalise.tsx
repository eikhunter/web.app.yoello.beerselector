import React from 'react';

import RegisterStore from '../../../stores/RegisterStore';

import FormContainer from '../../Form/FormContainer/FormContainer';
import FormItem from '../../Form/FormItem/FormItem';

interface Props {
    registerStore: RegisterStore;
}

class RegistrationFormStepFinalise extends React.Component<Props> {
    render() {
        const { registerStore } = this.props;

        return (
            <FormContainer>
                <FormItem
                    checkbox
                    error={registerStore.fields.name.error}
                    label="Name"
                    onInputChange={registerStore.onInputChange}
                    inputType="text"
                    name="name"
                    required
                />
            </FormContainer>
        );
    }
};

export default RegistrationFormStepFinalise;
