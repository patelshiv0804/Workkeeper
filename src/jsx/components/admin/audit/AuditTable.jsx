import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../../../css/components/admin/audit/AuditTable.css';

// Sample Data
const staticLogs = [
  {
    id: 1,
    tableName: "EmployeeRecords",
    recordId: "#EMP-2041",
    action: "Insert",
    user: { name: "Sarah Jenkins", avatar: "https://i.pravatar.cc/150?img=5" },
    timestamp: "Oct 19, 2023 · 09:42 AM",
    oldValue: { type: "muted", content: "No previous value" },
    newValue: { type: "code", bgClass: "bg-gray", content: "{name: 'John Doe', posit.." }
  },
  {
    id: 2,
    tableName: "AttendanceLogs",
    recordId: "#ATT-9923",
    action: "Update",
    user: { name: "Michael Chen", avatar: "https://i.pravatar.cc/150?img=11" },
    timestamp: "Oct 18, 2023 · 04:15 PM",
    oldValue: { type: "code", bgClass: "bg-red-light", content: "clock_out: \"17:00:00\"" },
    newValue: { type: "code", bgClass: "bg-green-light", content: "clock_out: \"18:30:00\"" }
  },
  {
    id: 3,
    tableName: "LeaveRequests",
    recordId: "#LV-882",
    action: "Delete",
    user: { name: "Alex Rivera", avatar: "https://i.pravatar.cc/150?img=12" },
    timestamp: "Oct 18, 2023 · 11:20 AM",
    oldValue: { type: "code", bgClass: "bg-gray", content: "{id: 882, user_id: 12, t.." },
    newValue: { type: "danger", content: "Record deleted" }
  },
  {
    id: 4,
    tableName: "PayrollRecords",
    recordId: "#PAY-1290",
    action: "Update",
    user: { name: "Emily Watson", avatar: "https://i.pravatar.cc/150?img=9" },
    timestamp: "Oct 17, 2023 · 02:45 PM",
    oldValue: { type: "code", bgClass: "bg-transparent", content: "basic_salary: 45000.00" }, /* Special case from image if needed, or fallback bg */
    newValue: { type: "code", bgClass: "bg-transparent font-orange", content: "basic_salary: 48500.00" } /* Using standard classes below */
      }
];

// Formatting helpers
const getBadgeClass = (action) => {
  switch (action.toLowerCase()) {
    case 'insert': return 'badge-insert';
    case 'update': return 'badge-update';
    case 'delete': return 'badge-delete';
    default: return '';
  }
};

const ValueDisplay = ({ valueInfo }) => {
  if (valueInfo.type === 'muted') {
    return <span className="audit-text-muted">{valueInfo.content}</span>;
  }
  if (valueInfo.type === 'danger') {
    return <span className="audit-text-danger">{valueInfo.content}</span>;
  }
  
  // Custom case handling based on exact UI mock if class is injected
  if (valueInfo.bgClass === "bg-transparent") {
    return <span className="audit-code-block" style={{color: '#64748b'}}>{valueInfo.content}</span>;
  }
  if (valueInfo.bgClass === "bg-transparent font-orange") {
    return <span className="audit-code-block" style={{color: '#ea580c'}}>{valueInfo.content}</span>;
  }

  return (
    <span className={`audit-code-block ${valueInfo.bgClass}`}>
      {valueInfo.content}
    </span>
  );
};

const AuditTable = () => {
  return (
    <div className="audit-table-card">
      <div className="audit-table-container">
        <table className="audit-table">
          <thead>
            <tr>
              <th>Table Name</th>
              <th>Record ID</th>
              <th>Action</th>
              <th>Performed By</th>
              <th>Timestamp</th>
              <th>Old Value</th>
              <th>New Value</th>
            </tr>
          </thead>
          <tbody>
            {staticLogs.map((log) => (
              <tr key={log.id}>
                <td>
                  <div className="audit-table-name">{log.tableName}</div>
                </td>
                <td>
                  <div className="audit-record-id">
                    <div>{log.recordId.split('-')[0]}-</div>
                    <div>{log.recordId.split('-')[1]}</div>
                  </div>
                </td>
                <td>
                  <span className={`audit-badge ${getBadgeClass(log.action)}`}>
                    {log.action}
                  </span>
                </td>
                <td>
                  <div className="audit-user-info">
                    <img src={log.user.avatar} alt={log.user.name} className="audit-user-avatar" />
                    <span className="audit-user-name">{log.user.name}</span>
                  </div>
                </td>
                <td>
                  <div className="audit-timestamp">
                    <div>{log.timestamp.split('·')[0].trim()}</div>
                    <div>{log.timestamp.split('·')[1].trim()}</div>
                  </div>
                </td>
                <td>
                  <div className="audit-value-cell">
                    <ValueDisplay valueInfo={log.oldValue} />
                  </div>
                </td>
                <td>
                  <div className="audit-value-cell">
                    <ValueDisplay valueInfo={log.newValue} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer & Pagination */}
      <div className="audit-table-footer">
        <div className="audit-footer-text">
          Showing 1 to 10 of 248 logs
        </div>
        <div className="audit-pagination-btns">
          <button className="audit-nav-btn">
            <ChevronLeft size={16} />
          </button>
          <button className="audit-page-btn active-page">1</button>
          <button className="audit-page-btn">2</button>
          <button className="audit-page-btn">3</button>
          <span className="audit-page-ellipsis">...</span>
          <button className="audit-page-btn">25</button>
          <button className="audit-nav-btn">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuditTable;
