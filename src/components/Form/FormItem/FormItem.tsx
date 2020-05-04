import React from 'react'

import FormInput from '../FormInput/FormInput';

import './FormItem.scss';
import FormError from '../FormError/FormError';

interface Props {
    label: string;
    name: string;
    onInputChange: (value: string, fieldName: string) => void;
    checkbox?: boolean;
    error?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    inputType?: string;
    required?: boolean;
    value?: string;
}

const FormItem: React.FC<Props> = ({ checkbox, error, fullWidth, ...props }) => {
    const className = `frm-Item ${checkbox ? 'frm-Item-checkbox' : ''} ${fullWidth ? 'frm-Item-full' : ''}`;

    return (
        <li className={className}>
            <FormInput checkbox={checkbox} {...props}/>

            <FormError error={error}/>
        </li>
    );
};

export default FormItem;
