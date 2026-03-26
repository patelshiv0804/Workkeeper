import React from 'react';
import '../../../css/components/dashboard/TeamSection.css';

const TeamSection = () => {
    const team = [
        {
            id: 1,
            name: 'Sarah Miller',
            role: 'UX Researcher',
            status: 'PRESENT',
            statusColor: 'green',
            avatar: 'https://ui-avatars.com/api/?name=Sarah+Miller&background=f4f4f4&color=333'
        },
        {
            id: 2,
            name: 'David Chen',
            role: 'UI Designer',
            status: 'WFH',
            statusColor: 'yellow',
            avatar: 'https://ui-avatars.com/api/?name=David+Chen&background=333&color=fff'
        },
        {
            id: 3,
            name: 'Emily Watson',
            role: 'Motion Artist',
            status: 'ON LEAVE',
            statusColor: 'gray',
            avatar: 'https://ui-avatars.com/api/?name=Emily+Watson&background=ffd1b3&color=333'
        }
    ];

    return (
        <div className="card team-card">
            <div className="team-header">
                <h3 className="team-title">Your Team</h3>
                <button className="view-all-btn">View All</button>
            </div>

            <div className="team-list">
                {team.map((member) => (
                    <div key={member.id} className="team-member">
                        <div className="member-avatar-wrapper">
                            <img src={member.avatar} alt={member.name} className="member-avatar" />
                            <div className={`status-indicator indicator-${member.statusColor}`}></div>
                        </div>

                        <div className="member-info">
                            <h4 className="member-name">{member.name}</h4>
                            <p className="member-role">{member.role}</p>
                        </div>

                        <div className={`member-badge badge-${member.statusColor}`}>
                            {member.status}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
