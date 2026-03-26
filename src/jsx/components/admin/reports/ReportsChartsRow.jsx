import React from 'react';
import '../../../../css/components/admin/reports/ReportsChartsRow.css';

const ReportsChartsRow = () => {
    // Array of mock data simulating chart bounds
    const attendanceData = [
        { day: 'MON', present: 60, wfh: 30, absent: 10 },
        { day: 'TUE', present: 55, wfh: 25, absent: 20 },
        { day: 'WED', present: 70, wfh: 20, absent: 10 },
        { day: 'THU', present: 40, wfh: 40, absent: 20 },
        { day: 'FRI', present: 65, wfh: 20, absent: 15 },
        { day: 'SAT', present: 0, wfh: 10, absent: 0 },
        { day: 'SUN', present: 0, wfh: 0, absent: 15 },
    ];

    return (
        <div className="reports-charts-grid">
            
            {/* LEFT: Attendance Trends Bar Chart */}
            <div className="reports-chart-card">
                <div className="chart-header">
                    <h3 className="chart-title">Attendance Trends (Last 7 Days)</h3>
                    <div className="chart-legend">
                        <span className="legend-item"><span className="legend-dot dot-green"></span>Present</span>
                        <span className="legend-item"><span className="legend-dot dot-orange"></span>WFH</span>
                        <span className="legend-item"><span className="legend-dot dot-red"></span>Absent</span>
                    </div>
                </div>

                <div className="bar-chart-container">
                    {attendanceData.map((data, index) => (
                        <div key={index} className="bar-column-wrapper">
                            <div className="stacked-bar">
                                {/* Flex-basis simulates actual graph scaling based on input params */}
                                {data.absent > 0 && <div className="bar-segment seg-red" style={{ flexBasis: `${data.absent}%` }}></div>}
                                {data.wfh > 0 && <div className="bar-segment seg-orange" style={{ flexBasis: `${data.wfh}%` }}></div>}
                                {data.present > 0 && <div className="bar-segment seg-green" style={{ flexBasis: `${data.present}%` }}></div>}
                            </div>
                            <span className="bar-x-label">{data.day}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT: Leave Distribution Conic Donut Chart */}
            <div className="reports-chart-card">
                <div className="chart-header">
                    <h3 className="chart-title">Leave Distribution</h3>
                </div>

                <div className="donut-chart-container">
                    
                    {/* CSS Conic Gradient handles actual slicing visuals */}
                    <div className="css-donut-chart">
                        <div className="donut-hole">
                            <span className="donut-total-val">12</span>
                            <span className="donut-total-lbl">TOTAL</span>
                        </div>
                    </div>

                    <div className="donut-legend-list">
                        <div className="donut-legend-row">
                            <div className="legend-name"><span className="legend-dot dot-orange"></span>Sick Leave</div>
                            <span className="legend-val">5</span>
                        </div>
                        <div className="donut-legend-row">
                            <div className="legend-name"><span className="legend-dot dot-yellow"></span>Casual Leave</div>
                            <span className="legend-val">3</span>
                        </div>
                        <div className="donut-legend-row">
                            <div className="legend-name"><span className="legend-dot dot-green"></span>Annual Leave</div>
                            <span className="legend-val">3</span>
                        </div>
                        <div className="donut-legend-row">
                            <div className="legend-name"><span className="legend-dot dot-gray"></span>Maternity/Paternity</div>
                            <span className="legend-val">1</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ReportsChartsRow;
