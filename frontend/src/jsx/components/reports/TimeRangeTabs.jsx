import React from 'react';
import '../../../css/components/reports/ReportsComponents.css';

const TimeRangeTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Last 7 Days', 'This Month', 'Year to Date'];

  return (
    <div className="time-range-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TimeRangeTabs;
