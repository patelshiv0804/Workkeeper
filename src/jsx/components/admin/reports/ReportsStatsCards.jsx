import React from 'react';
import '../../../../css/components/admin/reports/ReportsStatsCards.css';
import { CalendarCheck, Plane, Clock, AlertCircle } from 'lucide-react';

const ReportsStatsCards = () => {
    return (
        <div className="reports-stats-grid">
            {/* Avg Attendance */}
            <div className="reports-stat-card">
                <div className="reports-stat-header">
                    <div className="reports-stat-titles">
                        <span className="rep-stat-label">Avg Attendance Rate</span>
                    </div>
                    <div className="rep-icon-box green-box">
                        <CalendarCheck size={18} className="icon-green" />
                    </div>
                </div>
                <div className="reports-stat-body">
                    <div className="rep-val-group">
                        <span className="rep-stat-value">92%</span>
                        <span className="rep-stat-modifier mod-green">+3%</span>
                    </div>
                </div>
            </div>

            {/* Leave */}
            <div className="reports-stat-card">
                <div className="reports-stat-header">
                    <div className="reports-stat-titles">
                        <span className="rep-stat-label">Employees On Leave</span>
                    </div>
                    <div className="rep-icon-box yellow-box">
                        <Plane size={18} className="icon-yellow" />
                    </div>
                </div>
                <div className="reports-stat-body">
                    <div className="rep-val-group">
                        <span className="rep-stat-value">12</span>
                    </div>
                    <span className="rep-stat-subtext">Scheduled for today</span>
                </div>
            </div>

            {/* Total Hours */}
            <div className="reports-stat-card">
                <div className="reports-stat-header">
                    <div className="reports-stat-titles">
                        <span className="rep-stat-label">Total Work Hours</span>
                    </div>
                    <div className="rep-icon-box orange-box">
                        <Clock size={18} className="icon-orange" />
                    </div>
                </div>
                <div className="reports-stat-body">
                    <div className="rep-val-group">
                        <span className="rep-stat-value">3,420</span>
                        <span className="rep-stat-unit">hrs</span>
                    </div>
                    <span className="rep-stat-subtext">Across all departments</span>
                </div>
            </div>

            {/* Pending Requests */}
            <div className="reports-stat-card">
                <div className="reports-stat-header">
                    <div className="reports-stat-titles">
                        <span className="rep-stat-label">Pending Requests</span>
                    </div>
                    <div className="rep-icon-box red-box">
                        <AlertCircle size={18} className="icon-red" />
                    </div>
                </div>
                <div className="reports-stat-body">
                    <div className="rep-val-group">
                        <span className="rep-stat-value">8</span>
                    </div>
                    <span className="rep-stat-subtext">Requires immediate action</span>
                </div>
            </div>
        </div>
    );
};

export default ReportsStatsCards;
