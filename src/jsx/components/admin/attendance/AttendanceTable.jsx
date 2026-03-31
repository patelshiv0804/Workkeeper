import React from 'react';
import '../../../../css/components/admin/attendance/AttendanceTable.css';
import StatusBadge from '../shared/StatusBadge';
import Pagination from '../shared/Pagination';
import { Edit2, RotateCcw } from 'lucide-react';

const AttendanceTable = () => {
  const records = [
    {
      id: 1,
      date: '24 Oct, 2025',
      name: 'Sarah Jenkins',
      avatar: 'SJ',
      avatarColor: '#FDBA74',
      department: 'Engineering',
      shift: 'General (9:00 - 18:00)',
      inTime: '08:52 AM',
      outTime: '--:--',
      location: 'Main Office',
      source: 'Biometric',
      status: 'Present'
    },
    {
      id: 2,
      date: '24 Oct, 2025',
      name: 'Michael Chen',
      avatar: 'MC',
      avatarColor: '#FDBA74',
      department: 'Design',
      shift: 'General (9:00 - 18:00)',
      inTime: '09:05 AM',
      outTime: '--:--',
      location: 'Remote',
      source: 'Mobile App',
      status: 'Work From Home'
    },
    {
      id: 3,
      date: '24 Oct, 2025',
      name: 'Emily Rodriguez',
      avatar: 'ER',
      avatarColor: '#FDE68A',
      department: 'Marketing',
      shift: 'General (9:00 - 18:00)',
      inTime: '--:--',
      outTime: '--:--',
      location: '--',
      source: '--',
      status: 'Absent'
    },
    {
      id: 4,
      date: '24 Oct, 2025',
      name: 'David Wilson',
      avatar: 'DW',
      avatarColor: '#A7F3D0',
      department: 'Human Resources',
      shift: 'General (9:00 - 18:00)',
      inTime: '--:--',
      outTime: '--:--',
      location: '--',
      source: 'Admin Panel',
      status: 'Leave'
    },
    {
      id: 5,
      date: '23 Oct, 2025',
      name: 'Jessica Lee',
      avatar: 'JL',
      avatarColor: '#6EE7B7',
      department: 'Finance',
      shift: 'General (9:00 - 18:00)',
      inTime: '08:45 AM',
      outTime: '06:05 PM',
      location: 'Secondary Hub',
      source: 'Biometric',
      status: 'Present'
    }
  ];

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
            {records.map((record) => (
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
