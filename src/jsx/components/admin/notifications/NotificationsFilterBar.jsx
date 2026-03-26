import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Search, ChevronDown, Calendar, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import '../../../../css/components/admin/notifications/NotificationsFilterBar.css';

const NotificationsFilterBar = () => {
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
    <div className="notifications-filter-card">
      <div className="notifications-filter-group">
        <div className="notifications-search-box">
          <Search className="notifications-search-icon" size={18} />
          <input type="text" placeholder="Search notifications..." />
        </div>
        
        <div className="notifications-dropdown">
          <select defaultValue="all">
            <option value="all">Channel: All</option>
            <option value="email">Email</option>
            <option value="app">App</option>
            <option value="teams">MS Teams</option>
          </select>
          <ChevronDown className="notifications-dropdown-icon" size={16} />
        </div>

        <div className="notifications-dropdown">
          <select defaultValue="all">
            <option value="all">Status: All</option>
            <option value="delivered">Delivered</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
          <ChevronDown className="notifications-dropdown-icon" size={16} />
        </div>

        <div className="notifications-date-picker-wrapper" style={{ padding: 0, border: 'none' }}>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            customInput={
              <button className="notifications-date-picker">
                <Calendar size={16} />
                <span>
                  {startDate ? startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Date Range'}
                  {startDate && endDate ? ` - ${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : startDate ? ' - End Date' : ''}
                </span>
              </button>
            }
            renderCustomHeader={renderCustomHeader}
          />
        </div>
      </div>
      
      <button className="btn-filter-icon" title="More Filters">
        <SlidersHorizontal size={18} />
      </button>
    </div>
  );
};

export default NotificationsFilterBar;
