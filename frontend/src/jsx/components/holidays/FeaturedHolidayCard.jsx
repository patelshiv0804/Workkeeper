import React from 'react';
import { Sun } from 'lucide-react';
import '../../../css/components/holidays/FeaturedHolidayCard.css';

const FeaturedHolidayCard = () => {
    return (
        <div className="featured-holiday-card">
            <div className="featured-card-content">
                <div className="fhc-label">UPCOMING NEXT</div>
                <h2 className="fhc-title">Diwali Holiday</h2>
                <p className="fhc-date">Monday, October 31, 2024</p>
                
                <div className="fhc-badges-container">
                    <div className="fhc-badge">
                        <span className="fhc-badge-value">05</span>
                        <span className="fhc-badge-label">DAYS LEFT</span>
                    </div>
                    <div className="fhc-badge">
                        <span className="fhc-badge-value">Public</span>
                        <span className="fhc-badge-label">HOLIDAY TYPE</span>
                    </div>
                </div>
            </div>
            <div className="featured-card-icon">
                <Sun size={120} strokeWidth={2} />
            </div>
        </div>
    );
};

export default FeaturedHolidayCard;
