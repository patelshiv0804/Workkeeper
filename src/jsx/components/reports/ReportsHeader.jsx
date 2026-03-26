import React from 'react';
import { FileSpreadsheet, FileText } from 'lucide-react';
import '../../../css/components/reports/ReportsComponents.css';

const ReportsHeader = () => {
  return (
    <div className="reports-header">
      <div className="header-titles">
        <h1>Reports & Analytics</h1>
        <p>View attendance trends, leave patterns and work hour reports for the current business cycle.</p>
      </div>
      <div className="header-actions">
        <button className="export-btn outline">
          <FileSpreadsheet size={16} />
          <span>Export CSV</span>
        </button>
        <button className="export-btn primary">
          <FileText size={16} />
          <span>Export PDF</span>
        </button>
      </div>
    </div>
  );
};

export default ReportsHeader;
