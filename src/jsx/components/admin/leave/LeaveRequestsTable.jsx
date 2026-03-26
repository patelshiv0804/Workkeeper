import React from 'react';
import '../../../../css/components/admin/leave/LeaveRequestsTable.css';
import { MoreVertical } from 'lucide-react';

const LeaveRequestsTable = () => {
  const requests = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      avatar: 'SJ',
      type: 'Sick Leave',
      dateRange: 'Oct 24 - Oct 26, 2023',
      reason: 'Severe viral fever and...',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'David Miller',
      avatar: 'DM',
      type: 'Privilege Leave',
      dateRange: 'Oct 28 - Nov 02, 2023',
      reason: 'Family vacation to Eu...',
      status: 'Approved',
    },
    {
      id: 3,
      name: 'Emily Watson',
      avatar: 'EW',
      type: 'Emergency Leave',
      dateRange: 'Oct 20 - Oct 21, 2023',
      reason: 'Personal emergency ...',
      status: 'Rejected',
    },
    {
      id: 4,
      name: 'Marcus Chen',
      avatar: 'MC',
      type: 'Casual Leave',
      dateRange: 'Nov 05, 2023',
      reason: "Friend's wedding cer...",
      status: 'Pending',
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending':
        return <span className="status-badge pending">Pending</span>;
      case 'Approved':
        return <span className="status-badge approved">Approved</span>;
      case 'Rejected':
        return <span className="status-badge rejected">Rejected</span>;
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <div className="leave-requests-card">
      <div className="table-header">
        <h2 className="table-title">Recent Leave Requests</h2>
        <a href="#" className="view-all-link">View All Requests</a>
      </div>

      <div className="table-wrapper">
        <table className="leave-requests-table">
          <thead>
            <tr>
              <th>EMPLOYEE NAME</th>
              <th>LEAVE TYPE</th>
              <th>DATE RANGE</th>
              <th>REASON</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td>
                  <div className="employee-info">
                    <div className="employee-avatar">{req.avatar}</div>
                    <span className="employee-name">{req.name}</span>
                  </div>
                </td>
                <td>{req.type}</td>
                <td>{req.dateRange}</td>
                <td className="reason-col">{req.reason}</td>
                <td>{getStatusBadge(req.status)}</td>
                <td className="action-col">
                  <button className="action-btn">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequestsTable;
