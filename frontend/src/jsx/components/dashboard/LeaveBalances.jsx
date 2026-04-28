import React from 'react';
import '../../../css/components/dashboard/LeaveBalances.css';

const LeaveBalances = ({ leaveBalance }) => {
    const leaves = [
        { label: 'PRIVILEGE LEAVE', value: leaveBalance.privilege.toString().padStart(2, '0'), color: 'orange' },
        { label: 'OPTIONAL LEAVE', value: leaveBalance.optional.toString().padStart(2, '0'), color: 'yellow' },
        { label: 'COMP. LEAVE', value: leaveBalance.comp.toString().padStart(2, '0'), color: 'indigo' },
        { label: 'LOSS OF PAY', value: leaveBalance.lop.toString().padStart(2, '0'), color: 'red' },
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
