import React, { useState } from 'react';
import '../../../../css/components/admin/reports/ReportsFilterBar.css';
import { ChevronDown, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../../css/components/admin/attendance/AttendanceFilters.css'; // importing to reuse Custom DatePicker Header styles

const ReportsFilterBar = () => {
  const [dateRange, setDateRange] = useState([new Date('2023-10-12'), new Date('2023-10-19')]);
  const [startDate, endDate] = dateRange;

  const standardMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - 10 + i);

  return (
    <div className="reports-filters-card">
      <div className="reports-filters-grid">
        
        {/* Date Range */}
        <div className="reports-filter-group">
          <label>DATE RANGE</label>
          <div className="date-filter-dropdown-wrapper" style={{ padding: 0, border: 'none', zIndex: 10 }}>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              customInput={
                <div className="reports-dropdown" style={{ width: '100%', gap: '8px', boxSizing: 'border-box' }}>
                  <Calendar size={14} className="reports-chevron" style={{ color: '#64748b' }} />
                  <span style={{ flex: 1, minWidth: '150px' }}>
                    {startDate ? startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Start Date'}
                    {startDate && endDate ? ` - ` : ''}
                    {endDate ? endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
                    {!startDate && !endDate && 'Select Date Range'}
                  </span>
                  <ChevronDown size={14} className="reports-chevron" />
                </div>
              }
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div className="custom-datepicker-header">
                  <div className="custom-datepicker-header-top">
                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="nav-btn">
                      <ChevronLeft size={20} />
                    </button>
                    <span className="current-month-year">
                      {standardMonths[date.getMonth()]} {date.getFullYear()}
                    </span>
                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="nav-btn">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <div className="custom-datepicker-header-selectors">
                    <select
                      value={standardMonths[date.getMonth()]}
                      onChange={({ target: { value } }) =>
                        changeMonth(standardMonths.indexOf(value))
                      }
                      className="month-select"
                    >
                      {standardMonths.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      value={date.getFullYear()}
                      onChange={({ target: { value } }) => changeYear(Number(value))}
                      className="year-select"
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            />
          </div>
        </div>

        {/* Department */}
        <div className="reports-filter-group">
          <label>DEPARTMENT</label>
          <div className="reports-dropdown">
            <span>All Departments</span>
            <ChevronDown size={14} className="reports-chevron" />
          </div>
        </div>

        {/* Team */}
        <div className="reports-filter-group">
          <label>TEAM</label>
          <div className="reports-dropdown">
            <span>All Teams</span>
            <ChevronDown size={14} className="reports-chevron" />
          </div>
        </div>

        {/* Employee */}
        <div className="reports-filter-group">
          <label>EMPLOYEE</label>
          <div className="reports-dropdown reports-dropdown-placeholder">
            <span>Select Employee</span>
            <ChevronDown size={14} className="reports-chevron" />
          </div>
        </div>

        {/* Report Type */}
        <div className="reports-filter-group">
          <label>REPORT TYPE</label>
          <div className="reports-dropdown">
            <span>Attendance Summary</span>
            <ChevronDown size={14} className="reports-chevron" />
          </div>
        </div>

        {/* Action Button mapped to grid alignment */}
        <div className="reports-filter-action">
          <button className="reports-generate-btn">
            Generate Report
          </button>
        </div>

      </div>
    </div>
  );
};

export default ReportsFilterBar;
