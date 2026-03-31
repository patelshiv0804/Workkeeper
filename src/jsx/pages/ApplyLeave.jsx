import React from 'react';
import '../../css/pages/ApplyLeave.css';
import LeaveFormCard from '../components/applyleave/LeaveFormCard';
import InfoCards from '../components/applyleave/InfoCards';
// import FloatingTip from '../components/applyleave/FloatingTip';

const ApplyLeave = () => {
    return (
        <div className="apply-leave-page">
            <div className="al-header">
                <h1 className="al-title">Apply Leave</h1>
                <p className="al-subtitle">Submit your leave request for approval from your manager</p>
            </div>

            <div className="al-content">
                <div className="al-main-col">
                    <LeaveFormCard />
                    <InfoCards />
                </div>

            </div>
            {/* <FloatingTip /> */}
        </div>
    );
};

export default ApplyLeave;
