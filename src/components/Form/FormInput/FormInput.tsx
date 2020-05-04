import React from 'react'

import FormLabel from '../FormLabel/FormLabel';

import './FormInput.scss';

interface Props {
    label: string;
    name: string;
    onInputChange: (value: string, fieldName: string) => void;
    checkbox?: boolean,
    checked?: boolean;
    disabled?: boolean;
    inputType?: string;
    required?: boolean;
    value?: string;
}

const FormInput: React.FC<Props> = ({
                                        label,
                                        name,
                                        onInputChange,
                                        checkbox,
                                        checked,
                                        disabled,
                                        inputType,
                                        required,
                                        value
                                    }) => {
    return (
        <FormLabel checkbox={checkbox} label={label} required={required}>
            <input
                className="frm-Input"
                onChange={(e) => onInputChange(e.target.value, name)}
                disabled={disabled}
                type={checkbox ? 'checkbox' : inputType}
                name={name}
                value={value}
                checked={checked}
            />
        </FormLabel>
    );
};

export default FormInput;
