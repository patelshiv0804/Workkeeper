import React from 'react';
import '../../../css/pages/admin/ReportsAnalyticsPage.css';
import ReportsFilterBar from '../../components/admin/reports/ReportsFilterBar';
import ReportsStatsCards from '../../components/admin/reports/ReportsStatsCards';
import ReportsChartsRow from '../../components/admin/reports/ReportsChartsRow';
import ReportsMidRow from '../../components/admin/reports/ReportsMidRow';
import ReportsTable from '../../components/admin/reports/ReportsTable';
import { Download, FileText } from 'lucide-react';

const ReportsAnalyticsPage = () => {
    return (
        <div className="admin-reports-page">
            <div className="admin-reports-header-wrapper">
                <div className="admin-reports-header">
                    <h1 className="admin-page-title">Reports & Analytics</h1>
                    <p className="admin-page-subtitle">Monitor workforce trends, attendance patterns, and leave insights across the organization</p>
                </div>
                
                <div className="reports-export-actions">
                    <button className="export-btn btn-outline">
                        <Download size={16} />
                        <span>Export CSV</span>
                    </button>
                    <button className="export-btn btn-primary">
                        <FileText size={16} />
                        <span>Export PDF</span>
                    </button>
                </div>
            </div>

            <div className="admin-reports-filters">
                <ReportsFilterBar />
            </div>

            <div className="admin-reports-content-stream">
                <ReportsStatsCards />
                <ReportsChartsRow />
                <ReportsMidRow />
                <ReportsTable />
            </div>
            
        </div>
    );
};

export default ReportsAnalyticsPage;
