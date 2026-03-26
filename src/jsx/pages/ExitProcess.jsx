import React from 'react';
import ResignationDetailsCard from '../components/exitprocess/ResignationDetailsCard';
import '../../css/pages/ExitProcess.css';

const ExitProcessPage = () => {
  return (
    <div className="exit-process-page">
      <div className="exit-process-header">
        <h1>Exit Process</h1>
        <p>Manage resignation and employee clearance details</p>
      </div>
      
      <div className="exit-process-content">
        <ResignationDetailsCard />
      </div>
    </div>
  );
};

export default ExitProcessPage;
