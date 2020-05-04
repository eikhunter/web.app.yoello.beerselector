import React from 'react';

import './FormError.scss';

interface Props {
    error?: string;
}

const FormError: React.FC<Props> = ({ error }) => {
    return (
        <p className={error && error.length > 0
            ? 'frm-Error frm-Error-active'
            : 'frm-Error'}>
            {error}
        </p>
    );
};

export default FormError;
