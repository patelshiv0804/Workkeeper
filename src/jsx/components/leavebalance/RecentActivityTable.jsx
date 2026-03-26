import React from 'react';

const RecentActivityTable = () => {
    const activities = [
        {
            id: 1,
            type: 'Privilege Leave',
            duration: '2 Days',
            dateRange: 'Oct 12 - Oct 13, 2025',
            reason: 'Personal work at home',
            status: 'Approved',
            statusColor: 'green'
        },
        {
            id: 2,
            type: 'Optional Leave',
            duration: '1 Day',
            dateRange: 'Nov 01, 2025',
            reason: 'Festival celebration',
            status: 'Approved',
            statusColor: 'green'
        },
        {
            id: 3,
            type: 'Loss of Pay',
            duration: '2 Days',
            dateRange: 'Aug 15 - Aug 16, 2025',
            reason: 'Medical emergency (Exceeded limit)',
            status: 'Processed',
            statusColor: 'blue'
        }
    ];

    return (
        <div className="table-responsive">
            <table className="leave-table">
                <thead>
                    <tr>
                        <th>LEAVE TYPE</th>
                        <th>DURATION</th>
                        <th>DATE RANGE</th>
                        <th>REASON</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity) => (
                        <tr key={activity.id}>
                            <td className="font-semibold text-main">{activity.type}</td>
                            <td>{activity.duration}</td>
                            <td className="text-muted">{activity.dateRange}</td>
                            <td className="text-muted">{activity.reason}</td>
                            <td>
                                <span className={`status-badge-lg badge-${activity.statusColor} align-center`}>
                                    {activity.statusColor === 'green' && <span className="status-dot dot-green"></span>}
                                    {activity.statusColor === 'blue' && <span className="status-dot dot-blue"></span>}
                                    {activity.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentActivityTable;
