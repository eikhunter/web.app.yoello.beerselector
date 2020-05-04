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
        // Would most likely make a new component for a checkbox, but they share very similar properties so can use styling for now
        <li className={className}>
            <FormInput checkbox={checkbox} {...props}/>

            <FormError error={error}/>
        </li>
    );
};

export default FormItem;
