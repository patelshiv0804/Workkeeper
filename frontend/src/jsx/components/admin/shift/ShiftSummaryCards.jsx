import React from 'react';
import '../../../../css/components/admin/shift/ShiftSummaryCards.css';
import { CalendarDays, Timer, Moon } from 'lucide-react';

const ShiftSummaryCards = () => {
    return (
        <div className="shift-summary-grid">
            {/* Card 1 */}
            <div className="shift-summary-card">
                <div className="summary-icon-box orange-box">
                    <CalendarDays size={24} className="icon-orange" />
                </div>
                <div className="summary-details">
                    <span className="summary-label">Active Shifts</span>
                    <span className="summary-value orange-text">12</span>
                </div>
            </div>

            {/* Card 2 */}
            <div className="shift-summary-card">
                <div className="summary-icon-box green-box">
                    <Timer size={24} className="icon-green" />
                </div>
                <div className="summary-details">
                    <span className="summary-label">Avg. Duration</span>
                    <span className="summary-value green-text">7.5h</span>
                </div>
            </div>

            {/* Card 3 */}
            <div className="shift-summary-card">
                <div className="summary-icon-box yellow-box">
                    <Moon size={24} className="icon-yellow" />
                </div>
                <div className="summary-details">
                    <span className="summary-label">Night Shifts</span>
                    <span className="summary-value yellow-text">3</span>
                </div>
            </div>
        </div>
    );
};

export default ShiftSummaryCards;
