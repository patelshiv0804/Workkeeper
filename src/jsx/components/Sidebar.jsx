import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Clock, Calendar, CalendarRange, ListTodo, FileText, Bell, User, LogOut } from 'lucide-react';
import '../../css/components/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <div className="logo-grid">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
        <h2>WorkKeeper</h2>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-list">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/attendance" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <Clock size={20} />
            <span>Attendance</span>
          </NavLink>

          <NavLink to="/leave" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <Calendar size={20} />
            <span>Leave</span>
          </NavLink>

          <NavLink to="/leave-balance" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <CalendarRange size={20} />
            <span>Leave Balance</span>
          </NavLink>

          <NavLink to="/punch-records" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <ListTodo size={20} />
            <span>Punch Records</span>
          </NavLink>

          <NavLink to="/reports" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <FileText size={20} />
            <span>Reports</span>
          </NavLink>

          <NavLink to="/notifications" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <Bell size={20} />
            <span>Notifications</span>
          </NavLink>
        </div>

        <div className="sidebar-section">
          <p className="section-title_1">SETTINGS</p>
          <div className="nav-list">
            <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
              <User size={20} />
              <span>Profile</span>
            </NavLink>

            <NavLink to="/exit-process" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
              <LogOut size={20} />
              <span>Exit Process</span>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* <div className="sidebar-footer">
        <div className="usage-card">
          <p className="usage-title">Workspace Usage</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '65%' }}></div>
          </div>
          <p className="usage-text">65% of monthly quota used</p>
        </div>
      </div> */}
    </aside>
  );
};

export default Sidebar;
