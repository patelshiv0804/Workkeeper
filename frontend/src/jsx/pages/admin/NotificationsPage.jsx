import React from 'react';
import { Plus } from 'lucide-react';
import '../../../css/pages/admin/NotificationsPage.css';
import NotificationsFilterBar from '../../components/admin/notifications/NotificationsFilterBar';
import NotificationsTable from '../../components/admin/notifications/NotificationsTable';
import NotificationsSummaryCards from '../../components/admin/notifications/NotificationsSummaryCards';

const NotificationsPage = () => {
  return (
    <div className="notifications-page">
      {/* Page Header */}
      <div className="notifications-header">
        <div className="notifications-title-section">
          <h1>Notifications</h1>
          <p>View and manage system alerts and employee notifications</p>
        </div>
        <button className="btn-send-notification">
          <Plus size={18} />
          Send New Notification
        </button>
      </div>

      <div className="notifications-content-wrapper">
        <NotificationsFilterBar />
        <NotificationsTable />
        <NotificationsSummaryCards />
      </div>
    </div>
  );
};

export default NotificationsPage;
