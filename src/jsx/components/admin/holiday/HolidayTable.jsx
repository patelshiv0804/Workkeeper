import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import '../../../../css/components/admin/holiday/HolidayTable.css';
import StatusBadge from '../shared/StatusBadge';

// Sample Data
const staticHolidays = [
  {
    id: 1,
    name: "New Year's Day",
    date: "Jan 01, 2024",
    type: "Public",
    units: ["Global"],
    description: "Annual public holiday",
    status: "Active"
  },
  {
    id: 2,
    name: "Founder's Day",
    date: "Feb 14, 2024",
    type: "Company",
    units: ["New York HQ", "Engineering"],
    description: "Company foundation celebration",
    status: "Active"
  },
  {
    id: 3,
    name: "Lunar New Year",
    date: "Feb 10, 2024",
    type: "Regional",
    units: ["Singapore Office"],
    description: "Public holiday for Asia region",
    status: "Active"
  },
  {
    id: 4,
    name: "Legacy Break",
    date: "Dec 24, 2023",
    type: "Company",
    units: ["All Offices"],
    description: "Previous year seasonal break",
    status: "Inactive"
  }
];

const getDotClass = (type, status) => {
  if (status === 'Inactive') return 'dot-inactive';
  switch (type) {
    case 'Public': return 'dot-public';
    case 'Company': return 'dot-company';
    case 'Regional': return 'dot-regional';
    default: return 'dot-inactive';
  }
};

const getTypeClass = (type) => {
  switch (type) {
    case 'Public': return 'holiday-type-public';
    case 'Company': return 'holiday-type-company';
    case 'Regional': return 'holiday-type-regional';
    default: return '';
  }
};

const HolidayTable = () => {
  return (
    <div className="holiday-table-card">
      <div className="holiday-table-container">
        <table className="holiday-table">
          <thead>
            <tr>
              <th>Holiday Name</th>
              <th>Holiday Date</th>
              <th>Holiday Type</th>
              <th>Applicable Units</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staticHolidays.map((holiday) => (
              <tr key={holiday.id}>
                <td>
                  <div className="holiday-name-cell">
                    <span className={`holiday-dot ${getDotClass(holiday.type, holiday.status)}`}></span>
                    {holiday.name}
                  </div>
                </td>
                <td>{holiday.date}</td>
                <td>
                  <span className={`holiday-type-badge ${getTypeClass(holiday.type)}`}>
                    {holiday.type}
                  </span>
                </td>
                <td>
                  <div className="holiday-units-cell">
                    {holiday.units.map((unit, index) => (
                      <span key={index} className="holiday-unit-tag">{unit}</span>
                    ))}
                  </div>
                </td>
                <td>
                  <div className="holiday-desc-cell" title={holiday.description}>
                    {holiday.description}
                  </div>
                </td>
                <td>
                  <StatusBadge status={holiday.status} />
                </td>
                <td>
                  <div className="holiday-actions">
                    <button className="action-btn" title="Edit">
                      <Pencil size={16} />
                    </button>
                    <button className="action-btn delete" title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer & Pagination */}
      <div className="holiday-table-footer">
        <div className="holiday-footer-text">
          Showing 1 to 4 of 24 holidays
        </div>
        <div className="holiday-pagination-btns">
          <button className="holiday-page-btn">Previous</button>
          <button className="holiday-page-btn active-page">Next</button>
        </div>
      </div>
    </div>
  );
};

export default HolidayTable;
