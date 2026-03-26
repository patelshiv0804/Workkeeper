import React from 'react';
import { Shield, BookUser, User, ChevronLeft, ChevronRight } from 'lucide-react';
import '../../../../css/components/admin/roles/RolesTable.css';
import StatusBadge from '../shared/StatusBadge';

// Sample Data
const staticRoles = [
  {
    id: 1,
    name: "Super Admin",
    icon: <Shield size={18} />,
    iconClass: "bg-orange-light",
    description: "Unrestricted access to all system features",
    permissions: [{ name: "Full Access", type: "full-access" }],
    usersCount: 5,
    userAvatars: [
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=2",
      "https://i.pravatar.cc/150?img=3"
    ],
    status: "Active"
  },
  {
    id: 2,
    name: "HR Manager",
    icon: <BookUser size={18} />,
    iconClass: "bg-green-light",
    description: "Control over employee profiles and hiring",
    permissions: [
      { name: "Employees", type: "standard" },
      { name: "Payroll", type: "standard" },
      { name: "+3 More", type: "standard" }
    ],
    usersCount: 12,
    userAvatars: [null, null, null],
    status: "Active"
  },
  {
    id: 3,
    name: "Employee",
    icon: <User size={18} />,
    iconClass: "bg-gray-light",
    description: "Standard access to personal portal",
    permissions: [
      { name: "Attendance", type: "standard" },
      { name: "Leave Req", type: "standard" }
    ],
    usersCount: 453,
    userAvatars: [null, null, null],
    status: "Inactive"
  }
];

const AvatarGroup = ({ avatars, count }) => {
  const displayAvatars = avatars.slice(0, 3);
  const remaining = count > 3 ? count - 3 : 0;

  return (
    <div className="roles-users-cell">
      <div className="avatar-group">
        {displayAvatars.map((src, idx) => (
          <div key={idx} className="avatar-item">
            {src ? <img src={src} alt="avatar" /> : null}
          </div>
        ))}
        {remaining > 0 && (
          <div className="avatar-item avatar-count">
            +{remaining}
          </div>
        )}
      </div>
      <div className="roles-users-text">
        <span className="roles-users-number">{count}</span>
        <span>Users</span>
      </div>
    </div>
  );
};

const RolesTable = () => {
  return (
    <div className="roles-table-card">
      <div className="roles-table-container">
        <table className="roles-table">
          <thead>
            <tr>
              <th>Role Name</th>
              <th>Description</th>
              <th>Permissions</th>
              <th>Assigned Users</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {staticRoles.map((role) => (
              <tr key={role.id}>
                <td>
                  <div className="roles-name-cell">
                    <div className={`roles-icon-wrapper ${role.iconClass}`}>
                      {role.icon}
                    </div>
                    {role.name}
                  </div>
                </td>
                <td>
                  <div className="roles-desc-cell" title={role.description}>
                    {role.description}
                  </div>
                </td>
                <td>
                  <div className="roles-permissions-cell">
                    {role.permissions.map((perm, idx) => (
                      <span key={idx} className={`permission-tag ${perm.type}`}>
                        {perm.name}
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <AvatarGroup avatars={role.userAvatars} count={role.usersCount} />
                </td>
                <td>
                  <StatusBadge status={role.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer & Pagination */}
      <div className="roles-table-footer">
        <div className="roles-footer-text">
          Showing <strong>1-4</strong> of <strong>14</strong> roles
        </div>
        <div className="roles-pagination-btns">
          <button className="roles-nav-btn">
            <ChevronLeft size={16} />
          </button>
          <button className="roles-page-btn active-page">1</button>
          <button className="roles-page-btn">2</button>
          <button className="roles-page-btn">3</button>
          <button className="roles-nav-btn">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RolesTable;
