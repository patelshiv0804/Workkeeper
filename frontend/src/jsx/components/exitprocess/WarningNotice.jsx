import React from 'react';
import { AlertCircle } from 'lucide-react';
import '../../../css/components/exitprocess/ExitProcessComponents.css';

const WarningNotice = () => {
  return (
    <div className="warning-notice-box">
      <AlertCircle size={20} className="warning-icon-alert" />
      <p>Initiating the exit process will trigger clearance emails to IT, Finance, and Facility departments. This action is <strong>irreversible</strong> once finalized.</p>
    </div>
  );
};

export default WarningNotice;
