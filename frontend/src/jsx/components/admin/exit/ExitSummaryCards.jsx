import React from 'react';
import { LogOut, CheckCircle2 } from 'lucide-react';
import '../../../../css/components/admin/exit/ExitSummaryCards.css';

const ExitSummaryCards = () => {
  return (
    <div className="exit-summary-cards">
      {/* Total Exits */}
      <div className="exit-summary-card">
        <div className="exit-summary-icon-wrapper exit-icon-bg-orange">
          <LogOut size={24} />
        </div>
        <div className="exit-summary-content">
          <span className="exit-summary-title">Total Exits (This Month)</span>
          <span className="exit-summary-value">12</span>
        </div>
      </div>

      {/* Completed Clearances */}
      <div className="exit-summary-card">
        <div className="exit-summary-icon-wrapper exit-icon-bg-green">
          <CheckCircle2 size={24} />
        </div>
        <div className="exit-summary-content">
          <span className="exit-summary-title">Completed Clearances</span>
          <span className="exit-summary-value">28</span>
        </div>
      </div>
    </div>
  );
};

export default ExitSummaryCards;
