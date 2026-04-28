import React from 'react';
import { Plus } from 'lucide-react';
import '../../../css/pages/admin/HolidayCalendarPage.css';
import HolidayFilterBar from '../../components/admin/holiday/HolidayFilterBar';
import HolidayTable from '../../components/admin/holiday/HolidayTable';
import HolidaySummaryCards from '../../components/admin/holiday/HolidaySummaryCards';

const HolidayCalendarPage = () => {
  return (
    <div className="holiday-calendar-page">
      {/* Page Header */}
      <div className="holiday-header">
        <div className="holiday-title-section">
          <h1>Holiday Calendar</h1>
          <p>Manage organization holidays and office schedules across regions.</p>
        </div>
        <button className="btn-add-holiday">
          <Plus size={18} />
          Add Holiday
        </button>
      </div>

      <div className="holiday-content-wrapper">
        <HolidayFilterBar />
        <HolidayTable />
        <HolidaySummaryCards />
      </div>
    </div>
  );
};

export default HolidayCalendarPage;
