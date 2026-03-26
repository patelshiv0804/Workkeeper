import React from 'react';
import { Clock, PersonStanding, Hourglass, Building2 } from 'lucide-react';
import '../../../css/components/attendance/TodaySummaryCard.css';

const TodaySummaryCard = () => {
    return (
        <div className="card summary-card">
            <h3 className="summary-title">Today's Summary</h3>

            <div className="summary-list">

                {/* First IN */}
                <div className="summary-item">
                    <div className="s-icon-wrapper s-bg-green">
                        <Clock size={20} className="s-icon-green" />
                    </div>
                    <div className="summary-info">
                        <p className="s-label">First IN Time</p>
                        <p className="s-value">09:12:44 AM</p>
                    </div>
                </div>

                {/* Last OUT */}
                <div className="summary-item">
                    <div className="s-icon-wrapper s-bg-yellow">
                        <PersonStanding size={20} className="s-icon-yellow" />
                    </div>
                    <div className="summary-info">
                        <p className="s-label">Last OUT Time</p>
                        <p className="s-value">-- : -- : --</p>
                    </div>
                </div>

                {/* Working Hours */}
                <div className="summary-item s-item-progress">
                    <div className="s-icon-wrapper s-bg-orange">
                        <Hourglass size={20} className="s-icon-orange" />
                    </div>
                    <div className="summary-info s-info-full">
                        <p className="s-label">Total Working Hours</p>
                        <div className="s-progress-header">
                            <p className="s-value">06h 45m</p>
                            <div className="s-progress-track">
                                <div className="s-progress-fill" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Work Location */}
                <div className="summary-item">
                    <div className="s-icon-wrapper s-bg-blue">
                        <Building2 size={20} className="s-icon-blue" />
                    </div>
                    <div className="summary-info">
                        <p className="s-label">Work Location</p>
                        <p className="s-value">HQ Office, Floor 4</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TodaySummaryCard;
