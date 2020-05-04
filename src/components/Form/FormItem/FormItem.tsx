import React from 'react'

import FormInput from '../FormInput/FormInput';

import './FormItem.scss';
import FormError from '../FormError/FormError';

interface Props {
    label: string;
    name: string;
    onInputChange: (value: string, fieldName: string) => void;
    error?: string;
    disabled?: boolean;
    inputType?: string;
    required?: boolean;
    value?: string;
}

const FormItem: React.FC<Props> = ({ error, ...props }) => {
    return (
        <li className="frm-Item">
            <FormInput {...props}/>

            <FormError error={error}/>
        </li>
    );
};

export default FormItem;
