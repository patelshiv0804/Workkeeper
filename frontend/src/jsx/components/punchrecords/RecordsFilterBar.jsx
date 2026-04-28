import React from 'react';
import { Search, ChevronDown, ListFilter } from 'lucide-react';
import '../../../css/components/punchrecords/PunchRecordsComponents.css'; 

const RecordsFilterBar = ({ searchTerm, setSearchTerm, filterType, setFilterType }) => {
  return (
    <div className="records-filter-bar">
      <div className="filter-left">
        <span className="filter-label">Show:</span>
        <button className="dropdown-btn" onClick={() => setFilterType(filterType === 'Last 7 Days' ? 'All Time' : 'Last 7 Days')}>
          {filterType}
          <ChevronDown size={16} />
        </button>
      </div>
      <div className="filter-right">
        <div className="search-input-wrapper">
          <Search size={16} className="punch-search-icon" />
          <input 
            type="text" 
            placeholder="Filter by location or employee ID..." 
            className="punch-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="icon-btn">
          <ListFilter size={18} />
        </button>
      </div>
    </div>
  );
};

export default RecordsFilterBar;
