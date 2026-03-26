import React, { useState } from 'react';
import { Calendar, Monitor, Smartphone, Cpu, XCircle } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../css/components/attendance/AttendanceTable.css';

const AttendanceTable = () => {
    const [startDate, setStartDate] = useState(new Date('2025-10-20'));
    const [endDate, setEndDate] = useState(new Date('2025-10-27'));

    const records = [
        {
            id: 1,
            date: 'Oct 26, 2025',
            day: 'Thursday',
            in: '09:05 AM',
            out: '06:15 PM',
            location: 'Office',
            source: 'Web App',
            sourceIcon: <Monitor size={14} className="icon-margin" />,
            status: 'Present',
            statusColor: 'green'
        },
        {
            id: 2,
            date: 'Oct 25, 2025',
            day: 'Wednesday',
            in: '08:58 AM',
            out: '05:45 PM',
            location: 'Work From Home',
            source: 'Mobile App',
            sourceIcon: <Smartphone size={14} className="icon-margin" />,
            status: 'WFH',
            statusColor: 'yellow'
        },
        {
            id: 3,
            date: 'Oct 24, 2025',
            day: 'Tuesday',
            in: '--:--',
            out: '--:--',
            location: 'None',
            source: 'System',
            sourceIcon: <Monitor size={14} className="icon-margin" />,
            status: 'Absent',
            statusColor: 'red'
        },
        {
            id: 4,
            date: 'Oct 23, 2025',
            day: 'Monday',
            in: '09:12 AM',
            out: '06:02 PM',
            location: 'Office',
            source: 'Punch Machine',
            sourceIcon: <Cpu size={14} className="icon-margin" />,
            status: 'Leave',
            statusColor: 'blue'
        },
        {
            id: 5,
            date: 'Oct 22, 2025',
            day: 'Weekend',
            in: '--:--',
            out: '--:--',
            location: 'N/A',
            source: 'None',
            sourceIcon: <XCircle size={14} className="icon-margin text-muted" />,
            status: 'Not Logged',
            statusColor: 'gray'
        }
    ];

    return (
        <div className="attendance-table-container">
            <div className="table-header-controls">
                <h3 className="section-title">Weekly Attendance Records</h3>

                <div className="table-actions">
                    <div className="toggle-group">
                        <button className="toggle-btn active">Week</button>
                        <button className="toggle-btn">Month</button>
                    </div>

                    <div className="attendance-date-range">
                        <div className="mini-datepicker-wrapper">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                className="mini-datepicker-input"
                                placeholderText="Start date"
                                dateFormat="MMM d, yyyy"
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                            <Calendar size={14} className="input-icon-left text-muted" />
                        </div>
                        <span className="date-separator">to</span>
                        <div className="mini-datepicker-wrapper">
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                className="mini-datepicker-input"
                                placeholderText="End date"
                                dateFormat="MMM d, yyyy"
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                            <Calendar size={14} className="input-icon-left text-muted" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card table-card">
                <div className="table-responsive">
                    <table className="leave-table">
                        <thead>
                            <tr>
                                <th>DATE</th>
                                <th>IN TIME</th>
                                <th>OUT TIME</th>
                                <th>WORK LOCATION</th>
                                <th>SOURCE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((record) => (
                                <tr key={record.id}>
                                    <td>
                                        <div className="date-cell">
                                            <span className="date-main">{record.date}</span>
                                            <span className="date-sub">{record.day}</span>
                                        </div>
                                    </td>
                                    <td>{record.in}</td>
                                    <td>{record.out}</td>
                                    <td className={record.location === 'None' || record.location === 'N/A' ? 'text-muted' : ''}>
                                        {record.location}
                                    </td>
                                    <td>
                                        <div className="source-badge">
                                            {record.sourceIcon}
                                            {record.source}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-badge-lg badge-${record.statusColor}`}>
                                            {record.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="table-footer-actions">
                <button className="btn-outline-orange">
                    View Punch Machine Records
                </button>
            </div>
        </div>
    );
};

export default AttendanceTable;
