import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Megaphone, CheckCircle2, MonitorDown, FileText, ChevronDown } from 'lucide-react';
import NotificationCard from './NotificationCard';
import '../../../css/components/notifications/NotificationsComponents.css';

const initialData = [
  {
    id: 1,
    type: 'danger',
    icon: <AlertTriangle size={20} />,
    title: 'You have not marked OUT for today',
    badgeText: 'MISSING ATTENDANCE ALERT',
    description: 'Our records show you clocked in at 09:00 AM but haven\'t marked your exit yet. Please ensure you clock out to avoid attendance discrepancies.',
    timestamp: '2 hours ago',
    actions: [
      { id: 'btn-clock', type: 'primary', label: 'Clock Out Now' },
      { id: 'btn-dismiss', type: 'secondary', label: 'Dismiss' }
    ]
  },
  {
    id: 2,
    type: 'warning-active',
    icon: <Megaphone size={18} />,
    title: 'Admin has updated holiday calendar',
    badgeText: 'ADMIN MESSAGE',
    description: 'The regional holiday list for Q4 has been updated. Please review the new dates added for the upcoming festive season.',
    timestamp: '4 hours ago',
    linkAction: { label: 'View Holiday Calendar', icon: true }
  },
  {
    id: 3,
    type: 'success',
    icon: <CheckCircle2 size={20} />,
    title: 'Your leave request has been approved',
    badgeText: 'LEAVE APPROVAL NOTIFICATION',
    description: 'Your annual leave application for next Friday (Oct 27) has been approved by your manager, Sarah Chen. Enjoy your time off!',
    timestamp: '5 hours ago'
  },
  {
    id: 4,
    type: 'warning',
    icon: <MonitorDown size={20} />,
    title: 'System Maintenance Scheduled',
    badgeText: 'ADMIN MESSAGE',
    description: 'WorkKeeper will be undergoing routine maintenance on Sunday, Oct 22, between 02:00 AM and 04:00 AM EST. The service may be briefly unavailable.',
    timestamp: 'Yesterday'
  },
  {
    id: 5,
    type: 'success-alt',
    icon: <FileText size={20} />,
    title: 'Payslip for September is available',
    badgeText: 'ADMIN MESSAGE',
    description: 'Your monthly payslip for September 2025 has been generated and is now available for download in the Payroll module.',
    timestamp: '2 days ago'
  }
];

const olderDummyRecords = [
  {
    id: 6,
    type: 'warning',
    icon: <Megaphone size={18} />,
    title: 'Welcome to WorkKeeper!',
    badgeText: 'SYSTEM MESSAGE',
    description: 'Explore your new dashboard and make sure to configure your profile settings.',
    timestamp: '1 week ago'
  }
];

const NotificationList = () => {
  const [notifications, setNotifications] = useState(initialData);
  const navigate = useNavigate();

  const handleAction = (actionId, notificationId) => {
    if (actionId === 'btn-dismiss') {
      setNotifications(prev => prev.filter(n => n.id !== notificationId));
    } else if (actionId === 'btn-clock') {
      navigate('/attendance');
    }
  };

  const handleLoadOlder = () => {
    setNotifications(prev => [...prev, ...olderDummyRecords]);
  };

  return (
    <div className="notification-list-container">
      <div className="notification-list">
        {notifications.map((notification) => (
          <NotificationCard 
            key={notification.id} 
            data={notification} 
            onAction={handleAction} 
          />
        ))}
      </div>
      
      <div className="load-more-container">
        <button className="load-more-btn" onClick={handleLoadOlder}>
          <span>Load Older Notifications</span>
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default NotificationList;
