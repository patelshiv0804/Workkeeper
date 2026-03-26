import React from 'react';
import '../../../../css/components/admin/shared/Pagination.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
  return (
    <div className="admin-pagination-container">
      <div className="pagination-info">
        Showing 1-10 of 256 records
      </div>
      <div className="pagination-controls">
        <button className="page-nav-btn" disabled>
          <ChevronLeft size={16} />
        </button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <span className="page-ellipsis">...</span>
        <button className="page-btn">26</button>
        <button className="page-nav-btn">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
