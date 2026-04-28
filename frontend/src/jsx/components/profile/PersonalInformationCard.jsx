import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Edit2, Save } from 'lucide-react';
import { updatePersonalInfo } from '../../../redux/slices/employee/profileSlice';
import '../../../css/components/profile/ProfileComponents.css';

const PersonalInformationCard = () => {
  const dispatch = useDispatch();
  const { personalInfo } = useSelector((state) => state.profile);
  const [isEditing, setIsEditing] = useState(false);
  const [localInfo, setLocalInfo] = useState(personalInfo);

  const handleChange = (e) => {
    setLocalInfo({ ...localInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updatePersonalInfo(localInfo));
    setIsEditing(false);
  };

  return (
    <div className="profile-card">
      <div className="card-header">
        <h3>Personal Information</h3>
        <button className="icon-btn-small" onClick={() => isEditing ? handleSave() : setIsEditing(true)}>
          {isEditing ? <Save size={16} /> : <Edit2 size={16} />}
        </button>
      </div>
      
      <div className="info-grid">
        <div className="info-item">
          <span className="info-label">PERSONAL EMAIL</span>
          {isEditing ? (
            <input type="email" name="personalEmail" value={localInfo.personalEmail || localInfo.email} onChange={handleChange} className="form-input" style={{ padding: '4px 8px' }} />
          ) : (
            <a href={`mailto:${personalInfo.personalEmail || personalInfo.email}`} className="info-value link">{personalInfo.personalEmail || personalInfo.email}</a>
          )}
        </div>
        
        <div className="info-item">
          <span className="info-label">OFFICIAL EMAIL</span>
          <a href={`mailto:${personalInfo.email}`} className="info-value link">{personalInfo.email}</a>
        </div>
        
        <div className="info-item">
          <span className="info-label">PERSONAL MOBILE</span>
          {isEditing ? (
             <input type="text" name="phone" value={localInfo.phone} onChange={handleChange} className="form-input" style={{ padding: '4px 8px' }} />
          ) : (
            <span className="info-value">{personalInfo.phone}</span>
          )}
        </div>
        
        <div className="info-item">
          <span className="info-label">ALTERNATE MOBILE</span>
          {isEditing ? (
             <input type="text" name="alternateMobile" value={localInfo.alternateMobile || ''} onChange={handleChange} className="form-input" style={{ padding: '4px 8px' }} />
          ) : (
            <span className="info-value">{personalInfo.alternateMobile || 'N/A'}</span>
          )}
        </div>
        
        <div className="info-item">
          <span className="info-label">JOINING DATE</span>
          <span className="info-value">{personalInfo.joiningDate}</span>
        </div>
        
        <div className="info-item">
          <span className="info-label">EMPLOYMENT TYPE</span>
          <span className="badge-green">{personalInfo.employmentType || 'Full-Time'}</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationCard;
