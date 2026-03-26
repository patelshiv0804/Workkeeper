import React from 'react';
import '../../../../css/components/admin/shared/StatsCard.css';

const StatsCard = ({ title, value, icon, bgColor }) => {
  return (
    <div className="stats-card">
      <div 
        className="stats-icon-wrapper" 
        style={{ backgroundColor: bgColor }}
      >
        {icon}
      </div>
      <div className="stats-content">
        <h3 className="stats-title">{title}</h3>
        <p className="stats-value">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
