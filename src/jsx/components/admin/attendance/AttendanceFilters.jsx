import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../../css/components/admin/attendance/AttendanceFilters.css';
import { Calendar, ChevronDown, Download, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const AttendanceFilters = () => {
  const [selectedDate, setSelectedDate] = useState(new Date('2023-10-24'));

  const months = [
    "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December", "January", "February"
  ];
  // Sort months for select properly
  const standardMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - 10 + i);

  return (
    <div className="admin-filters-card">
      <div className="admin-filters-left">
        <div className="filter-dropdown date-filter-dropdown-wrapper" style={{ padding: 0, border: 'none' }}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            customInput={
              <div className="date-picker-custom-input">
                <Calendar size={16} className="filter-icon" />
                <span>{selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <ChevronDown size={16} className="filter-chevron" />
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
        
        <div className="filter-dropdown">
          <span>Department: All</span>
          <ChevronDown size={16} className="filter-chevron" />
        </div>
        
        <div className="filter-dropdown">
          <span>Work Location</span>
          <ChevronDown size={16} className="filter-chevron" />
        </div>
      </div>

      <div className="admin-filters-right">
        <button className="export-btn">
          <Download size={16} />
          <span>Export CSV</span>
        </button>
        <button className="export-btn">
          <FileText size={16} />
          <span>Export PDF</span>
        </button>
      </div>
    </div>
  );
};

export default AttendanceFilters;
