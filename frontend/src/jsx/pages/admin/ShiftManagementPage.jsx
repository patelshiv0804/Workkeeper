import React from 'react';
import '../../../css/pages/admin/ShiftManagementPage.css';
import ShiftFilterBar from '../../components/admin/shift/ShiftFilterBar';
import ShiftTable from '../../components/admin/shift/ShiftTable';
import ShiftSummaryCards from '../../components/admin/shift/ShiftSummaryCards';
import { Plus } from 'lucide-react';

const ShiftManagementPage = () => {
    return (
        <div className="admin-shift-page">
            <div className="admin-shift-header-wrapper">
                <div className="admin-shift-header">
                    <h1 className="admin-page-title">Shift Management</h1>
                    <p className="admin-page-subtitle">Create and manage employee work shifts and scheduling</p>
                </div>
                <button className="shift-create-btn">
                    <Plus size={18} />
                    <span>Create Shift</span>
                </button>
            </div>

            <div className="admin-shift-filters">
                <ShiftFilterBar />
            </div>

            <div className="admin-shift-table-section">
                <ShiftTable />
            </div>
            
            <div className="admin-shift-summary-section">
                <ShiftSummaryCards />
            </div>
        </div>
    );
};

export default ShiftManagementPage;
