import React from 'react';

import './Tab.scss';

interface Props {
    setActiveIndex: () => void;
    title: string;
}

const Tab: React.FC<Props> = ({ setActiveIndex, title }) => {
    return (
        <button onClick={setActiveIndex} className="tab-Tab">
            <p className="tab-Tab_Text">{title}</p>
        </button>
    );
};

export default Tab;
