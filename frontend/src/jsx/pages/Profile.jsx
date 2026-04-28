import React from 'react';
import ProfileSummaryCard from '../components/profile/ProfileSummaryCard';
import PersonalInformationCard from '../components/profile/PersonalInformationCard';
import EducationSection from '../components/profile/EducationSection';
import SkillsSection from '../components/profile/SkillsSection';
import DocumentsCard from '../components/profile/DocumentsCard';
import AppraisalsCard from '../components/profile/AppraisalsCard';
import ShiftDetailsCard from '../components/profile/ShiftDetailsCard';
import '../../css/pages/Profile.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-content">
        <ProfileSummaryCard />
        
        <div className="profile-layout-grid">
          <div className="profile-left-column">
            <PersonalInformationCard />
            <EducationSection />
            <SkillsSection />
          </div>
          
          <div className="profile-right-column">
            <DocumentsCard />
            <AppraisalsCard />
            <ShiftDetailsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
