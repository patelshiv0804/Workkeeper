import React from 'react';
import '../../../css/components/dashboard/LeaveTable.css';

const LeaveTable = () => {
    const leaves = [
        {
            id: 1,
            employee: {
                name: 'Sarah M.',
                avatar: 'https://ui-avatars.com/api/?name=Sarah+Miller&background=f4f4f4&color=333'
            },
            duration: '2 Days',
            dateRange: 'July 12 - July 13',
            type: 'Personal Leave',
            typeColor: 'blue',
            status: 'APPROVED',
            statusColor: 'green'
        },
        {
            id: 2,
            employee: {
                name: 'Michael K.',
                avatar: 'https://ui-avatars.com/api/?name=Michael+K&background=ebd4bd&color=333'
            },
            duration: '1 Day',
            dateRange: 'July 15',
            type: 'Sick Leave',
            typeColor: 'purple',
            status: 'PENDING',
            statusColor: 'yellow'
        }
    ];

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
                        {leaves.map((leave) => (
                            <tr key={leave.id}>
                                <td>
                                    <div className="table-employee">
                                        <img src={leave.employee.avatar} alt={leave.employee.name} className="table-avatar" />
                                        <span className="table-name">{leave.employee.name}</span>
                                    </div>
                                </td>
                                <td>{leave.duration}</td>
                                <td>{leave.dateRange}</td>
                                <td>
                                    <span className={`type-badge type-${leave.typeColor}`}>
                                        {leave.type}
                                    </span>
                                </td>
                                <td>
                                    <span className={`status-text status-${leave.statusColor}`}>
                                        {leave.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaveTable;
