import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AlertTriangle, Megaphone, CheckCircle2, MonitorDown, FileText, ChevronDown } from 'lucide-react';
import NotificationCard from './NotificationCard';
import { removeNotification, markAsRead } from '../../../redux/slices/employee/notificationSlice';
import '../../../css/components/notifications/NotificationsComponents.css';

const NotificationList = () => {
  const { items } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getIcon = (type) => {
    switch (type) {
      case 'danger': return <AlertTriangle size={20} />;
      case 'warning-active': return <Megaphone size={18} />;
      case 'success': return <CheckCircle2 size={20} />;
      case 'warning': return <MonitorDown size={20} />;
      case 'success-alt': return <FileText size={20} />;
      default: return <Megaphone size={18} />;
    }
  };

  const handleAction = (actionId, notificationId) => {
    if (actionId === 'btn-dismiss') {
      dispatch(removeNotification(notificationId));
    } else if (actionId === 'btn-clock') {
      dispatch(markAsRead(notificationId));
      navigate('/attendance');
    }
  };

  const handleLoadOlder = () => {
    console.log('Loading older notifications...');
    // In real app, dispatch an async thunk
  };

  return (
    <div className="notification-list-container">
      <div className="notification-list">
        {items.map((notification) => (
          <NotificationCard 
            key={notification.id} 
            data={{ ...notification, icon: getIcon(notification.type) }} 
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
