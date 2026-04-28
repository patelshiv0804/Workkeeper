import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sun, Globe, MapPin, LogIn, LogOut } from 'lucide-react';
import { addRecord, updateTodaySummary } from '../../../redux/slices/employee/attendanceSlice';
import '../../../css/components/attendance/MarkAttendanceCard.css';

const MarkAttendanceCard = () => {
    const dispatch = useDispatch();
    const { todaySummary } = useSelector((state) => state.attendance);
    const [location, setLocation] = useState('Office - HQ Bangalore');

    const handleMarkIn = () => {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const date = new Date().toLocaleDateString([], { month: 'short', day: '2-digit', year: 'numeric' });
        const day = new Date().toLocaleDateString([], { weekday: 'long' });

        dispatch(updateTodaySummary({
            status: 'Checked In',
            checkIn: time,
            checkOut: '--:--'
        }));

        dispatch(addRecord({
            id: Date.now(),
            date,
            day,
            in: time,
            out: '--:--',
            location,
            source: 'Web App',
            status: 'Present',
            statusColor: 'green'
        }));
    };

    const handleMarkOut = () => {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        dispatch(updateTodaySummary({
            status: 'Checked Out',
            checkOut: time
        }));
        
        // In a real app, you'd also update the record in the records array
    };

    const attendanceState = todaySummary.status === 'Checked In' ? 'checked-in' : 
                          todaySummary.status === 'Checked Out' ? 'checked-out' : 'none';

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
                    <select 
                        className="mac-select" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
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
                {attendanceState === 'checked-in' && <p>You are checked in since {todaySummary.checkIn} today.</p>}
                {attendanceState === 'checked-out' && <p>You have clocked out for today.</p>}
            </div>
        </div>
    );
};

export default MarkAttendanceCard;
