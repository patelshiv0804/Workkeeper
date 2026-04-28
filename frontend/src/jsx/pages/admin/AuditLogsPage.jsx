import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Download, Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import '../../../css/pages/admin/AuditLogsPage.css';
import AuditTable from '../../components/admin/audit/AuditTable';

const AuditLogsPage = () => {
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
    <div className="audit-logs-page">
      {/* Page Header */}
      <div className="audit-header-top">
        <div className="audit-title-section">
          <h1>Audit Logs</h1>
          <p>Track changes made to attendance, leave and employee records</p>
        </div>
        
        <div className="audit-header-actions">
          {/* Header Filters Row */}
          <div className="audit-filters-row">
            <div className="audit-dropdown">
              <select defaultValue="all">
                <option value="all">All Tables</option>
                <option value="employees">EmployeeRecords</option>
                <option value="attendance">AttendanceLogs</option>
                <option value="leave">LeaveRequests</option>
                <option value="payroll">PayrollRecords</option>
              </select>
              <ChevronDown className="audit-dropdown-icon" size={14} />
            </div>

            <div className="audit-dropdown">
              <select defaultValue="all">
                <option value="all">Action Type</option>
                <option value="insert">Insert</option>
                <option value="update">Update</option>
                <option value="delete">Delete</option>
              </select>
              <ChevronDown className="audit-dropdown-icon" size={14} />
            </div>

            <div className="audit-date-picker-wrapper" style={{ padding: 0, border: 'none' }}>
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => setDateRange(update)}
                customInput={
                  <button className="audit-date-picker">
                    <Calendar size={14} className="text-gray-500" />
                    <span>
                      {startDate ? startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Start Date'}
                      {startDate && endDate ? ` - ${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : startDate ? ' - End Date' : ''}
                    </span>
                  </button>
                }
                renderCustomHeader={renderCustomHeader}
              />
            </div>
          </div>

          <button className="btn-export-pdf">
            <Download size={16} />
            Export PDF
          </button>
        </div>
      </div>

      <div className="audit-content-wrapper">
        {/* We place the Table directly in the wrapper, since filters are in header */}
        <AuditTable />
      </div>
    </div>
  );
};

export default AuditLogsPage;
