import React from 'react';
import { Plus, Download } from 'lucide-react';
import '../../../css/pages/admin/ExitManagementPage.css';
import ExitFilterBar from '../../components/admin/exit/ExitFilterBar';
import ExitTable from '../../components/admin/exit/ExitTable';
import ExitSummaryCards from '../../components/admin/exit/ExitSummaryCards';

const ExitManagementPage = () => {
  return (
    <div className="exit-management-page">
      <div className="exit-breadcrumb">
        <span>Pages</span>
        <span>/</span>
        <span style={{color: '#1e293b', fontWeight: 500}}>Exit Management</span>
      </div>

      {/* Page Header */}
      <div className="exit-header">
        <div className="exit-title-section">
          <h1>Exit Management</h1>
          <p>Track employee resignations and clearance approvals across departments.</p>
        </div>
        
        <div className="exit-header-actions">
          <button className="btn-initiate-exit">
            <Plus size={18} />
            Initiate Exit
          </button>
          <button className="btn-exit-download" title="Download Export">
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Wrapping the filter and table in a single main card as per design logic */}
      <div className="exit-content-wrapper">
        <ExitFilterBar />
        <ExitTable />
      </div>

      <ExitSummaryCards />
    </div>
  );
};

export default ExitManagementPage;
