import React from 'react';
import '../../../css/pages/admin/AttendanceManagementPage.css';
import AttendanceFilters from '../../components/admin/attendance/AttendanceFilters';
import AttendanceTable from '../../components/admin/attendance/AttendanceTable';

const AttendanceManagementPage = () => {
    return (
        <div className="admin-attendance-page">
            <div className="admin-attendance-header">
                <h1 className="admin-page-title">Attendance Management</h1>
                <p className="admin-page-subtitle">Monitor and manage employee attendance records across all locations</p>
            </div>

            <div className="admin-attendance-filters">
                <AttendanceFilters />
            </div>

            <div className="admin-attendance-table-section">
                <AttendanceTable />
            </div>
        </div>
    );
};

export default AttendanceManagementPage;
