import React from 'react';
import '../../../../css/components/admin/reports/ReportsMidRow.css';
import { FileText, Calendar } from 'lucide-react';

const ReportsMidRow = () => {
    // Simulated horizontal chart data determining scale values mapped natively
    const depData = [
        { name: 'Engineering', hrs: '1,240', pct: '85%' },
        { name: 'Marketing', hrs: '850', pct: '55%' },
        { name: 'Human Resources', hrs: '420', pct: '30%' },
        { name: 'Finance', hrs: '510', pct: '35%' },
        { name: 'Product', hrs: '400', pct: '25%' }
    ];

    return (
        <div className="reports-mid-grid">
            
            {/* LEFT: Department Work Hours (Horizontal Bar Logic) */}
            <div className="reports-mid-card flex-2">
                <h3 className="mid-card-title">Department Work Hours</h3>
                
                <div className="dep-hours-list">
                    {depData.map((dep, index) => (
                        <div key={index} className="dep-hour-row">
                            <div className="dep-row-header">
                                <span className="dep-name-lbl">{dep.name}</span>
                                <span className="dep-hrs-val">{dep.hrs} hrs</span>
                            </div>
                            {/* Linear Bar Fill Visual */}
                            <div className="dep-progress-track">
                                <div className="dep-progress-fill" style={{ width: dep.pct }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT: Quick Shortcuts List */}
            <div className="reports-mid-card flex-1">
                <h3 className="mid-card-title">Quick Shortcuts</h3>
                
                <div className="shortcuts-list">
                    
                    {/* Log 1 */}
                    <div className="shortcut-item">
                        <div className="shortcut-icon-wrapper bg-green-light">
                            <FileText size={18} className="text-green" />
                        </div>
                        <div className="shortcut-details">
                            <span className="shortcut-title">Attendance Log</span>
                            <span className="shortcut-sub">CSV • Last 7 Days</span>
                        </div>
                    </div>

                    {/* Log 2 */}
                    <div className="shortcut-item">
                        <div className="shortcut-icon-wrapper bg-orange-light">
                            <Calendar size={18} className="text-orange" />
                        </div>
                        <div className="shortcut-details">
                            <span className="shortcut-title">Leave Summary</span>
                            <span className="shortcut-sub">CSV • June 2024</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ReportsMidRow;
