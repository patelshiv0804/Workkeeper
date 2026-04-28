import React, { useState } from 'react';
import { Download, Printer } from 'lucide-react';
import RecordsFilterBar from '../components/punchrecords/RecordsFilterBar';
import PunchRecordsTable from '../components/punchrecords/PunchRecordsTable';
import SystemInfoCards from '../components/punchrecords/SystemInfoCards';
import '../../css/pages/PunchRecords.css';

const PunchRecords = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('Last 7 Days');

  return (
    <div className="punch-records-page">
      <div className="page-header">
        <div className="header-titles">
          <h1>Punch Machine Records</h1>
          <p>View attendance entries recorded from biometric machines</p>
        </div>
        <div className="header-actions">
          <button className="action-btn">
            <Download size={16} />
            <span>Export CSV</span>
          </button>
          <button className="action-btn">
            <Printer size={16} />
            <span>Print Log</span>
          </button>
        </div>
      </div>

      <div className="records-content">
        <div className="records-card">
          <RecordsFilterBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            filterType={filterType} 
            setFilterType={setFilterType} 
          />
          <PunchRecordsTable searchTerm={searchTerm} />
        </div>
        <SystemInfoCards />
      </div>
    </div>
  );
};

export default PunchRecords;
