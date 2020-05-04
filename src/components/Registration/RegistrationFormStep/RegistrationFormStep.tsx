import React from 'react'

import RegisterStore from '../../../stores/RegisterStore';

import FormItem from '../../Form/FormItem/FormItem';
import FormContainer from '../../Form/FormContainer/FormContainer';

interface Props {
    registerStore: RegisterStore;
}

const RegistrationFormPerson: React.FC<Props> = ({ registerStore }) => {
    return (
        <FormContainer>
            <FormItem
                label="Name"
                onInputChange={registerStore.onInputChange}
                inputType="text"
                name="name"
                required
                value={registerStore.fields.name.value}
            />

            <FormItem
                label="Role"
                onInputChange={registerStore.onInputChange}
                inputType="text"
                name="role"
                value={registerStore.fields.role.value}
            />

            <FormItem
                label="Email"
                onInputChange={registerStore.onInputChange}
                inputType="email"
                name="email"
                required
                value={registerStore.fields.email.value}
            />

            <FormItem
                label="Password"
                onInputChange={registerStore.onInputChange}
                inputType="password"
                name="password"
                required
                value={registerStore.fields.password.value}
            />
        </FormContainer>
    );
};

export default RegistrationFormPerson;
