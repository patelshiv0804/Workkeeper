import React from 'react';
import '../../../css/components/leavebalance/LeaveBalanceCard.css';

const LeaveBalanceCard = ({ data }) => {
    const { title, tag, total, used, remaining, utilization, progressColor, icon } = data;

    return (
        <div className="card balance-card">
            <div className="bc-header">
                <div className="bc-icon-wrapper">
                    {icon}
                </div>
                <span className={`bc-tag ${tag === 'STANDARD' ? 'tag-standard' : 'tag-accrued'}`}>
                    {tag}
                </span>
            </div>

            <h3 className="bc-title">{title}</h3>

            <div className="bc-stats-row">
                <div className="bc-stat-col">
                    <span className="bc-stat-label">Total</span>
                    <span className="bc-stat-value text-default">{total}</span>
                </div>
                <div className="bc-stat-col">
                    <span className="bc-stat-label">Used</span>
                    <span className="bc-stat-value text-default">{used}</span>
                </div>
                <div className="bc-stat-col">
                    <span className="bc-stat-label">Remaining</span>
                    <span className={`bc-stat-value ${progressColor === 'green' ? 'text-success' : 'text-warning'}`}>
                        {remaining}
                    </span>
                </div>
            </div>

            <div className="bc-progress-section">
                <div className="bc-progress-header">
                    <span className="bc-progress-label">Utilization</span>
                    <span className="bc-progress-percent">{utilization}%</span>
                </div>
                <div className="bc-progress-bar-bg">
                    <div
                        className={`bc-progress-fill fill-${progressColor}`}
                        style={{ width: `${utilization}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default LeaveBalanceCard;
