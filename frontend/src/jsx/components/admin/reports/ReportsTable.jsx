import React from 'react';
import '../../../../css/components/admin/reports/ReportsTable.css';
import Pagination from '../shared/Pagination';
import { MoreVertical } from 'lucide-react';

const ReportsTable = () => {
    // Array of mock reports mirroring the requirements
    const reports = [
        {
            id: 1,
            name: 'Alex Rivera',
            role: 'Senior Dev',
            dept: 'Engineering',
            attendance: '98.5%',
            leaveTaken: '2 Days',
            workHrs: '168h',
            status: 'Active',
            avatar: 'https://i.pravatar.cc/150?u=alex'
        },
        {
            id: 2,
            name: 'Sarah Chen',
            role: 'UX Lead',
            dept: 'Product',
            attendance: '85.0%',
            leaveTaken: '5 Days',
            workHrs: '142h',
            status: 'On Leave',
            avatar: 'https://i.pravatar.cc/150?u=sarah'
        },
        {
            id: 3,
            name: 'Michael Ross',
            role: 'Legal Counsel',
            dept: 'Human Resources',
            attendance: '92.2%',
            leaveTaken: '1 Day',
            workHrs: '160h',
            status: 'Active',
            avatar: 'https://i.pravatar.cc/150?u=michael'
        },
        {
            id: 4,
            name: 'David Miller',
            role: 'Marketing Spec.',
            dept: 'Marketing',
            attendance: '0%',
            leaveTaken: '20 Days',
            workHrs: '0h',
            status: 'Inactive',
            avatar: 'https://i.pravatar.cc/150?u=david'
        }
    ];

    // Status Helper
    const getStatusClass = (status) => {
        if (status === 'Active') return 'rep-status-active';
        if (status === 'On Leave') return 'rep-status-leave';
        return 'rep-status-inactive';
    };

    return (
        <div className="reports-table-card">
            
            <div className="reports-table-header">
                <h3 className="rep-table-title">Generated Reports Detail</h3>
                <a href="#all" className="rep-view-all">View All</a>
            </div>

            <div className="reports-table-wrapper">
                <table className="rep-data-table">
                    <thead>
                        <tr>
                            <th>EMPLOYEE</th>
                            <th>DEPARTMENT</th>
                            <th>ATTENDANCE</th>
                            <th>LEAVE TAKEN</th>
                            <th>WORK HOURS</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report) => (
                            <tr key={report.id}>
                                <td>
                                    <div className="rep-emp-info">
                                        <img src={report.avatar} alt={report.name} className="rep-emp-avatar" />
                                        <div className="rep-emp-text">
                                            <span className="rep-emp-name">{report.name}</span>
                                            <span className="rep-emp-role">{report.role}</span>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="rep-dept-col">{report.dept}</td>
                                
                                <td className="rep-att-col">{report.attendance}</td>
                                
                                <td className="rep-leave-col">{report.leaveTaken}</td>
                                
                                {/* Flagging 0h text as orange in mockups mapping logic dynamically */}
                                <td className={`rep-hrs-col ${report.workHrs === '0h' ? 'hrs-warning' : 'hrs-normal'}`}>
                                    {report.workHrs}
                                </td>
                                
                                <td>
                                    <span className={`rep-status-badge ${getStatusClass(report.status)}`}>
                                        {report.status}
                                    </span>
                                </td>
                                
                                <td className="rep-actions-col">
                                    <button className="rep-action-btn">
                                        <MoreVertical size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Bottom Pagination mimicking standard implementation logic */}
            <div className="rep-pagination-wrapper">
                <div className="rep-pagination-info">Showing 1-4 of 128 employees</div>
                <div className="rep-pagination-controls">
                    <button className="rep-page-nav">Prev</button>
                    <button className="rep-page-btn active">1</button>
                    <button className="rep-page-btn">2</button>
                    <button className="rep-page-nav">Next</button>
                </div>
            </div>

        </div>
    );
};

export default ReportsTable;
