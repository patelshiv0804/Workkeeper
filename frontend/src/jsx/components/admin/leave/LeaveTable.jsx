import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../../css/components/admin/leave/LeaveTable.css';
import StatusBadge from '../shared/StatusBadge';
import { CheckCircle2, XCircle, Eye } from 'lucide-react';
import { updateLeaveStatus } from '../../../../redux/slices/admin/leaveSlice';

const LeaveTable = () => {
  const dispatch = useDispatch();
  const { leaveRequests } = useSelector((state) => state.adminLeave);

  const handleStatusUpdate = (id, status) => {
    dispatch(updateLeaveStatus({ id, status }));
  };

  return (
    <div className="admin-leave-table-card">
      <div className="leave-table-wrapper">
        <table className="leave-data-table">
          <thead>
            <tr>
              <th>EMPLOYEE NAME</th>
              <th>LEAVE TYPE</th>
              <th>DATE RANGE</th>
              <th>REASON</th>
              <th>APPLIED ON</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((leave) => (
              <tr key={leave.id}>
                <td>
                  <div className="leave-emp-info">
                    <div 
                      className="leave-emp-avatar" 
                      style={{ backgroundColor: leave.avatarColor }}
                    >
                      {leave.avatar}
                    </div>
                    <div className="leave-emp-details">
                        <span className="leave-emp-name">{leave.name}</span>
                        <span className="leave-emp-desig">{leave.designation}</span>
                    </div>
                  </div>
                </td>
                <td className="leave-type-col">
                  {leave.type.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      {i !== leave.type.split(' ').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </td>
                <td>
                    <div className="leave-date-group">
                        <span className="leave-date-range">{leave.dateRange}</span>
                        <span className="leave-duration">{leave.duration}</span>
                    </div>
                </td>
                <td className="leave-reason-col">{leave.reason}</td>
                <td className="leave-applied-col">{leave.appliedOn}</td>
                <td><StatusBadge status={leave.status} /></td>
                <td className="leave-actions-col">
                  <div className="leave-action-buttons">
                    {leave.status === 'Pending' && (
                        <>
                            <button 
                              className="leave-icon-btn approve-btn" 
                              title="Approve"
                              onClick={() => handleStatusUpdate(leave.id, 'Approved')}
                            >
                            <CheckCircle2 size={18} />
                            </button>
                            <button 
                              className="leave-icon-btn reject-btn" 
                              title="Reject"
                              onClick={() => handleStatusUpdate(leave.id, 'Rejected')}
                            >
                            <XCircle size={18} />
                            </button>
                        </>
                    )}
                    <button className="leave-icon-btn view-btn" title="View">
                      <Eye size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="leave-pagination-wrapper">
         <div className="pagination-info">Showing {leaveRequests.length} of {leaveRequests.length} leave requests</div>
         <div className="pagination-controls">
            <button className="page-nav-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-nav-btn">Next</button>
         </div>
      </div>
    </div>
  );
};

export default LeaveTable;
