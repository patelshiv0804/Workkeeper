import React from 'react';
import '../../../../css/components/admin/employee/EmployeeFilterBar.css';
import { Search, ChevronDown, Plus } from 'lucide-react';

const EmployeeFilterBar = () => {
  return (
    <div className="admin-emp-filters-card">
      <div className="emp-filters-left">
        <div className="emp-search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search Employee" 
            className="emp-search-input"
          />
        </div>
        
        <div className="emp-filter-dropdown">
          <span>Filter by Department</span>
          <ChevronDown size={16} className="emp-filter-chevron" />
        </div>
        
        <div className="emp-filter-dropdown">
          <span>Employment Status</span>
          <ChevronDown size={16} className="emp-filter-chevron" />
        </div>

        <div className="emp-filter-dropdown">
          <span>Role</span>
          <ChevronDown size={16} className="emp-filter-chevron" />
        </div>
      </div>

      <div className="emp-filters-right">
        <button className="emp-add-btn">
          <Plus size={18} />
          <span>Add New Employee</span>
        </button>
      </div>
    </div>
  );
};

export default EmployeeFilterBar;
