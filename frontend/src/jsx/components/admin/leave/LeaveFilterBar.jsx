import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../../css/components/admin/leave/LeaveFilterBar.css';
import { Search, ChevronDown, Filter, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const LeaveFilterBar = () => {
  const [startDate, setStartDate] = useState(new Date('2023-10-01'));
  const [endDate, setEndDate] = useState(new Date('2023-10-31'));

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
    <div className="admin-leave-filters-card">
      <div className="leave-filters-left">
        
        <div className="leave-filter-group">
          <label>EMPLOYEE NAME</label>
          <div className="leave-search-box">
            <Search size={16} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search employee..." 
              className="leave-search-input"
            />
          </div>
        </div>
        
        <div className="leave-filter-group">
          <label>LEAVE TYPE</label>
          <div className="leave-filter-dropdown">
            <span>All Types</span>
            <ChevronDown size={16} className="filter-chevron" />
          </div>
        </div>
        
        <div className="leave-filter-group">
          <label>STATUS</label>
          <div className="leave-filter-dropdown">
            <span>All Status</span>
            <ChevronDown size={16} className="filter-chevron" />
          </div>
        </div>

        <div className="leave-filter-group">
          <label>START DATE</label>
          <div className="leave-search-box date-box" style={{ padding: 0, border: 'none' }}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              customInput={
                <div className="date-picker-custom-input">
                  <Calendar size={16} className="filter-icon" />
                  <span>{startDate ? startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Start Date'}</span>
                </div>
              }
              renderCustomHeader={renderCustomHeader}
            />
          </div>
        </div>

        <div className="leave-filter-group">
          <label>END DATE</label>
          <div className="leave-search-box date-box" style={{ padding: 0, border: 'none' }}>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              customInput={
                <div className="date-picker-custom-input">
                  <Calendar size={16} className="filter-icon" />
                  <span>{endDate ? endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'End Date'}</span>
                </div>
              }
              renderCustomHeader={renderCustomHeader}
            />
          </div>
        </div>

      </div>

      <div className="leave-filters-right">
        <button className="leave-filter-btn">
          <Filter size={16} />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};

export default LeaveFilterBar;
