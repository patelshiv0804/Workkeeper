import React from 'react';
import '../../../css/pages/admin/EmployeeManagementPage.css';
import EmployeeFilterBar from '../../components/admin/employee/EmployeeFilterBar';
import EmployeeTable from '../../components/admin/employee/EmployeeTable';

const EmployeeManagementPage = () => {
    return (
        <div className="admin-emp-page">
            <div className="admin-emp-header">
                <h1 className="admin-page-title">Employee Management</h1>
                <p className="admin-page-subtitle">Manage employee records, roles and organizational assignments</p>
            </div>

            <div className="admin-emp-filters">
                <EmployeeFilterBar />
            </div>

            <div className="admin-emp-table-section">
                <EmployeeTable />
            </div>
        </div>
    );
};

export default EmployeeManagementPage;
