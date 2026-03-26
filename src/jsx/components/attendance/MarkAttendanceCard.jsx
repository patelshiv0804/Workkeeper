import React, { useState } from 'react';
import { Sun, Globe, MapPin, LogIn, LogOut } from 'lucide-react';
import '../../../css/components/attendance/MarkAttendanceCard.css';

const MarkAttendanceCard = () => {
    const [attendanceState, setAttendanceState] = useState('none');
    const [checkInTime, setCheckInTime] = useState('');

    const handleMarkIn = () => {
        setAttendanceState('checked-in');
        setCheckInTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    const handleMarkOut = () => {
        setAttendanceState('checked-out');
    };

    return (
        <div className="card mark-attend-card">
            <div className="mac-header">
                <div className="mac-title-group">
                    <h2 className="mac-title">Mark Attendance</h2>
                    <div className="mac-badges">
                        <span className="mac-badge bg-gray"><Sun size={14} className="mr-1" /> Morning Shift</span>
                        <span className="mac-badge bg-gray"><Globe size={14} className="mr-1" /> IST (GMT+5:30)</span>
                    </div>
                </div>
                <div className="mac-status-badge">
                    {attendanceState === 'none' && <><span className="status-dot" style={{backgroundColor: '#9ca3af'}}></span>Not Checked In</>}
                    {attendanceState === 'checked-in' && <><span className="status-dot green-dot"></span>Present</>}
                    {attendanceState === 'checked-out' && <><span className="status-dot" style={{backgroundColor: '#eab308'}}></span>Checked Out</>}
                </div>
            </div>

            <div className="mac-actions">
                <div className="mac-location">
                    <label className="mac-label"><MapPin size={16} className="mr-1" /> Work Location</label>
                    <select className="mac-select" defaultValue="Office - HQ Bangalore">
                        <option value="Office - HQ Bangalore">Office - HQ Bangalore</option>
                        <option value="Work From Home">Work From Home</option>
                    </select>
                </div>

                <div className="mac-buttons">
                    <button 
                        className="btn-mark-in" 
                        onClick={handleMarkIn}
                        disabled={attendanceState !== 'none'}
                        style={{ opacity: attendanceState !== 'none' ? 0.5 : 1, cursor: attendanceState !== 'none' ? 'not-allowed' : 'pointer' }}
                    >
                        <LogIn size={18} className="mr-2" /> Mark IN
                    </button>
                    <button 
                        className="btn-mark-out" 
                        onClick={handleMarkOut}
                        disabled={attendanceState !== 'checked-in'}
                        style={{ opacity: attendanceState !== 'checked-in' ? 0.5 : 1, cursor: attendanceState !== 'checked-in' ? 'not-allowed' : 'pointer' }}
                    >
                        <LogOut size={18} className="mr-2" /> Mark OUT
                    </button>
                </div>
            </div>

            <div className="mac-notification">
                {attendanceState === 'none' && <p>Please mark your attendance to start the day.</p>}
                {attendanceState === 'checked-in' && <p>You are checked in since {checkInTime} today.</p>}
                {attendanceState === 'checked-out' && <p>You have clocked out for today.</p>}
            </div>
        </div>
    );
};

export default MarkAttendanceCard;
