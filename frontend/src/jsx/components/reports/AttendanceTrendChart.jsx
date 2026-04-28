import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../../../css/components/reports/ReportsComponents.css';

const dataSets = {
  'Last 7 Days': [
    { name: 'MON', office: 8, wfh: 0 },
    { name: 'TUE', office: 8.5, wfh: 0 },
    { name: 'WED', office: 4, wfh: 4.5 },
    { name: 'THU', office: 9, wfh: 0 },
    { name: 'FRI', office: 0, wfh: 8 },
    { name: 'SAT', office: 0, wfh: 0 },
    { name: 'SUN', office: 0, wfh: 0 },
  ],
  'This Month': [
    { name: 'Week 1', office: 40, wfh: 0 },
    { name: 'Week 2', office: 32, wfh: 8 },
    { name: 'Week 3', office: 24, wfh: 16 },
    { name: 'Week 4', office: 40, wfh: 0 }
  ],
  'Year to Date': [
    { name: 'Jan', office: 160, wfh: 0 },
    { name: 'Feb', office: 152, wfh: 8 },
    { name: 'Mar', office: 140, wfh: 20 },
    { name: 'Apr', office: 160, wfh: 0 }
  ]
};

const AttendanceTrendChart = ({ activeTab = 'Last 7 Days' }) => {
  const data = dataSets[activeTab] || dataSets['Last 7 Days'];
  return (
    <div className="report-card attendance-card">
      <div className="card-header">
        <div className="card-titles">
          <h3>Attendance Trend</h3>
          <p>Working hours comparison per day</p>
        </div>
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-dot office"></span>
            <span>Office</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot wfh"></span>
            <span>Work From Home</span>
          </div>
        </div>
      </div>
      
      <div className="chart-container" style={{ height: '300px', width: '100%', marginTop: '24px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#94a3b8' }} 
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="office" 
              name="Office"
              stroke="#ea580c" 
              fillOpacity={1} 
              fill="url(#colorOffice)" 
              strokeWidth={3}
            />
            <Area 
              type="monotone" 
              dataKey="wfh" 
              name="Work From Home"
              stroke="#fed7aa" 
              fillOpacity={1} 
              fill="url(#colorWfh)" 
              strokeWidth={3}
            />
            <defs>
              <linearGradient id="colorOffice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ea580c" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#ea580c" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorWfh" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fed7aa" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#fed7aa" stopOpacity={0}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceTrendChart;
