import React from 'react';
import { ChevronDown } from 'lucide-react';
import '../../../css/components/notifications/NotificationsComponents.css';

const NotificationsHeader = () => {
  return (
    <div className="notifications-header">
      <div className="header-titles">
        <h1>Notifications</h1>
        <p>Stay updated with system alerts and announcements</p>
      </div>
      <div className="header-filters">
        <button className="filter-dropdown">
          <span>All Types</span>
          <ChevronDown size={16} className="dropdown-icon" />
        </button>
        <button className="filter-dropdown">
          <span>All Status</span>
          <ChevronDown size={16} className="dropdown-icon" />
        </button>
      </div>
    </div>
  );
};

export default NotificationsHeader;
