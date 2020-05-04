import React from 'react'

import './FormLabel.scss'

interface Props {
    label: string;
    checkbox?: boolean;
    required?: boolean;
}

const FormLabel: React.FC<Props> = ({ children, checkbox, label, required }) => {
    const formattedLabel = required ? `${label}*` : label;

    return (
        <label className="frm-Label">
            {!checkbox && formattedLabel}
            {children}
            {checkbox && formattedLabel}
        </label>
    );
};

export default FormLabel;
