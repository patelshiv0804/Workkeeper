import React from 'react';
import '../../../../css/components/admin/team/TeamMembersGrid.css';
import { User, Calendar, History, Edit2 } from 'lucide-react';

const TeamMemberCard = ({ member }) => {
    const isLeave = member.status === 'On Leave';
    const isWfh = member.status === 'WFH';
    
    // Determine badge color
    let statusClass = 'status-present';
    if (isWfh) statusClass = 'status-wfh';
    if (isLeave) statusClass = 'status-leave';

    return (
        <div className="team-member-card">
            {/* Header: Avatar, Name, Role, Status */}
            <div className="member-card-header">
                <div className="member-avatar-box">
                    <img 
                      src={member.avatarUrl} 
                      alt={member.name} 
                      className="member-avatar-img"
                    />
                    <div className={`member-status-dot ${statusClass}`}></div>
                </div>
                
                <div className="member-info-basic">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                </div>

                <div className={`member-status-badge ${statusClass}`}>
                    {member.status.toUpperCase()}
                </div>
            </div>

            {/* Middle Tags: Dept, Mode */}
            <div className="member-tags-row">
                <span className="member-tag tag-muted">{member.department}</span>
                <span className={`member-tag ${isWfh ? 'tag-orange' : 'tag-muted'}`}>
                    {member.workMode}
                </span>
            </div>

            {/* Shift or Leave Details */}
            <div className="member-time-info">
                {isLeave ? (
                    <div className="leave-return-info">
                        <span className="time-label">Return Date</span>
                        <span className="return-date-val">{member.returnDate}</span>
                    </div>
                ) : (
                    <>
                        <div className="shift-coverage-header">
                            <span className="time-label">Shift Coverage</span>
                            <span className="time-val">{member.shiftTime}</span>
                        </div>
                        {/* Progress Bar indicating visual shift completion */}
                        <div className="shift-progress-track">
                            <div 
                                className={`shift-progress-fill ${isWfh ? 'fill-orange' : 'fill-green'}`} 
                                style={{ width: member.progressPercent }}
                            ></div>
                        </div>
                    </>
                )}
            </div>

            {/* Actions Footer */}
            <div className="member-card-footer">
                <button className="member-action-btn" title="Profile"><User size={16} /></button>
                <div className="footer-divider"></div>
                <button className="member-action-btn" title="Calendar"><Calendar size={16} /></button>
                <div className="footer-divider"></div>
                <button className="member-action-btn" title="History"><History size={16} /></button>
                <div className="footer-divider"></div>
                <button className="member-action-btn" title="Edit"><Edit2 size={16} /></button>
            </div>
        </div>
    );
};

const TeamMembersGrid = () => {
    // Generate static mockup data matching requests using UI avatars internally linked
    const members = [
        {
            id: 1,
            name: 'Alex Rivera',
            role: 'Senior Frontend Developer',
            status: 'Present',
            department: 'Engineering',
            workMode: 'Office',
            shiftTime: '09:00 - 18:00',
            progressPercent: '60%',
            avatarUrl: 'https://i.pravatar.cc/150?u=alex'
        },
        {
            id: 2,
            name: 'Sarah Chen',
            role: 'Senior Product Designer',
            status: 'WFH',
            department: 'Product',
            workMode: 'Remote',
            shiftTime: '10:00 - 19:00',
            progressPercent: '40%',
            avatarUrl: 'https://i.pravatar.cc/150?u=sarah'
        },
        {
            id: 3,
            name: 'Elena Glass',
            role: 'UX Researcher',
            status: 'On Leave',
            department: 'Product',
            workMode: 'Sick Leave', /* Mapping leave type to work form tag locally */
            returnDate: 'Oct 24, 2023',
            avatarUrl: 'https://i.pravatar.cc/150?u=elena'
        },
        {
            id: 4,
            name: 'Marcus Volt',
            role: 'QA Engineer',
            status: 'Present',
            department: 'Engineering',
            workMode: 'Office',
            shiftTime: '09:00 - 18:00',
            progressPercent: '80%',
            avatarUrl: 'https://i.pravatar.cc/150?u=marcus'
        },
        {
            id: 5,
            name: 'Jordan Smith',
            role: 'Marketing Lead',
            status: 'WFH',
            department: 'Marketing',
            workMode: 'Remote',
            shiftTime: '09:00 - 18:00',
            progressPercent: '50%',
            avatarUrl: 'https://i.pravatar.cc/150?u=jordan'
        },
        {
            id: 6,
            name: 'Taylor Vane',
            role: 'Content Strategist',
            status: 'Present',
            department: 'Marketing',
            workMode: 'Office',
            shiftTime: '21:00 - 06:00',
            progressPercent: '30%',
            avatarUrl: 'https://i.pravatar.cc/150?u=taylor'
        }
    ];

    return (
        <div className="team-members-grid">
            {members.map(member => (
                <TeamMemberCard key={member.id} member={member} />
            ))}
        </div>
    );
};

export default TeamMembersGrid;
