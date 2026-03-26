import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import AdminLayout from './components/admin/layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import ApplyLeave from './pages/ApplyLeave';
import LeaveBalance from './pages/LeaveBalance';
import PunchRecords from './pages/PunchRecords';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import ExitProcess from './pages/ExitProcess';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AttendanceManagementPage from './pages/admin/AttendanceManagementPage';
import EmployeeManagementPage from './pages/admin/EmployeeManagementPage';
import LeaveManagementPage from './pages/admin/LeaveManagementPage';
import ShiftManagementPage from './pages/admin/ShiftManagementPage';
import TeamManagementPage from './pages/admin/TeamManagementPage';
import ReportsAnalyticsPage from './pages/admin/ReportsAnalyticsPage';
import HolidayCalendarPage from './pages/admin/HolidayCalendarPage';
import RolesPermissionsPage from './pages/admin/RolesPermissionsPage';
import AuditLogsPage from './pages/admin/AuditLogsPage';
import NotificationsPage from './pages/admin/NotificationsPage';
import ExitManagementPage from './pages/admin/ExitManagementPage';

function App() {
  return (
    <Routes>
      {/* Admin Application Scope */}
      <Route path="/admin" element={<AdminLayout><Navigate to="/admin/dashboard" replace /></AdminLayout>} />
      <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboardPage /></AdminLayout>} />
      <Route path="/admin/attendance" element={<AdminLayout><AttendanceManagementPage /></AdminLayout>} />
      <Route path="/admin/employees" element={<AdminLayout><EmployeeManagementPage /></AdminLayout>} />
      <Route path="/admin/leave" element={<AdminLayout><LeaveManagementPage /></AdminLayout>} />
      <Route path="/admin/shifts" element={<AdminLayout><ShiftManagementPage /></AdminLayout>} />
      <Route path="/admin/team" element={<AdminLayout><TeamManagementPage /></AdminLayout>} />
      <Route path="/admin/reports" element={<AdminLayout><ReportsAnalyticsPage /></AdminLayout>} />
      <Route path="/admin/holidays" element={<AdminLayout><HolidayCalendarPage /></AdminLayout>} />
      <Route path="/admin/roles" element={<AdminLayout><RolesPermissionsPage /></AdminLayout>} />
      <Route path="/admin/audit" element={<AdminLayout><AuditLogsPage /></AdminLayout>} />
      <Route path="/admin/notifications" element={<AdminLayout><NotificationsPage /></AdminLayout>} />
      <Route path="/admin/exit" element={<AdminLayout><ExitManagementPage /></AdminLayout>} />

      {/* Main Employee Application Scope */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
      <Route path="/attendance" element={<DashboardLayout><Attendance /></DashboardLayout>} />
      <Route path="/leave" element={<DashboardLayout><ApplyLeave /></DashboardLayout>} />
      <Route path="/leave-balance" element={<DashboardLayout><LeaveBalance /></DashboardLayout>} />
      <Route path="/punch-records" element={<DashboardLayout><PunchRecords /></DashboardLayout>} />
      <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
      <Route path="/notifications" element={<DashboardLayout><Notifications /></DashboardLayout>} />
      <Route path="/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
      <Route path="/exit-process" element={<DashboardLayout><ExitProcess /></DashboardLayout>} />
    </Routes>
  );
}

export default App;
