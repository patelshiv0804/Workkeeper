import React from 'react';
import '../../../../css/components/admin/employee/EmployeeTable.css';
import StatusBadge from '../shared/StatusBadge';
import Pagination from '../shared/Pagination';
import { Eye, Edit2, UserMinus } from 'lucide-react';

const EmployeeTable = () => {
  const employees = [
    {
      id: 'WK-1024',
      name: 'Michael Chen',
      avatar: 'MC',
      avatarColor: '#FDBA74',
      department: 'Engineering',
      designation: 'Senior Frontend Dev',
      email: 'm.chen@workkeeper.io',
      status: 'Active',
      role: 'Member'
    },
    {
      id: 'WK-1025',
      name: 'Sarah Jenkins',
      avatar: 'SJ',
      avatarColor: '#FDE68A',
      department: 'Product',
      designation: 'Product Manager',
      email: 's.jenkins@workkeeper.io',
      status: 'Probation',
      role: 'Lead'
    },
    {
      id: 'WK-1012',
      name: 'David Wilson',
      avatar: 'DW',
      avatarColor: '#A7F3D0',
      department: 'Marketing',
      designation: 'SEO Strategist',
      email: 'd.wilson@workkeeper.io',
      status: 'Inactive',
      role: 'Member'
    },
    {
      id: 'WK-1030',
      name: 'Elena Gilbert',
      avatar: 'EG',
      avatarColor: '#6EE7B7',
      department: 'Design',
      designation: 'UX Researcher',
      email: 'e.gilbert@workkeeper.io',
      status: 'Active',
      role: 'Member'
    }
  ];

  return (
    <div className="admin-emp-table-card">
      <div className="emp-table-wrapper">
        <table className="emp-data-table">
          <thead>
            <tr>
              <th>EMPLOYEE ID</th>
              <th>EMPLOYEE NAME</th>
              <th>DEPARTMENT</th>
              <th>DESIGNATION</th>
              <th>EMAIL</th>
              <th>STATUS</th>
              <th>ROLE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td className="emp-id-col">{emp.id}</td>
                <td>
                  <div className="emp-info">
                    <div 
                      className="emp-avatar" 
                      style={{ backgroundColor: emp.avatarColor }}
                    >
                      {emp.avatar}
                    </div>
                    <span className="emp-name">{emp.name}</span>
                  </div>
                </td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td className="emp-email-col">{emp.email}</td>
                <td><StatusBadge status={emp.status} /></td>
                <td className="emp-role-col">{emp.role}</td>
                <td className="emp-actions-col">
                  <div className="emp-action-buttons">
                    <button className="emp-icon-btn" title="View">
                      <Eye size={16} />
                    </button>
                    <button className="emp-icon-btn" title="Edit">
                      <Edit2 size={16} />
                    </button>
                    <button className="emp-icon-btn emp-delete-btn" title="Disable/Delete">
                      <UserMinus size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Reusing Pagination Component - hardcoded numbers can be parameterized in the future if needed */}
      <Pagination />
    </div>
  );
};

export default EmployeeTable;
