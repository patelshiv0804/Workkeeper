import React from 'react';
import '../../../../css/components/admin/team/TeamStatsCards.css';
import { Users, UserCheck, Home, CalendarOff } from 'lucide-react';

const TeamStatsCards = () => {
    return (
        <div className="team-stats-grid">
            {/* Total Members */}
            <div className="team-stat-card">
                <div className="team-stat-header">
                    <div className="team-icon-box neutral-box">
                        <Users size={20} className="icon-neutral" />
                    </div>
                    <span className="team-stat-tag tag-green">+4 this month</span>
                </div>
                <div className="team-stat-body">
                    <span className="team-stat-label">TOTAL MEMBERS</span>
                    <span className="team-stat-value">156</span>
                </div>
            </div>

            {/* Present Today */}
            <div className="team-stat-card">
                <div className="team-stat-header">
                    <div className="team-icon-box green-box">
                        <UserCheck size={20} className="icon-green" />
                    </div>
                    <span className="team-stat-tag tag-neutral">84% Rate</span>
                </div>
                <div className="team-stat-body">
                    <span className="team-stat-label">PRESENT TODAY</span>
                    <span className="team-stat-value">131</span>
                </div>
            </div>

            {/* WFH */}
            <div className="team-stat-card">
                <div className="team-stat-header">
                    <div className="team-icon-box yellow-box">
                        <Home size={20} className="icon-yellow" />
                    </div>
                    <span className="team-stat-tag tag-orange">Remote</span>
                </div>
                <div className="team-stat-body">
                    <span className="team-stat-label">WORKING FROM HOME</span>
                    <span className="team-stat-value">45</span>
                </div>
            </div>

            {/* On Leave */}
            <div className="team-stat-card">
                <div className="team-stat-header">
                    <div className="team-icon-box red-box">
                        <CalendarOff size={20} className="icon-red" />
                    </div>
                    <span className="team-stat-tag tag-red">High</span>
                </div>
                <div className="team-stat-body">
                    <span className="team-stat-label">ON LEAVE</span>
                    <span className="team-stat-value">12</span>
                </div>
            </div>
        </div>
    );
};

export default TeamStatsCards;
