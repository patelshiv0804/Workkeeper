import React from 'react';
import NotificationsHeader from '../components/notifications/NotificationsHeader';
import NotificationList from '../components/notifications/NotificationList';
import FloatingHelpButton from '../components/notifications/FloatingHelpButton';
import '../../css/pages/Notifications.css';

const NotificationsPage = () => {
  return (
    <div className="notifications-page">
      <NotificationsHeader />
      <NotificationList />
      <FloatingHelpButton />
    </div>
  );
};

export default NotificationsPage;
