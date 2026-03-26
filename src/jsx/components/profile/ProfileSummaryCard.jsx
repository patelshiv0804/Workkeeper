import React from 'react';
import { MapPin, Calendar, Briefcase, Camera, Edit2, MoreVertical } from 'lucide-react';
import '../../../css/components/profile/ProfileComponents.css';

const ProfileSummaryCard = () => {
  return (
    <div className="profile-card summary-card">
      <div className="summary-left">
        <div className="profile-avatar-wrapper">
          <img src="https://i.pravatar.cc/150?img=12" alt="Alex Rivera" className="profile-avatar-large" />
          <button className="avatar-edit-btn">
            <Camera size={14} />
          </button>
        </div>
        
        <div className="summary-info">
          <h2>Alex Rivera</h2>
          <p className="summary-role">Senior Developer | Engineering</p>
          
          <div className="summary-meta">
            <div className="meta-item">
              <Briefcase size={16} />
              <span>WK-1024</span>
            </div>
            <div className="meta-item">
              <MapPin size={16} />
              <span>Remote, US</span>
            </div>
            <div className="meta-item">
              <Calendar size={16} />
              <span>Joined Jan 2022</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="summary-right">
        <button className="edit-profile-btn">
          <Edit2 size={16} />
          <span>Edit Profile</span>
        </button>
        <button className="more-options-btn">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProfileSummaryCard;
