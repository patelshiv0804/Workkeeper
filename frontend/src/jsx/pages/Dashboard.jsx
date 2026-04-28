import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../../css/pages/Dashboard.css';
import TopCards from '../components/dashboard/TopCards';
import LeaveBalances from '../components/dashboard/LeaveBalances';
import TeamSection from '../components/dashboard/TeamSection';
import AttendanceChart from '../components/dashboard/AttendanceChart';
import LeaveTable from '../components/dashboard/LeaveTable';
import { fetchDashboardStats } from '../../redux/slices/employee/dashboardSlice';

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { data, loading, error } = useSelector((state) => state.dashboard);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!data) {
            dispatch(fetchDashboardStats());
        }
    }, [dispatch, data]);

    if (loading && !data) {
        return <div className="dashboard" style={{ padding: '2rem', textAlign: 'center' }}>Loading dashboard data...</div>;
    }

    if (error) {
        return <div className="dashboard" style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>{error}</div>;
    }

    if (!data) {
        return null;
    }

    return (
        <div className="dashboard">
            {/* Dashboard Header */}
            <div className="dash-header">
                <div>
                    <h1 className="dash-title">Employee Dashboard</h1>
                    <p className="dash-subtitle">Welcome back, {user?.name || data.employeeInfo.name}! Here's what's happening today.</p>
                </div>
                <div className="dash-actions">
                    <button className="btn-secondary" onClick={() => console.log('Generating Report...')}>Generate Report</button>
                    <button className="btn-primary" onClick={() => navigate('/leave')}>Apply Leave</button>
                </div>
            </div>

            {/* Top Cards Section */}
            <TopCards 
                employeeInfo={data.employeeInfo} 
                todayPresence={data.todayPresence} 
                locationStatus={data.locationStatus} 
            />

            {/* Leave Balances Section */}
            <div className="section-title">
                <h2>Leave Balances</h2>
            </div>
            <LeaveBalances leaveBalance={data.leaveBalance} />

            {/* Middle Grid: Team & Chart */}
            <div className="middle-grid">
                <TeamSection team={data.team} />
                <AttendanceChart weeklyAttendance={data.weeklyAttendance} />
            </div>

            {/* Bottom Section: Table */}
            <div className="bottom-section">
                <h2 className="section-title-margin">Upcoming Team Leaves</h2>
                <LeaveTable upcomingLeaves={data.upcomingLeaves} />
            </div>
        </div>
    );
};

export default Dashboard;
