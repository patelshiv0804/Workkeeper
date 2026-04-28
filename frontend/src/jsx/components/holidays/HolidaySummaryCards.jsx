import React from 'react';
import { BarChart, Clock, Building2 } from 'lucide-react';
import '../../../css/components/holidays/HolidaySummaryCards.css';

const HolidaySummaryCards = () => {
    return (
        <div className="holiday-summary-container">
            <div className="holiday-summary-card">
                <div className="hsc-icon-wrapper hsc-icon-total">
                    <BarChart size={24} />
                </div>
                <div className="hsc-info">
                    <span className="hsc-label">TOTAL HOLIDAYS</span>
                    <span className="hsc-value">24 Days</span>
                </div>
            </div>

            <div className="holiday-summary-card">
                <div className="hsc-icon-wrapper hsc-icon-upcoming">
                    <Clock size={24} />
                </div>
                <div className="hsc-info">
                    <span className="hsc-label">UPCOMING HOLIDAY</span>
                    <span className="hsc-value">12 Days Left</span>
                </div>
            </div>

            <div className="holiday-summary-card">
                <div className="hsc-icon-wrapper hsc-icon-office">
                    <Building2 size={24} />
                </div>
                <div className="hsc-info">
                    <span className="hsc-label">YOUR OFFICE</span>
                    <span className="hsc-value">Ahmedabad</span>
                </div>
            </div>
        </div>
    );
};

export default HolidaySummaryCards;
