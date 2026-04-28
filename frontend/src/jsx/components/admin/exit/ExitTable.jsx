import React from 'react';
import { Eye, FileCheck, Trash2, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import '../../../../css/components/admin/exit/ExitTable.css';

// Sample Data tailored to exactly match the request design logic
const staticExits = [
  {
    id: 1,
    name: "Sarah Jenkins",
    empId: "EMP-9021",
    avatar: "https://i.pravatar.cc/150?img=5",
    department: "Engineering",
    resignationDate: "Oct 12, 2023",
    lastWorkingDay: "Nov 15, 2023",
    reason: "Better Opportunity",
    status: "Approved",
    actionState: "approved"
  },
  {
    id: 2,
    name: "James Wilson",
    empId: "EMP-8842",
    avatar: "https://i.pravatar.cc/150?img=11",
    department: "Marketing",
    resignationDate: "Oct 18, 2023",
    lastWorkingDay: "Nov 20, 2023",
    reason: "Relocation",
    status: "Pending",
    actionState: "approve"
  },
  {
    id: 3,
    name: "Marta Rodriguez",
    empId: "EMP-7721",
    avatar: "https://i.pravatar.cc/150?img=12",
    department: "Design",
    resignationDate: "Oct 25, 2023",
    lastWorkingDay: "Dec 10, 2023",
    reason: "Career Pivot",
    status: "Pending",
    actionState: "update"
  }
];

const getStatusBadgeClass = (status) => {
  switch (status.toLowerCase()) {
    case 'approved': return 'exit-badge-approved';
    case 'pending': return 'exit-badge-pending';
    default: return '';
  }
};

const ExitTable = () => {
  return (
    <div>
      <div className="exit-table-container">
        <table className="exit-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Department</th>
              <th>Resignation</th>
              <th>Last Working Day</th>
              <th>Exit Reason</th>
              <th>Exit Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staticExits.map((exitRecord) => (
              <tr key={exitRecord.id}>
                <td>
                  <div className="exit-emp-cell">
                    <div className="exit-avatar">
                      <img src={exitRecord.avatar} alt={exitRecord.name} className="exit-avatar-img" />
                    </div>
                    <div className="exit-emp-info">
                      <span className="exit-emp-name">{exitRecord.name}</span>
                      <span className="exit-emp-id">{exitRecord.empId}</span>
                    </div>
                  </div>
                </td>
                <td>{exitRecord.department}</td>
                <td style={{whiteSpace: 'nowrap'}}>{exitRecord.resignationDate}</td>
                <td>
                  <div style={{maxWidth: '80px'}}>{exitRecord.lastWorkingDay}</div>
                </td>
                <td>
                  <div style={{maxWidth: '120px'}}>{exitRecord.reason}</div>
                </td>
                <td>
                  <span className={`exit-badge ${getStatusBadgeClass(exitRecord.status)}`}>
                    {exitRecord.status}
                  </span>
                </td>
                <td>
                  <div className="exit-actions-cell">
                    {exitRecord.actionState === 'approved' && (
                      <>
                        <button className="exit-icon-btn" title="View"><Eye size={18} /></button>
                        <button className="exit-icon-btn" title="Details"><FileCheck size={18} /></button>
                        <button className="exit-icon-btn btn-delete" title="Delete"><Trash2 size={18} /></button>
                      </>
                    )}
                    
                    {exitRecord.actionState === 'approve' && (
                      <button className="btn-approve-exit">Approve Exit</button>
                    )}
                    
                    {exitRecord.actionState === 'update' && (
                      <>
                        <button className="btn-update-clearance">Update Clearance</button>
                        <button className="exit-icon-btn" title="More Options"><MoreVertical size={18} /></button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="exit-table-footer">
        <div className="exit-footer-text">
          Showing 1 to 3 of 42 entries
        </div>
        <div className="exit-pagination-btns">
          <button className="exit-nav-btn">
            <ChevronLeft size={16} />
          </button>
          <button className="exit-page-btn active-page">1</button>
          <button className="exit-page-btn">2</button>
          <button className="exit-page-btn">3</button>
          <button className="exit-nav-btn">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitTable;
