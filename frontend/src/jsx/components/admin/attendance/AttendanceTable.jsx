import React from 'react';
import { useSelector } from 'react-redux';
import '../../../../css/components/admin/attendance/AttendanceTable.css';
import StatusBadge from '../shared/StatusBadge';
import Pagination from '../shared/Pagination';
import { Edit2, RotateCcw } from 'lucide-react';

const AttendanceTable = () => {
  const { attendanceLogs } = useSelector((state) => state.adminAttendance);

  return (
    <div className="admin-table-card">
      <div className="table-wrapper">
        <table className="attendance-data-table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>EMPLOYEE NAME</th>
              <th>DEPARTMENT</th>
              <th>SHIFT</th>
              <th>IN TIME</th>
              <th>OUT TIME</th>
              <th>WORK LOCATION</th>
              <th>SOURCE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {attendanceLogs.map((record) => (
              <tr key={record.id}>
                <td className="date-col">{record.date}</td>
                <td>
                  <div className="employee-info">
                    <div 
                      className="employee-avatar" 
                      style={{ backgroundColor: record.avatarColor }}
                    >
                      {record.avatar}
                    </div>
                    <span className="employee-name">{record.name}</span>
                  </div>
                </td>
                <td>{record.department}</td>
                <td className="shift-col">{record.shift}</td>
                <td className="time-col">{record.inTime}</td>
                <td className="time-col">{record.outTime}</td>
                <td>{record.location}</td>
                <td>{record.source}</td>
                <td><StatusBadge status={record.status} /></td>
                <td className="actions-col">
                  <div className="action-buttons">
                    <button className="icon-btn" title="Edit">
                      <Edit2 size={16} />
                    </button>
                    <button className="icon-btn" title="History">
                      <RotateCcw size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <Pagination />
    </div>
  );
};

export default AttendanceTable;
