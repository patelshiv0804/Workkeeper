import React from 'react';
import { useSelector } from 'react-redux';
import '../../../css/pages/admin/AdminDashboardPage.css';
import StatsCard from '../../components/admin/shared/StatsCard';
import AttendanceChart from '../../components/admin/attendance/AttendanceChart';
import QuickActions from '../../components/admin/shared/QuickActions';
import LeaveRequestsTable from '../../components/admin/leave/LeaveRequestsTable';
import { Users, Home, CalendarOff, FileInput, Edit, LogOut } from 'lucide-react';

const AdminDashboardPage = () => {
    const { stats } = useSelector((state) => state.adminAttendance);
    const { pendingCount: leaveRequestsCount } = useSelector((state) => state.adminLeave);
    const { exitRequests } = useSelector((state) => state.adminExit);

    const statsData = [
        { title: 'PRESENT TODAY', value: stats.presentToday.toString(), icon: <Users size={24} color="#4F46E5" />, bgColor: '#EEF2FF' },
        { title: 'WFH', value: '28', icon: <Home size={24} color="#F59E0B" />, bgColor: '#FEF3C7' },
        { title: 'ON LEAVE', value: stats.onLeave.toString(), icon: <CalendarOff size={24} color="#EF4444" />, bgColor: '#FEE2E2' },
        { title: 'LEAVE REQUESTS', value: leaveRequestsCount.toString(), icon: <FileInput size={24} color="#F59E0B" />, bgColor: '#FEF3C7' },
        { title: 'ATTENDANCE CORR.', value: '15', icon: <Edit size={24} color="#4F46E5" />, bgColor: '#EEF2FF' },
        { title: 'EXIT REQUESTS', value: exitRequests.length.toString(), icon: <LogOut size={24} color="#EF4444" />, bgColor: '#FEE2E2' },
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
