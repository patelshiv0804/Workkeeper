import React from 'react';
import '../../css/pages/LeaveBalance.css';
import LeaveBalanceGrid from '../components/leavebalance/LeaveBalanceGrid';
import RecentActivitySection from '../components/leavebalance/RecentActivitySection';

const LeaveBalance = () => {
    return (
        <div className="leave-balance-page">
            <div className="lb-header">
                <h1 className="lb-title">Leave Balance</h1>
                <p className="lb-subtitle">View your remaining leave summary for the current calendar year.</p>
            </div>

            <LeaveBalanceGrid />
            <RecentActivitySection />
        </div>
    );
};

export default LeaveBalance;
