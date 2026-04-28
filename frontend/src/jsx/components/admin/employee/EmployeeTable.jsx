import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../../css/components/admin/employee/EmployeeTable.css';
import StatusBadge from '../shared/StatusBadge';
import Pagination from '../shared/Pagination';
import { Eye, Edit2, UserMinus } from 'lucide-react';
import { deleteEmployee } from '../../../../redux/slices/admin/employeeSlice';

const EmployeeTable = () => {
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.adminEmployee);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      dispatch(deleteEmployee(id));
    }
  };

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
                    <button 
                      className="emp-icon-btn emp-delete-btn" 
                      title="Disable/Delete"
                      onClick={() => handleDelete(emp.id)}
                    >
                      <UserMinus size={16} />
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

export default EmployeeTable;
