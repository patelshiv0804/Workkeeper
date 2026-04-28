import React from 'react';
import '../../../../css/components/admin/shared/QuickActions.css';
import { ChevronRight } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { label: 'Approve Leave', primary: true },
    { label: 'View Attendance Logs', primary: false },
    { label: 'Add New Employee', primary: false },
    { label: 'Generate Reports', primary: false },
  ];

  return (
    <div className="quick-actions-card">
      <h2 className="qa-title">Quick Actions</h2>
      
      <div className="qa-list">
        {actions.map((action, index) => (
          <button 
            key={index} 
            className={`qa-btn ${action.primary ? 'qa-btn-primary' : 'qa-btn-secondary'}`}
          >
            <span>{action.label}</span>
            <ChevronRight size={18} className="qa-icon" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
