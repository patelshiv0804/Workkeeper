import React from 'react';
import { useSelector } from 'react-redux';
import '../../../../css/components/admin/leave/LeaveRequestsTable.css';
import { MoreVertical } from 'lucide-react';

const LeaveRequestsTable = () => {
  const { leaveRequests } = useSelector((state) => state.adminLeave);
  
  // Show only pending or recent requests on dashboard
  const recentRequests = leaveRequests.slice(0, 4);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pending':
        return <span className="status-badge pending">Pending</span>;
      case 'Approved':
        return <span className="status-badge approved">Approved</span>;
      case 'Rejected':
        return <span className="status-badge rejected">Rejected</span>;
      default:
        return <span className="status-badge">{status}</span>;
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
            {recentRequests.map((req) => (
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
