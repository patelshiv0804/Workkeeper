import React from 'react';
import '../../../css/pages/admin/AdminDashboardPage.css';
import StatsCard from '../../components/admin/shared/StatsCard';
import AttendanceChart from '../../components/admin/attendance/AttendanceChart';
import QuickActions from '../../components/admin/shared/QuickActions';
import LeaveRequestsTable from '../../components/admin/leave/LeaveRequestsTable';
import { Users, Home, CalendarOff, FileInput, Edit, LogOut } from 'lucide-react';

const AdminDashboardPage = () => {
    const statsData = [
        { title: 'PRESENT TODAY', value: '142', icon: <Users size={24} color="#4F46E5" />, bgColor: '#EEF2FF' },
        { title: 'WFH', value: '28', icon: <Home size={24} color="#F59E0B" />, bgColor: '#FEF3C7' },
        { title: 'ON LEAVE', value: '12', icon: <CalendarOff size={24} color="#EF4444" />, bgColor: '#FEE2E2' },
        { title: 'LEAVE REQUESTS', value: '8', icon: <FileInput size={24} color="#F59E0B" />, bgColor: '#FEF3C7' },
        { title: 'ATTENDANCE CORR.', value: '15', icon: <Edit size={24} color="#4F46E5" />, bgColor: '#EEF2FF' },
        { title: 'EXIT REQUESTS', value: '3', icon: <LogOut size={24} color="#EF4444" />, bgColor: '#FEE2E2' },
    ];

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <h1 className="admin-title">Admin Dashboard</h1>
                <p className="admin-subtitle">Monitor workforce activity, approvals, and attendance insights</p>
            </div>

            <div className="admin-stats-grid">
                {statsData.map((stat, index) => (
                    <StatsCard 
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                        bgColor={stat.bgColor}
                    />
                ))}
            </div>

            <div className="admin-main-content">
                <AttendanceChart />
                <QuickActions />
            </div>

            <div className="admin-recent-requests">
                <LeaveRequestsTable />
            </div>
        </div>
    );
};

export default AdminDashboardPage;
