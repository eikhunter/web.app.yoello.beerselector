import React from 'react'

import './FormLabel.scss'

interface Props {
    label: string;
    required?: boolean;
}

const FormLabel: React.FC<Props> = ({ children, label, required }) => {
    const formattedLabel = required ? `${label}*` : label;

    return (
        <label className="frm-Label">
            {formattedLabel}
            {children}
        </label>
    );
};

export default FormLabel;
