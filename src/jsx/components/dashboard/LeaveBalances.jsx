import React from 'react';
import '../../../css/components/dashboard/LeaveBalances.css';

const LeaveBalances = () => {
    const leaves = [
        { label: 'PRIVILEGE LEAVE', value: '12', color: 'orange' },
        { label: 'OPTIONAL LEAVE', value: '02', color: 'yellow' },
        { label: 'COMP. LEAVE', value: '01', color: 'indigo' },
        { label: 'LOSS OF PAY', value: '00', color: 'red' },
    ];

    return (
        <div className="leave-balances-grid">
            {leaves.map((leave, index) => (
                <div key={index} className="card leave-card">
                    <p className="leave-label">{leave.label}</p>
                    <h2 className={`leave-value ${leave.color}-text`}>{leave.value}</h2>
                    <div className="leave-bar-bg">
                        <div className={`leave-bar-fill ${leave.color}-bg`}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LeaveBalances;
