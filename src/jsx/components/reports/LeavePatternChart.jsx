import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import '../../../css/components/reports/ReportsComponents.css';

const dataSets = {
  'Last 7 Days': [
    { name: 'Privilege Leave', value: 45, color: '#ea580c' },
    { name: 'Optional Leave', value: 25, color: '#f97316' },
    { name: 'Compensation Leave', value: 20, color: '#fb923c' },
    { name: 'Loss of Pay', value: 10, color: '#fdba74' },
  ],
  'This Month': [
    { name: 'Privilege Leave', value: 60, color: '#ea580c' },
    { name: 'Optional Leave', value: 15, color: '#f97316' },
    { name: 'Compensation Leave', value: 15, color: '#fb923c' },
    { name: 'Loss of Pay', value: 10, color: '#fdba74' },
  ],
  'Year to Date': [
    { name: 'Privilege Leave', value: 50, color: '#ea580c' },
    { name: 'Optional Leave', value: 20, color: '#f97316' },
    { name: 'Compensation Leave', value: 25, color: '#fb923c' },
    { name: 'Loss of Pay', value: 5, color: '#fdba74' },
  ]
};

const LeavePatternChart = ({ activeTab = 'Last 7 Days' }) => {
  const data = dataSets[activeTab] || dataSets['Last 7 Days'];
  return (
    <div className="report-card leave-pattern-card">
      <div className="card-header">
        <div className="card-titles">
          <h3>Leave Pattern</h3>
          <p>Distribution of leave requests by category</p>
        </div>
      </div>
      
      <div className="leave-pattern-content">
        <div className="donut-chart-wrapper">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
                cornerRadius={4}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                itemStyle={{ color: '#1e293b', fontWeight: 500 }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-center-text">
            <h4>84%</h4>
            <span>UTILIZATION</span>
          </div>
        </div>
        
        <div className="pattern-legend">
          {data.map((item, index) => (
            <div key={index} className="pattern-legend-item">
              <div className="legend-label">
                <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
                <span>{item.name}</span>
              </div>
              <span className="legend-value">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeavePatternChart;
