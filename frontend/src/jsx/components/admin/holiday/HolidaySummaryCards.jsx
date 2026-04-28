import React from 'react';
import { CalendarDays, Clock, Building2 } from 'lucide-react';
import '../../../../css/components/admin/holiday/HolidaySummaryCards.css';

const HolidaySummaryCards = () => {
  return (
    <div className="holiday-summary-cards">
      {/* Total Holidays */}
      <div className="holiday-summary-card">
        <div className="holiday-summary-icon-wrapper icon-bg-purple">
          <CalendarDays size={24} />
        </div>
        <div className="holiday-summary-content">
          <span className="holiday-summary-title">Total Holidays</span>
          <span className="holiday-summary-value">24 Days</span>
        </div>
      </div>

      {/* Next Holiday */}
      <div className="holiday-summary-card">
        <div className="holiday-summary-icon-wrapper icon-bg-orange">
          <Clock size={24} />
        </div>
        <div className="holiday-summary-content">
          <span className="holiday-summary-title">Next Holiday</span>
          <span className="holiday-summary-value">12 Days Left</span>
        </div>
      </div>

      {/* Offices Covered */}
      <div className="holiday-summary-card">
        <div className="holiday-summary-icon-wrapper icon-bg-green">
          <Building2 size={24} />
        </div>
        <div className="holiday-summary-content">
          <span className="holiday-summary-title">Offices Covered</span>
          <span className="holiday-summary-value">4 Offices</span>
        </div>
      </div>
    </div>
  );
};

export default HolidaySummaryCards;
