import React from 'react';
import '../../../css/pages/admin/TeamManagementPage.css';
import OrganizationTree from '../../components/admin/team/OrganizationTree';
import TeamStatsCards from '../../components/admin/team/TeamStatsCards';
import TeamFilterBar from '../../components/admin/team/TeamFilterBar';
import TeamMembersGrid from '../../components/admin/team/TeamMembersGrid';
import { UserPlus } from 'lucide-react';

const TeamManagementPage = () => {
    return (
        <div className="admin-team-page">
            <div className="team-split-layout">
                {/* Left Split: Vertical Nav */}
                <div className="team-left-panel">
                    <OrganizationTree />
                </div>

                {/* Right Split: Main Content Area */}
                <div className="team-right-panel">
                    {/* Header specific to the right panel content stream */}
                    <div className="team-right-header">
                        <div className="team-title-group">
                            <span className="team-top-label">ORGANIZATION OVERVIEW</span>
                            <h1 className="admin-page-title">Team Management</h1>
                            <p className="admin-page-subtitle">Manage 156 employees across 8 departments</p>
                        </div>
                        <button className="team-assign-btn">
                            <UserPlus size={18} />
                            <span>Assign Team Member</span>
                        </button>
                    </div>

                    {/* Stats, Filters, and Grid will mount here */}
                    <div className="team-content-stream">
                        <TeamStatsCards />
                        <TeamFilterBar />
                        <TeamMembersGrid />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamManagementPage;
