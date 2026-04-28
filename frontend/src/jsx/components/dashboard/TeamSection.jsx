import React from 'react';
import '../../../css/components/dashboard/TeamSection.css';

const TeamSection = ({ team = [] }) => {
    const getStatusColor = (status) => {
        const s = status.toLowerCase();
        if (s === 'present') return 'green';
        if (s === 'wfh') return 'yellow';
        return 'gray';
    };

    return (
        <div className="card team-card">
            <div className="team-header">
                <h3 className="team-title">Your Team</h3>
                <button className="view-all-btn">View All</button>
            </div>

            <div className="team-list">
                {team.map((member, index) => {
                    const statusColor = getStatusColor(member.status);
                    const avatarUrl = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=f4f4f4&color=333`;
                    
                    return (
                        <div key={index} className="team-member">
                            <div className="member-avatar-wrapper">
                                <img src={avatarUrl} alt={member.name} className="member-avatar" />
                                <div className={`status-indicator indicator-${statusColor}`}></div>
                            </div>

                            <div className="member-info">
                                <h4 className="member-name">{member.name}</h4>
                                <p className="member-role">Team Member</p>
                            </div>

                            <div className={`member-badge badge-${statusColor}`}>
                                {member.status.toUpperCase()}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamSection;
