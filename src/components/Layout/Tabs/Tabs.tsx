import React from 'react';

import TabView from '../../../constants/TabView';
import Tab from '../Tab/Tab';

import './Tabs.scss';

interface Props {
    activeTabIndex: number;
    views: TabView[];
    setActiveIndex: (index: number) => void;
}

const Tabs: React.FC<Props> = ({ activeTabIndex, views, setActiveIndex }) => {
    const translateValue = activeTabIndex * 100;
    const indicatorStyles = {
        width: `calc(1 / ${views.length} * 100%)`,
        transform: `translateX(${translateValue}%)`
    };

    return (
        <div className="tab-Tabs">
            <div className="tab-Tabs_Inner">
                <div className="tab-Tabs_Body">
                    <ul className="tab-Tabs_Items">
                        {views.map((view, index) => (
                            <li key={view.id} className={activeTabIndex === index
                                ? 'tab-Tabs_Item tab-Tabs_Item-active'
                                : 'tab-Tabs_Item'}
                            >
                                <Tab
                                    key={view.id}
                                    setActiveIndex={() => setActiveIndex(index)}
                                    title={view.title}/>
                            </li>
                        ))}
                    </ul>

                    <span className="tab-Tabs_ActiveIndicator" style={indicatorStyles}/>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
