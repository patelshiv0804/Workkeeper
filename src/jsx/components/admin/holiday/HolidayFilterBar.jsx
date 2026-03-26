import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import '../../../../css/components/admin/holiday/HolidayFilterBar.css';

const HolidayFilterBar = () => {
  return (
    <div className="holiday-filter-card">
      <div className="holiday-filter-group">
        <div className="holiday-search-box">
          <Search className="holiday-search-icon" size={18} />
          <input type="text" placeholder="Search Holiday Name..." />
        </div>
        
        <div className="holiday-dropdown">
          <select defaultValue="">
            <option value="" disabled hidden>Organization Unit</option>
            <option value="all">Global</option>
            <option value="hq">New York HQ</option>
            <option value="eng">Engineering</option>
            <option value="sg">Singapore Office</option>
          </select>
          <ChevronDown className="holiday-dropdown-icon" size={16} />
        </div>

        <div className="holiday-dropdown">
          <select defaultValue="">
            <option value="" disabled hidden>Holiday Type</option>
            <option value="all">All Types</option>
            <option value="public">Public</option>
            <option value="company">Company</option>
            <option value="regional">Regional</option>
          </select>
          <ChevronDown className="holiday-dropdown-icon" size={16} />
        </div>

        <div className="holiday-dropdown">
          <select defaultValue="">
            <option value="" disabled hidden>Month</option>
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="Jun">June</option>
            <option value="Jul">July</option>
            <option value="Aug">August</option>
            <option value="Sep">September</option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option>
          </select>
          <ChevronDown className="holiday-dropdown-icon" size={16} />
        </div>
      </div>
      
      <button className="btn-apply-filters">
        Apply Filters
      </button>
    </div>
  );
};

export default HolidayFilterBar;
