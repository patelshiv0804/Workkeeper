import React from 'react';
import { useSelector } from 'react-redux';
import '../../css/pages/Attendance.css';
import MarkAttendanceCard from '../components/attendance/MarkAttendanceCard';
import TodaySummaryCard from '../components/attendance/TodaySummaryCard';
import AttendanceTable from '../components/attendance/AttendanceTable';

const Attendance = () => {
    const { todaySummary } = useSelector((state) => state.attendance);

    return (
        <div className="attendance-page">
            <div className="attend-header">
                <h1 className="attend-title">Attendance</h1>
                <p className="attend-subtitle">Track your daily working hours and presence</p>
            </div>

            <div className="attend-top-grid">
                <MarkAttendanceCard summary={todaySummary} />
                <TodaySummaryCard summary={todaySummary} />
            </div>

            <div className="attend-bottom-section">
                <AttendanceTable />
            </div>
        </div>
    );
};

export default Attendance;
