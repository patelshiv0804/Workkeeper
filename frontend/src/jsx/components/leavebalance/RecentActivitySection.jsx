import React from 'react';
import RecentActivityTable from './RecentActivityTable';
import '../../../css/components/leavebalance/RecentActivitySection.css';

const RecentActivitySection = () => {
    return (
        <div className="recent-activity-section">
            <div className="ra-header">
                <div className="ra-title-group">
                    <h2 className="ra-title">Recent Activity</h2>
                    <p className="ra-subtitle">Track your recent leave requests and approvals.</p>
                </div>
                <a href="#" className="ra-link">View All History</a>
            </div>

            <div className="card ra-table-card">
                <RecentActivityTable />
            </div>
        </div>
    );
};

export default RecentActivitySection;
