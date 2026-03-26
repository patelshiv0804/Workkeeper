import React from 'react';
import { RefreshCw, Monitor, ShieldCheck } from 'lucide-react';
import '../../../css/components/punchrecords/PunchRecordsComponents.css';

const SystemInfoCards = () => {
  return (
    <div className="system-info-cards">
      <div className="info-card orange-card">
        <div className="card-icon-wrapper orange">
          <RefreshCw size={20} />
        </div>
        <div className="card-content">
          <h4>Last System Sync</h4>
          <p>October 24, 2023 - 05:45 PM</p>
        </div>
      </div>
      
      <div className="info-card blue-card">
        <div className="card-icon-wrapper blue">
          <Monitor size={20} />
        </div>
        <div className="card-content">
          <h4>Terminals Online</h4>
          <p>14 of 14 machines active</p>
        </div>
      </div>
      
      <div className="info-card gray-card">
        <div className="card-icon-wrapper gray">
          <ShieldCheck size={20} />
        </div>
        <div className="card-content">
          <h4>Immutable Records</h4>
          <p>Records cannot be manually edited</p>
        </div>
      </div>
    </div>
  );
};

export default SystemInfoCards;
