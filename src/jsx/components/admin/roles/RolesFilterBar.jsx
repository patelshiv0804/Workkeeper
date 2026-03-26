import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import '../../../../css/components/admin/roles/RolesFilterBar.css';

const RolesFilterBar = () => {
  return (
    <div className="roles-filter-card">
      <div className="roles-filter-group">
        <div className="roles-search-box">
          <Search className="roles-search-icon" size={18} />
          <input type="text" placeholder="Search roles or permissions" />
        </div>
        
        <div className="roles-dropdown">
          <select defaultValue="">
            <option value="" disabled hidden>Permission Category</option>
            <option value="all">All Categories</option>
            <option value="system">System Access</option>
            <option value="hr">HR Operations</option>
            <option value="finance">Finance & Payroll</option>
          </select>
          <ChevronDown className="roles-dropdown-icon" size={16} />
        </div>

        <div className="roles-dropdown">
          <select defaultValue="">
            <option value="" disabled hidden>Status</option>
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <ChevronDown className="roles-dropdown-icon" size={16} />
        </div>
      </div>
      
      <button className="btn-apply-filters">
        Apply Filters
      </button>
    </div>
  );
};

export default RolesFilterBar;
