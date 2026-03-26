import React from 'react';
import { Info } from 'lucide-react';
import '../../../css/components/profile/ProfileComponents.css';

const AppraisalsCard = () => {
  return (
    <div className="profile-card side-card">
      <div className="card-header">
        <h3>Appraisals</h3>
        <Info size={16} className="text-muted" />
      </div>
      
      <div className="appraisal-list">
        <div className="appraisal-item">
          <div className="appraisal-row">
            <span className="appraisal-year">Year 2023</span>
            <span className="appraisal-score success">4.8 / 5.0</span>
          </div>
          <div className="appraisal-row">
            <span className="appraisal-type">Annual Review</span>
            <span className="appraisal-label">TOP PERFORMER</span>
          </div>
        </div>
        
        <div className="appraisal-item">
          <div className="appraisal-row">
            <span className="appraisal-year">Year 2022</span>
            <span className="appraisal-score primary">4.2 / 5.0</span>
          </div>
          <div className="appraisal-row">
            <span className="appraisal-type">Annual Review</span>
            <span className="appraisal-label muted">MEETING EXPECTATIONS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppraisalsCard;
