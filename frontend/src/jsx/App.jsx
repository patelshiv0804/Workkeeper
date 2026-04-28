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
import Holidays from './pages/Holidays';
import Login from './pages/login';

function App() {
  return (
    <Routes>
  
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="attendance" element={<AttendanceManagementPage />} />
        <Route path="employees" element={<EmployeeManagementPage />} />
        <Route path="leave" element={<LeaveManagementPage />} />
        <Route path="shifts" element={<ShiftManagementPage />} />
        <Route path="team" element={<TeamManagementPage />} />
        <Route path="reports" element={<ReportsAnalyticsPage />} />
        <Route path="holidays" element={<HolidayCalendarPage />} />
        <Route path="roles" element={<RolesPermissionsPage />} />
        <Route path="audit" element={<AuditLogsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="exit" element={<ExitManagementPage />} />
      </Route>


      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
      <Route path="/attendance" element={<DashboardLayout><Attendance /></DashboardLayout>} />
      <Route path="/leave" element={<DashboardLayout><ApplyLeave /></DashboardLayout>} />
      <Route path="/leave-balance" element={<DashboardLayout><LeaveBalance /></DashboardLayout>} />
      <Route path="/punch-records" element={<DashboardLayout><PunchRecords /></DashboardLayout>} />
      <Route path="/holidays" element={<DashboardLayout><Holidays /></DashboardLayout>} />
      <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
      <Route path="/notifications" element={<DashboardLayout><Notifications /></DashboardLayout>} />
      <Route path="/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
      <Route path="/exit-process" element={<DashboardLayout><ExitProcess /></DashboardLayout>} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
