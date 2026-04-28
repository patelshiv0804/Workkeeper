import React from 'react';
import '../../../../css/components/admin/attendance/AttendanceChart.css';

const AttendanceChart = () => {
  // Static data matching the visual requirement
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const data = [
    { office: 120, wfh: 30, absent: 10 },
    { office: 115, wfh: 35, absent: 5 },
    { office: 125, wfh: 25, absent: 8 },
    { office: 140, wfh: 40, absent: 2 },
    { office: 130, wfh: 30, absent: 5 },
    { office: 15, wfh: 10, absent: 120 }, // Weekend dip
    { office: 10, wfh: 5, absent: 125 }   // Weekend dip
  ];

  const maxTotal = 182; // Highest bar value roughly for scaling

  return (
    <div className="attendance-chart-card">
      <div className="chart-header">
        <div>
          <h2 className="chart-title">Attendance Overview</h2>
          <p className="chart-subtitle">Last 7 Days (Mon - Sun)</p>
        </div>
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-color office"></span>
            Office
          </div>
          <div className="legend-item">
            <span className="legend-color wfh"></span>
            WFH
          </div>
          <div className="legend-item">
            <span className="legend-color absent"></span>
            Absent
          </div>
        </div>
      </div>

      <div className="chart-container">
        {data.map((dayData, index) => {
          const officeHeight = (dayData.office / maxTotal) * 100;
          const wfhHeight = (dayData.wfh / maxTotal) * 100;
          const absentHeight = (dayData.absent / maxTotal) * 100;

          return (
            <div key={index} className="bar-column">
              <div className="stacked-bar">
                <div className="bar-segment absent" style={{ height: `${absentHeight}%` }}></div>
                <div className="bar-segment wfh" style={{ height: `${wfhHeight}%` }}></div>
                <div className="bar-segment office" style={{ height: `${officeHeight}%` }}></div>
              </div>
              <div className="x-axis-label">{days[index]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttendanceChart;
