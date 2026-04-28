import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Users, Clock, Calendar,
  CalendarRange, UsersRound, FileText, CalendarDays,
  ShieldCheck, FileSearch, Bell, LogOut
} from 'lucide-react';
import '../../../../css/components/admin/layout/AdminSidebar.css';

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">
        <div className="logo-icon">
          <div className="logo-grid">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
        <h2>WorkKeeper</h2>
      </div>

      <nav className="admin-nav">
        <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/employees" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
          <Users size={20} />
          <span>Employee Management</span>
        </NavLink>

        <NavLink to="/admin/attendance" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
          <Clock size={20} />
          <span>Attendance</span>
        </NavLink>

        <NavLink to="/admin/leave" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
          <Calendar size={20} />
          <span>Leave</span>
        </NavLink>

        <NavLink to="/admin/shifts" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
          <CalendarRange size={20} />
          <span>Shift Management</span>
        </NavLink>

        <NavLink to="/admin/team" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
          <UsersRound size={20} />
          <span>Team</span>
        </NavLink>

        <NavLink to="/admin/reports" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
          <FileText size={20} />
          <span>Report</span>
        </NavLink>

        <NavLink to="/admin/holidays" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
          <CalendarDays size={20} />
          <span>Holiday Calendar</span>
        </NavLink>

        <NavLink to="/admin/roles" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
          <ShieldCheck size={20} />
          <span>Roles & Permissions</span>
        </NavLink>

        <NavLink to="/admin/audit" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
          <FileSearch size={20} />
          <span>Audit Logs</span>
        </NavLink>

        <NavLink to="/admin/notifications" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
          <Bell size={20} />
          <span>Notifications</span>
        </NavLink>

        <NavLink to="/admin/exit" className={({ isActive }) => isActive ? 'admin-nav-item active' : 'admin-nav-item'}>
          <LogOut size={20} />
          <span>Exit Process</span>
        </NavLink>
      </nav>

      {/* <div className="admin-user-profile">
        <div className="admin-avatar">AT</div>
        <div className="admin-user-info">
          <p className="admin-user-name">Alex Thompson</p>
          <p className="admin-user-role">HR Administrator</p>
        </div>
      </div> */}
    </aside>
  );
};

export default AdminSidebar;
