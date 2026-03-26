import React from 'react';
import { Plus } from 'lucide-react';
import '../../../css/pages/admin/RolesPermissionsPage.css';
import RolesFilterBar from '../../components/admin/roles/RolesFilterBar';
import RolesTable from '../../components/admin/roles/RolesTable';
import RolesSummaryCards from '../../components/admin/roles/RolesSummaryCards';

const RolesPermissionsPage = () => {
  return (
    <div className="roles-permissions-page">
      {/* Page Header */}
      <div className="roles-header">
        <div className="roles-title-section">
          <h1>Roles & Permissions</h1>
          <p>Manage role-based access control and permission assignments across the organization.</p>
        </div>
        <button className="btn-create-role">
          <Plus size={18} />
          Create Role
        </button>
      </div>

      <div className="roles-content-wrapper">
        <RolesFilterBar />
        <RolesTable />
        <RolesSummaryCards />
      </div>
    </div>
  );
};

export default RolesPermissionsPage;
