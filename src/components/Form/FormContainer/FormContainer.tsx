import React from 'react';

import './FormContainer.scss';

interface Props {

}

const FormContainer: React.FC = ({ children }) => {
    return (
        <form className="frm-Container">
            <ul className="frm-Container_Items">
                {children}
            </ul>
        </form>
    );
};

export default FormContainer;
