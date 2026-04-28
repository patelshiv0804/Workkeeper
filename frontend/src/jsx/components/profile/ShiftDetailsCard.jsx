import React from 'react';
import { Sun, Clock } from 'lucide-react';
import '../../../css/components/profile/ProfileComponents.css';

const ShiftDetailsCard = () => {
  return (
    <div className="profile-card shift-card">
      <div className="shift-header">
        <div className="shift-title-group">
          <Sun size={18} />
          <h3>Shift Details</h3>
        </div>
        <Clock size={48} className="shift-bg-icon" />
      </div>

      <div className="shift-info">
        <p className="shift-label">CURRENT SHIFT</p>
        <h4 className="shift-value">General Day Shift</h4>
      </div>

      <div className="shift-grid">
        <div className="shift-grid-item">
          <p className="shift-label">TIMING</p>
          <p className="shift-detail">09:00 AM - 06:00 PM</p>
        </div>
        <div className="shift-grid-item">
          <p className="shift-label">TIMEZONE</p>
          <p className="shift-detail">EST (UTC-5)</p>
        </div>
      </div>

      <button className="shift-action-btn">
        REQUEST SHIFT CHANGE
      </button>
    </div>
  );
};

export default ShiftDetailsCard;
