import React from 'react';
import '../../../../css/components/admin/shift/ShiftFilterBar.css';
import { Search, ChevronDown } from 'lucide-react';

const ShiftFilterBar = () => {
  return (
    <div className="admin-shift-filters-card">
      <div className="shift-filters-left">
        
        <div className="shift-filter-group">
          <label>SEARCH SHIFT NAME</label>
          <div className="shift-search-box">
            <Search size={16} className="search-icon" />
            <input 
              type="text" 
              placeholder="e.g. Night Ops" 
              className="shift-search-input"
            />
          </div>
        </div>
        
        <div className="shift-filter-group">
          <label>SHIFT TYPE</label>
          <div className="shift-filter-dropdown type-drop">
            <span>All Shifts</span>
            <ChevronDown size={16} className="filter-chevron" />
          </div>
        </div>
        
        <div className="shift-filter-group">
          <label>TIMEZONE</label>
          <div className="shift-filter-dropdown tz-drop">
            <span>UTC (Coordinated Univers...</span>
            <ChevronDown size={16} className="filter-chevron" />
          </div>
        </div>

      </div>

      <div className="shift-filters-right">
        <button className="shift-filter-apply-btn">
          <span>Apply Filters</span>
        </button>
      </div>
    </div>
  );
};

export default ShiftFilterBar;
