import React from 'react';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import '../../../css/components/holidays/HolidayCalendar.css';

const HolidayCalendar = () => {
    // Mock October 2024 days array for visual representation
    // 1st is Tuesday. So Sun: 29 (prev), Mon: 30 (prev)
    const days = [
        { date: 25, isPrevMonth: true },
        { date: 26, isPrevMonth: true },
        { date: 27, isPrevMonth: true },
        { date: 28, isPrevMonth: true },
        { date: 29, isPrevMonth: true },
        { date: 30, isPrevMonth: true },
        { date: 1, isPrevMonth: false },
        
        { date: 2, isPrevMonth: false },
        { date: 3, isPrevMonth: false },
        { date: 4, isPrevMonth: false },
        { date: 5, isPrevMonth: false },
        { date: 6, isPrevMonth: false },
        { date: 7, isPrevMonth: false },
        { date: 8, isPrevMonth: false },
        
        { date: 9, isPrevMonth: false, type: 'company' },
        { date: 10, isPrevMonth: false },
        { date: 11, isPrevMonth: false },
        { date: 12, isPrevMonth: false },
        { date: 13, isPrevMonth: false },
        { date: 14, isPrevMonth: false, type: 'regional' },
        { date: 15, isPrevMonth: false },
        
        { date: 16, isPrevMonth: false },
        { date: 17, isPrevMonth: false },
        { date: 18, isPrevMonth: false },
        { date: 19, isPrevMonth: false },
        { date: 20, isPrevMonth: false },
        { date: 21, isPrevMonth: false },
        { date: 22, isPrevMonth: false, type: 'public' },
        
        { date: 23, isPrevMonth: false, isCurrent: true },
        { date: 24, isPrevMonth: false },
        { date: 25, isPrevMonth: false },
        { date: 26, isPrevMonth: false },
        { date: 27, isPrevMonth: false },
        { date: 28, isPrevMonth: false },
        { date: 29, isPrevMonth: false },
        
        { date: 30, isPrevMonth: false },
        { date: 31, isPrevMonth: false, hasHolidayBg: true },
        { date: 1, isPrevMonth: true },
        { date: 2, isPrevMonth: true },
        { date: 3, isPrevMonth: true },
        { date: 4, isPrevMonth: true },
        { date: 5, isPrevMonth: true },
    ];

    return (
        <div className="holiday-calendar-card">
            <div className="hc-header">
                <div className="hc-title">
                    <CalendarIcon size={20} className="hc-title-icon" strokeWidth={2} />
                    <h3>October 2024</h3>
                </div>
                <div className="hc-filters">
                    <button className="hc-filter-btn">
                        October <ChevronDown size={14} />
                    </button>
                    <button className="hc-filter-btn">
                        All Types <ChevronDown size={14} />
                    </button>
                </div>
            </div>

            <div className="hc-grid-container">
                <div className="hc-weekdays">
                    <span>SUN</span>
                    <span>MON</span>
                    <span>TUE</span>
                    <span>WED</span>
                    <span>THU</span>
                    <span>FRI</span>
                    <span>SAT</span>
                </div>
                
                <div className="hc-days-grid">
                    {days.map((day, index) => {
                        let className = "hc-day-cell";
                        if (day.isPrevMonth) className += " hc-day-disabled";
                        if (day.isCurrent) className += " hc-day-current";
                        if (day.hasHolidayBg) className += " hc-day-holiday-bg";
                        
                        return (
                            <div key={index} className="hc-day-wrapper">
                                <div className={className}>
                                    {day.date}
                                </div>
                                {day.type && (
                                    <div className={`hc-dot hc-dot-${day.type}`}></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="hc-legend">
                <div className="hc-legend-item">
                    <div className="hc-dot hc-dot-public"></div>
                    <span>Public Holiday</span>
                </div>
                <div className="hc-legend-item">
                    <div className="hc-dot hc-dot-company"></div>
                    <span>Company Holiday</span>
                </div>
                <div className="hc-legend-item">
                    <div className="hc-dot hc-dot-regional"></div>
                    <span>Regional Holiday</span>
                </div>
            </div>
        </div>
    );
};

export default HolidayCalendar;
