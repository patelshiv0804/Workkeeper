import React, { useState } from 'react';
import { FileDown, FileText } from 'lucide-react';
import ReportsHeader from '../components/reports/ReportsHeader';
import TimeRangeTabs from '../components/reports/TimeRangeTabs';
import AttendanceTrendChart from '../components/reports/AttendanceTrendChart';
import LeavePatternChart from '../components/reports/LeavePatternChart';
import OvertimeHoursCard from '../components/reports/OvertimeHoursCard';
import '../../css/pages/Reports.css';

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState('Last 7 Days');

  return (
    <div className="reports-page">
      <ReportsHeader />
      <TimeRangeTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="reports-content">
        <div className="chart-row-full">
          <AttendanceTrendChart activeTab={activeTab} />
        </div>
        
        <div className="chart-row-split">
          <LeavePatternChart activeTab={activeTab} />
          <OvertimeHoursCard activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
