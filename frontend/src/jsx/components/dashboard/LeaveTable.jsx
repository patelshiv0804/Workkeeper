import React from 'react';
import '../../../css/components/dashboard/LeaveTable.css';

const LeaveTable = ({ upcomingLeaves = [] }) => {
    const getTypeColor = (type) => {
        const t = type.toLowerCase();
        if (t.includes('sick')) return 'purple';
        if (t.includes('personal')) return 'blue';
        return 'orange';
    };

    const getStatusColor = (status) => {
        const s = status.toLowerCase();
        if (s.includes('approved')) return 'green';
        if (s.includes('pending')) return 'yellow';
        return 'gray';
    };

    return (
        <div className="card table-card">
            <div className="table-responsive">
                <table className="leave-table">
                    <thead>
                        <tr>
                            <th>EMPLOYEE</th>
                            <th>DURATION</th>
                            <th>DATE RANGE</th>
                            <th>TYPE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {upcomingLeaves.map((leave) => {
                            const avatarUrl = `https://ui-avatars.com/api/?name=${leave.name.replace(' ', '+')}&background=f4f4f4&color=333`;
                            return (
                                <tr key={leave.id}>
                                    <td>
                                        <div className="table-employee">
                                            <img src={avatarUrl} alt={leave.name} className="table-avatar" />
                                            <span className="table-name">{leave.name}</span>
                                        </div>
                                    </td>
                                    <td>{leave.days}</td>
                                    <td>{leave.date}</td>
                                    <td>
                                        <span className={`type-badge type-${getTypeColor(leave.type)}`}>
                                            {leave.type}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`status-text status-${getStatusColor(leave.status)}`}>
                                            {leave.status.toUpperCase()}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaveTable;
