import React from 'react';
import '../../../../css/components/admin/shared/StatusBadge.css';

const StatusBadge = ({ status }) => {
  // Determine normalized status key for CSS class mapping
  const normalizedStatus = status.toLowerCase().replace(/\s+/g, '-');

  return (
    <span className={`admin-status-badge badge-${normalizedStatus}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
