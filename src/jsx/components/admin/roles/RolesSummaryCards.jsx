import React from 'react';
import { ShieldCheck, KeyRound, Users } from 'lucide-react';
import '../../../../css/components/admin/roles/RolesSummaryCards.css';

const RolesSummaryCards = () => {
  return (
    <div className="roles-summary-cards">
      {/* Active Roles */}
      <div className="roles-summary-card">
        <div className="roles-summary-icon-wrapper icon-bg-red">
          <ShieldCheck size={24} />
        </div>
        <div className="roles-summary-content">
          <span className="roles-summary-title">Active Roles</span>
          <span className="roles-summary-value">14</span>
        </div>
      </div>

      {/* Total Permissions */}
      <div className="roles-summary-card">
        <div className="roles-summary-icon-wrapper icon-bg-yellow">
          <KeyRound size={24} />
        </div>
        <div className="roles-summary-content">
          <span className="roles-summary-title">Total Permissions</span>
          <span className="roles-summary-value">42</span>
        </div>
      </div>

      {/* Users Assigned */}
      <div className="roles-summary-card">
        <div className="roles-summary-icon-wrapper icon-bg-green">
          <Users size={24} />
        </div>
        <div className="roles-summary-content">
          <span className="roles-summary-title">Users Assigned</span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span className="roles-summary-value">520</span>
            <span className="roles-summary-label">Employees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesSummaryCards;
