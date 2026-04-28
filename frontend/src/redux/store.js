import { configureStore } from '@reduxjs/toolkit';

// Employee Slices
import authReducer from './slices/employee/authSlice';
import dashboardReducer from './slices/employee/dashboardSlice';
import attendanceReducer from './slices/employee/attendanceSlice';
import leaveReducer from './slices/employee/leaveSlice';
import notificationReducer from './slices/employee/notificationSlice';
import profileReducer from './slices/employee/profileSlice';
import holidayReducer from './slices/employee/holidaySlice';
import exitReducer from './slices/employee/exitSlice';

// Admin Slices
import adminAuthReducer from './slices/admin/authSlice';
import adminEmployeeReducer from './slices/admin/employeeSlice';
import adminAttendanceReducer from './slices/admin/attendanceSlice';
import adminLeaveReducer from './slices/admin/leaveSlice';
import adminShiftReducer from './slices/admin/shiftSlice';
import adminTeamReducer from './slices/admin/teamSlice';
import adminRoleReducer from './slices/admin/roleSlice';
import adminNotificationReducer from './slices/admin/notificationSlice';
import adminHolidayReducer from './slices/admin/holidaySlice';
import adminReportReducer from './slices/admin/reportSlice';
import adminAuditReducer from './slices/admin/auditSlice';
import adminExitReducer from './slices/admin/exitSlice';

export const store = configureStore({
  reducer: {
    // Employee
    auth: authReducer,
    dashboard: dashboardReducer,
    attendance: attendanceReducer,
    leave: leaveReducer,
    notifications: notificationReducer,
    profile: profileReducer,
    holiday: holidayReducer,
    exit: exitReducer,

    // Admin
    adminAuth: adminAuthReducer,
    adminEmployee: adminEmployeeReducer,
    adminAttendance: adminAttendanceReducer,
    adminLeave: adminLeaveReducer,
    adminShift: adminShiftReducer,
    adminTeam: adminTeamReducer,
    adminRole: adminRoleReducer,
    adminNotification: adminNotificationReducer,
    adminHoliday: adminHolidayReducer,
    adminReport: adminReportReducer,
    adminAudit: adminAuditReducer,
    adminExit: adminExitReducer,
  },
});

export default store;
