import React from 'react';
import '../../css/pages/Holidays.css';
import FeaturedHolidayCard from '../components/holidays/FeaturedHolidayCard';
import HolidayCalendar from '../components/holidays/HolidayCalendar';
import UpcomingHolidaysList from '../components/holidays/UpcomingHolidaysList';
import HolidaySummaryCards from '../components/holidays/HolidaySummaryCards';

const Holidays = () => {
    return (
        <div className="holidays-page">
            <div className="holidays-header">
                <h1 className="holidays-title">Holiday Calendar</h1>
                <p className="holidays-subtitle">View upcoming holidays and plan your leaves effectively</p>
            </div>

            <FeaturedHolidayCard />

            <div className="holidays-main-grid">
                <div className="holidays-calendar-section">
                    <HolidayCalendar />
                </div>
                <div className="holidays-list-section">
                    <UpcomingHolidaysList />
                </div>
            </div>

            <HolidaySummaryCards />
        </div>
    );
};

export default Holidays;
