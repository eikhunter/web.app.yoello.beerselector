import { observable, action } from 'mobx';

import { FormValidator, FormValidatorFields } from '../utils/Validation/FormValidator';

export default class RegisterStore {
    @observable fields: FormValidatorFields = {
        name: {
            error: '',
            rule: 'required',
            value: ''
        },
        role: {
            error: '',
            rule: '',
            value: ''
        },
        email: {
            error: '',
            rule: 'required|email',
            value: ''
        },
        password: {
            error: '',
            rule: 'required|password',
            value: ''
        },
        preferenceProduct: {
            error: '',
            rule: '',
            value: ''
        },
        preferenceTeam: {
            error: '',
            rule: '',
            value: ''
        }
    };

    @action onInputChange = (value: string, fieldName: string,): void => {
        this.fields[fieldName].value = value;
        this.fields[fieldName].error = '';
    };

    @action validate = async (): Promise<boolean> => {
        return await FormValidator(this.fields);
    };
}
