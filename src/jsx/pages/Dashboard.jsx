import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/pages/Dashboard.css';
import TopCards from '../components/dashboard/TopCards';
import LeaveBalances from '../components/dashboard/LeaveBalances';
import TeamSection from '../components/dashboard/TeamSection';
import AttendanceChart from '../components/dashboard/AttendanceChart';
import LeaveTable from '../components/dashboard/LeaveTable';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard">
            {/* Dashboard Header */}
            <div className="dash-header">
                <div>
                    <h1 className="dash-title">Employee Dashboard</h1>
                    <p className="dash-subtitle">Welcome back, Alex! Here's what's happening today.</p>
                </div>
                <div className="dash-actions">
                    <button className="btn-secondary" onClick={() => console.log('Generating Report...')}>Generate Report</button>
                    <button className="btn-primary" onClick={() => navigate('/leave')}>Apply Leave</button>
                </div>
            </div>

            {/* Top Cards Section */}
            <TopCards />

            {/* Leave Balances Section */}
            <div className="section-title">
                <h2>Leave Balances</h2>
            </div>
            <LeaveBalances />

            {/* Middle Grid: Team & Chart */}
            <div className="middle-grid">
                <TeamSection />
                <AttendanceChart />
            </div>

            {/* Bottom Section: Table */}
            <div className="bottom-section">
                <h2 className="section-title-margin">Upcoming Team Leaves</h2>
                <LeaveTable />
            </div>
        </div>
    );
};

export default Dashboard;
