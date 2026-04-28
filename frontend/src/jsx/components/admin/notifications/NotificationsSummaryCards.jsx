import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import '../../../../css/components/admin/notifications/NotificationsSummaryCards.css';

const NotificationsSummaryCards = () => {
  return (
    <div className="noti-summary-cards">
      {/* Delivered Total */}
      <div className="noti-summary-card">
        <div className="noti-summary-icon-wrapper noti-icon-bg-green">
          <CheckCircle2 size={24} />
        </div>
        <div className="noti-summary-content">
          <span className="noti-summary-title">Delivered (Total)</span>
          <span className="noti-summary-value">1,248</span>
        </div>
      </div>

      {/* Pending Queue */}
      <div className="noti-summary-card">
        <div className="noti-summary-icon-wrapper noti-icon-bg-yellow">
          <Clock size={24} />
        </div>
        <div className="noti-summary-content">
          <span className="noti-summary-title">Pending Queue</span>
          <span className="noti-summary-value">12</span>
        </div>
      </div>

      {/* Failed Delivery */}
      <div className="noti-summary-card">
        <div className="noti-summary-icon-wrapper noti-icon-bg-red">
          <AlertCircle size={24} />
        </div>
        <div className="noti-summary-content">
          <span className="noti-summary-title">Failed Delivery</span>
          <span className="noti-summary-value">5</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSummaryCards;
