import React from 'react';

import FormLabel from '../FormLabel/FormLabel';

interface Props {
    label: string;
    name: string;
    onInputChange: (value: string, fieldName: string) => void;
    disabled?: boolean;
    inputType?: string;
    required?: boolean;
    value?: string;
}

const FormCheckbox: React.FC<Props> = ({
                                           label,
                                           onInputChange,
                                           disabled,
                                           inputType,
                                           name,
                                           required,
                                           value
                                       }) => {
    return (
        <FormLabel label={label} required={required}>
            <input
                className="frm-Input"
                onChange={(e) => onInputChange(e.target.value, name)}
                disabled={disabled}
                type="checkbox"
                name={name}
                value={value}
            />
        </FormLabel>
    );
};

export default FormCheckbox;
