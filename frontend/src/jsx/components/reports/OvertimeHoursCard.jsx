import React from 'react';
import '../../../css/components/reports/ReportsComponents.css';

const dataSets = {
  'Last 7 Days': [
    { department: 'ENGINEERING', hours: 82, maxHours: 100, color: '#ea580c' },
    { department: 'PRODUCT & DESIGN', hours: 40, maxHours: 100, color: '#f97316' },
    { department: 'SALES & MARKETING', hours: 25, maxHours: 100, color: '#fb923c' },
    { department: 'SUPPORT', hours: 15, maxHours: 100, color: '#fdba74' },
  ],
  'This Month': [
    { department: 'ENGINEERING', hours: 482, maxHours: 500, color: '#ea580c' },
    { department: 'PRODUCT & DESIGN', hours: 320, maxHours: 500, color: '#f97316' },
    { department: 'SALES & MARKETING', hours: 190, maxHours: 500, color: '#fb923c' },
    { department: 'SUPPORT', hours: 110, maxHours: 500, color: '#fdba74' },
  ],
  'Year to Date': [
    { department: 'ENGINEERING', hours: 4820, maxHours: 5000, color: '#ea580c' },
    { department: 'PRODUCT & DESIGN', hours: 3200, maxHours: 5000, color: '#f97316' },
    { department: 'SALES & MARKETING', hours: 1900, maxHours: 5000, color: '#fb923c' },
    { department: 'SUPPORT', hours: 1100, maxHours: 5000, color: '#fdba74' },
  ]
};

const OvertimeHoursCard = ({ activeTab = 'Last 7 Days' }) => {
  const data = dataSets[activeTab] || dataSets['Last 7 Days'];
  return (
    <div className="report-card overtime-card">
      <div className="card-header" style={{ alignItems: 'flex-start' }}>
        <div className="card-titles">
          <h3>Overtime Hours</h3>
          <p>Total overtime recorded by department</p>
        </div>
        {/* <div className="trend-badge">
          +12.5% vs LW
        </div> */}
      </div>
      <div className="overtime-bars">
        {data.map((item, index) => {
          const percentage = (item.hours / item.maxHours) * 100;

          return (
            <div key={index} className="progress-row">
              <div className="progress-labels">
                <span className="dept-name">{item.department}</span>
                <span className="hours-val">{item.hours} HRS</span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: item.color
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OvertimeHoursCard;
