import React from 'react';
import '../../../../css/components/admin/leave/LeaveTable.css';
import StatusBadge from '../shared/StatusBadge';
import Pagination from '../shared/Pagination';
import { CheckCircle2, XCircle, Eye } from 'lucide-react';

const LeaveTable = () => {
  const leaves = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      designation: 'UI Designer',
      avatar: 'SJ',
      avatarColor: '#FDBA74',
      type: 'Sick Leave',
      dateRange: 'Oct 12 - Oct 14, 2023',
      duration: '3 Days',
      reason: 'Severe flu and fever symptoms',
      appliedOn: 'Oct 10, 2023',
      status: 'Pending'
    },
    {
      id: 2,
      name: 'Michael Chen',
      designation: 'Frontend Developer',
      avatar: 'MC',
      avatarColor: '#93C5FD',
      type: 'Annual Leave',
      dateRange: 'Dec 20 - Jan 02, 2024',
      duration: '14 Days',
      reason: 'End of year family vacation',
      appliedOn: 'Oct 05, 2023',
      status: 'Approved'
    },
    {
      id: 3,
      name: 'Emily Stone',
      designation: 'Product Manager',
      avatar: 'ES',
      avatarColor: '#FCA5A5',
      type: 'Maternity Leave',
      dateRange: 'Nov 01 - Feb 01, 2024',
      duration: '90 Days',
      reason: 'Maternity and postpartum care',
      appliedOn: 'Sep 28, 2023',
      status: 'Rejected'
    },
    {
      id: 4,
      name: 'Marcus Wright',
      designation: 'HR Specialist',
      avatar: 'MW',
      avatarColor: '#86EFAC',
      type: 'Personal Leave',
      dateRange: 'Oct 25, 2023',
      duration: '1 Day',
      reason: 'Attending a professional conference',
      appliedOn: 'Oct 11, 2023',
      status: 'Pending'
    }
  ];

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
            {leaves.map((leave) => (
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
                            <button className="leave-icon-btn approve-btn" title="Approve">
                            <CheckCircle2 size={18} />
                            </button>
                            <button className="leave-icon-btn reject-btn" title="Reject">
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
      
      {/* Footer rendering the text format requested */}
      <div className="leave-pagination-wrapper">
         <div className="pagination-info">Showing 1 to 4 of 24 leave requests</div>
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
