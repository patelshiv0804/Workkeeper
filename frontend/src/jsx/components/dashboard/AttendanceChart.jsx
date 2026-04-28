import React from 'react';
import '../../../css/components/dashboard/AttendanceChart.css';

const AttendanceChart = ({ weeklyAttendance = [] }) => {
    const chartData = weeklyAttendance.map(d => ({
        day: d.day.toUpperCase(),
        height: `${Math.min((d.hours / 9) * 100, 100)}%`
    }));

    return (
        <div className="card chart-card">
            <div className="chart-header">
                <div>
                    <h3 className="chart-title">Weekly Attendance</h3>
                    <p className="chart-subtitle">Overview of your working hours this week</p>
                </div>

                <div className="chart-legend">
                    <div className="legend-item">
                        <span className="legend-square orange-bg"></span>
                        <span className="legend-label">OFFICE</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-square gray-bg"></span>
                        <span className="legend-label">TARGET</span>
                    </div>
                </div>
            </div>

            <div className="chart-container">
                {chartData.map((data, index) => (
                    <div key={index} className="chart-bar-group">
                        <div className="chart-bar-bg">
                            <div
                                className="chart-bar-fill"
                                style={{ height: data.height }}
                            ></div>
                        </div>
                        <span className="chart-day-label">{data.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AttendanceChart;
