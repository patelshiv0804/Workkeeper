import React from 'react';
import '../../../../css/components/admin/team/TeamFilterBar.css';
import { Filter, ChevronDown, Grid, List } from 'lucide-react';

const TeamFilterBar = () => {
    return (
        <div className="team-filter-bar">
            
            <div className="team-filter-chips">
                {/* Status */}
                <div className="team-chip">
                    <Filter size={14} className="chip-icon-orange" />
                    <span>Status: All</span>
                    <ChevronDown size={14} className="chip-chevron" />
                </div>
                
                {/* Dept */}
                <div className="team-chip">
                    <span className="chip-prefix">Dept:</span>
                    <span>Engineering</span>
                    <ChevronDown size={14} className="chip-chevron" />
                </div>
                
                {/* Team */}
                <div className="team-chip">
                    <span className="chip-prefix">Team:</span>
                    <span>Frontend</span>
                    <ChevronDown size={14} className="chip-chevron" />
                </div>

                {/* Location */}
                <div className="team-chip">
                    <span className="chip-prefix">Location</span>
                    <ChevronDown size={14} className="chip-chevron" />
                </div>
            </div>

            <div className="team-view-toggles">
                <span className="view-label">View:</span>
                <div className="toggle-group">
                    <button className="view-btn active"><Grid size={16} /></button>
                    <button className="view-btn"><List size={16} /></button>
                </div>
            </div>

        </div>
    );
};

export default TeamFilterBar;
