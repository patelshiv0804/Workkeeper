import React from 'react';
import { ArrowRight } from 'lucide-react';

const NotificationCard = ({ data, onAction }) => {
  return (
    <div className={`notification-card ${data.type}`}>
      <div className="notification-icon-wrapper">
        <div className="notification-icon">
          {data.icon}
        </div>
      </div>
      
      <div className="notification-content">
        <div className="notification-header-row">
          <div className="notification-title-group">
            <h3 className="notification-title">{data.title}</h3>
            <span className={`notification-badge ${data.type}-badge`}>
              {data.badgeText}
            </span>
          </div>
          <span className="notification-timestamp">{data.timestamp}</span>
        </div>
        
        <p className="notification-description">{data.description}</p>
        
        {data.actions && (
          <div className="notification-actions">
            {data.actions.map(action => (
              <button 
                key={action.id} 
                className={`action-btn ${action.type}`}
                onClick={() => onAction && onAction(action.id, data.id)}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
        
        {data.linkAction && (
          <a href="#" className="notification-link">
            {data.linkAction.label}
            {data.linkAction.icon && <ArrowRight size={14} />}
          </a>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;
