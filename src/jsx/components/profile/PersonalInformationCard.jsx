import React, { useState } from 'react';
import { Edit2, Save } from 'lucide-react';
import '../../../css/components/profile/ProfileComponents.css';

const PersonalInformationCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    personalEmail: 'alex.rivera@personal.com',
    officialEmail: 'arivera@workkeeper.com',
    personalMobile: '+1 (555) 012-3456',
    alternateMobile: '+1 (555) 987-6543',
    joiningDate: 'January 15, 2022',
    employmentType: 'Full-Time'
  });

  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-card">
      <div className="card-header">
        <h3>Personal Information</h3>
        <button className="icon-btn-small" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? <Save size={16} /> : <Edit2 size={16} />}
        </button>
      </div>
      
      <div className="info-grid">
        <div className="info-item">
          <span className="info-label">PERSONAL EMAIL</span>
          {isEditing ? (
            <input type="email" name="personalEmail" value={personalInfo.personalEmail} onChange={handleChange} className="form-input" style={{ padding: '4px 8px' }} />
          ) : (
            <a href={`mailto:${personalInfo.personalEmail}`} className="info-value link">{personalInfo.personalEmail}</a>
          )}
        </div>
        
        <div className="info-item">
          <span className="info-label">OFFICIAL EMAIL</span>
          <a href={`mailto:${personalInfo.officialEmail}`} className="info-value link">{personalInfo.officialEmail}</a>
        </div>
        
        <div className="info-item">
          <span className="info-label">PERSONAL MOBILE</span>
          {isEditing ? (
             <input type="text" name="personalMobile" value={personalInfo.personalMobile} onChange={handleChange} className="form-input" style={{ padding: '4px 8px' }} />
          ) : (
            <span className="info-value">{personalInfo.personalMobile}</span>
          )}
        </div>
        
        <div className="info-item">
          <span className="info-label">ALTERNATE MOBILE</span>
          {isEditing ? (
             <input type="text" name="alternateMobile" value={personalInfo.alternateMobile} onChange={handleChange} className="form-input" style={{ padding: '4px 8px' }} />
          ) : (
            <span className="info-value">{personalInfo.alternateMobile}</span>
          )}
        </div>
        
        <div className="info-item">
          <span className="info-label">JOINING DATE</span>
          <span className="info-value">{personalInfo.joiningDate}</span>
        </div>
        
        <div className="info-item">
          <span className="info-label">EMPLOYMENT TYPE</span>
          <span className="badge-green">{personalInfo.employmentType}</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationCard;
