import React from 'react';
import ExitProcessForm from './ExitProcessForm';
import WarningNotice from './WarningNotice';
import ExitActionButtons from './ExitActionButtons';
import '../../../css/components/exitprocess/ExitProcessComponents.css';

const ResignationDetailsCard = () => {
  return (
    <div className="exit-card">
      <div className="exit-card-header">
        <h2>Resignation & Clearance Details</h2>
        <div className="status-badge pending">
          <span className="dot"></span>
          Status: Pending
        </div>
      </div>
      
      <div className="exit-card-body">
        <ExitProcessForm />
        <WarningNotice />
        <ExitActionButtons />
      </div>
    </div>
  );
};

export default ResignationDetailsCard;
