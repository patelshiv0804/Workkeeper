import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronDown, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import '../../../../css/components/admin/exit/ExitFilterBar.css';

const ExitFilterBar = () => {
  const [dateRange, setDateRange] = useState([new Date('2023-10-12'), new Date('2023-10-19')]);
  const [startDate, endDate] = dateRange;

  const standardMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear - 10 + i);

  const renderCustomHeader = ({
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
  );

  return (
    <div className="exit-filter-area">
      <div className="exit-filter-group">
        <div className="exit-dropdown">
          <select defaultValue="all">
            <option value="all">All Departments</option>
            <option value="engineering">Engineering</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
          </select>
          <ChevronDown className="exit-dropdown-icon" size={16} />
        </div>

        <div className="exit-dropdown">
          <select defaultValue="all">
            <option value="all">Exit Status</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
          <ChevronDown className="exit-dropdown-icon" size={16} />
        </div>

        <div className="exit-date-picker-wrapper" style={{ padding: 0, border: 'none' }}>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            customInput={
              <button className="exit-date-picker">
                <span>
                  {startDate ? startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Date Range'}
                  {startDate && endDate ? ` - ${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : startDate ? ' - End Date' : ''}
                </span>
                <Calendar size={16} className="text-gray-500" style={{marginLeft: 'auto'}} />
              </button>
            }
            renderCustomHeader={renderCustomHeader}
          />
        </div>
      </div>
    </div>
  );
};

export default ExitFilterBar;
