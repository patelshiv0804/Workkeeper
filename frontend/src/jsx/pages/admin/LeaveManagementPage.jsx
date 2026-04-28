import React from 'react';
import '../../../css/pages/admin/LeaveManagementPage.css';
import LeaveFilterBar from '../../components/admin/leave/LeaveFilterBar';
import LeaveTable from '../../components/admin/leave/LeaveTable';

const LeaveManagementPage = () => {
    return (
        <div className="admin-leave-page">
            <div className="admin-leave-header">
                <h1 className="admin-page-title">Leave Management</h1>
                <p className="admin-page-subtitle">Review and approve employee leave requests across all departments</p>
            </div>

            <div className="admin-leave-filters">
                <LeaveFilterBar />
            </div>

            <div className="admin-leave-table-section">
                <LeaveTable />
            </div>
        </div>
    );
};

export default LeaveManagementPage;
