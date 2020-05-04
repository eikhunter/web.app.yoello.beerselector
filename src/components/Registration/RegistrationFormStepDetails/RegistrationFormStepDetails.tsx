import React from 'react';
import { observer } from 'mobx-react';

import RegisterStore from '../../../stores/RegisterStore';

import FormItem from '../../Form/FormItem/FormItem';
import FormContainer from '../../Form/FormContainer/FormContainer';

interface Props {
    registerStore: RegisterStore;
}

@observer
class RegistrationFormStepDetails extends React.Component<Props> {
    render() {
        const { registerStore } = this.props;

        return (
            <FormContainer>
                <FormItem
                    error={registerStore.fields.name.error}
                    label="Name"
                    onInputChange={registerStore.onInputChange}
                    inputType="text"
                    name="name"
                    required
                />

                <FormItem
                    label="Role"
                    onInputChange={registerStore.onInputChange}
                    inputType="text"
                    name="role"
                />

                <FormItem
                    error={registerStore.fields.email.error}
                    label="Email"
                    onInputChange={registerStore.onInputChange}
                    inputType="email"
                    name="email"
                    required
                />

                <FormItem
                    error={registerStore.fields.password.error}
                    label="Password"
                    onInputChange={registerStore.onInputChange}
                    inputType="password"
                    name="password"
                    required
                />
            </FormContainer>
        );
    }
}

export default RegistrationFormStepDetails;
