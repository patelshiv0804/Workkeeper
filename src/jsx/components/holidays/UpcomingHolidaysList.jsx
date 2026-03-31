import React from 'react';
import { Sun, PartyPopper, Building2, Snowflake } from 'lucide-react';
import '../../../css/components/holidays/UpcomingHolidaysList.css';

const UpcomingHolidaysList = () => {
    const upcomingHolidays = [
        {
            id: 1,
            name: "Diwali Holiday",
            date: "Oct 31, 2024",
            day: "Monday",
            type: "public",
            typeLabel: "PUBLIC",
            location: "All Units",
            icon: <Sun size={20} className="uhl-icon-public" />
        },
        {
            id: 2,
            name: "Aaneel Foundation Day",
            date: "April 25, 2024",
            day: "Tuesday",
            type: "company",
            typeLabel: "COMPANY",
            location: "Global",
            icon: <PartyPopper size={20} className="uhl-icon-company" />
        },
        {
            id: 3,
            name: "Statehood Day",
            date: "Dec 01, 2024",
            day: "Sunday",
            type: "regional",
            typeLabel: "REGIONAL",
            location: "Ahmedabad",
            icon: <Building2 size={20} className="uhl-icon-regional" />
        },
        {
            id: 4,
            name: "Christmas Day",
            date: "Dec 25, 2024",
            day: "Wednesday",
            type: "public",
            typeLabel: "PUBLIC",
            location: "All Units",
            icon: <Snowflake size={20} className="uhl-icon-public" />
        }
    ];

    return (
        <div className="upcoming-holidays-list-card">
            <div className="uhl-header">
                <h3>Upcoming Holidays</h3>
                <a href="#" className="uhl-view-all">View All</a>
            </div>

            <div className="uhl-list">
                {upcomingHolidays.map((holiday) => (
                    <div className="uhl-item" key={holiday.id}>
                        <div className="uhl-item-left">
                            <div className={`uhl-icon-box uhl-bg-${holiday.type}`}>
                                {holiday.icon}
                            </div>
                            <div className="uhl-item-details">
                                <h4>{holiday.name}</h4>
                                <p>{holiday.date} &bull; {holiday.day}</p>
                            </div>
                        </div>
                        <div className="uhl-item-right">
                            <span className={`uhl-badge uhl-badge-${holiday.type}`}>
                                {holiday.typeLabel}
                            </span>
                            <span className="uhl-location">{holiday.location}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingHolidaysList;
