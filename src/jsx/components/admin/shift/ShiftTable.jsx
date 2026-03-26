import React from 'react';
import '../../../../css/components/admin/shift/ShiftTable.css';
import Pagination from '../shared/Pagination';
import { Eye, Edit2, Trash2, Sun, Moon } from 'lucide-react';

// Inline simple Badge component as requested to distinguish day/night
const ShiftTypeBadge = ({ type }) => {
    const isNight = type === 'Night';
    return (
        <span className={`shift-type-badge ${isNight ? 'badge-night' : 'badge-day'}`}>
            {isNight ? <Moon size={12} /> : <Sun size={12} />}
            {type}
        </span>
    );
};

const ShiftTable = () => {
  const shifts = [
    {
      id: 1,
      name: 'Morning Routine',
      icon: <Sun size={20} className="shift-name-icon" />,
      iconColor: '#FDBA74',
      startTime: '08:00 AM',
      endTime: '04:00 PM',
      duration: '8h 0m',
      breakTime: '60 min',
      timezone: 'UTC',
      type: 'Day',
      assigned: 24
    },
    {
      id: 2,
      name: 'Night Operations',
      icon: <Moon size={20} className="shift-name-icon" />,
      iconColor: '#A5B4FC',
      startTime: '10:00 PM',
      endTime: '06:00 AM',
      duration: '8h 0m',
      breakTime: '45 min',
      timezone: 'UTC',
      type: 'Night',
      assigned: 12
    },
    {
      id: 3,
      name: 'Evening Support',
      icon: <Sun size={20} className="shift-name-icon text-yellow-500" />,
      iconColor: '#FDE047',
      startTime: '02:00 PM',
      endTime: '10:00 PM',
      duration: '8h 0m',
      breakTime: '60 min',
      timezone: 'EST',
      type: 'Day',
      assigned: 8
    }
  ];

  return (
    <div className="admin-shift-table-card">
      <div className="shift-table-wrapper">
        <table className="shift-data-table">
          <thead>
            <tr>
              <th>SHIFT NAME</th>
              <th>START TIME</th>
              <th>END TIME</th>
              <th>DURATION</th>
              <th>BREAK</th>
              <th>TIMEZONE</th>
              <th>SHIFT TYPE</th>
              <th>ASSIGNED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((shift) => (
              <tr key={shift.id}>
                <td>
                  <div className="shift-name-info">
                    <div className="shift-icon-wrapper" style={{ color: shift.iconColor }}>
                      {shift.icon}
                    </div>
                    <span className="shift-name-text">{shift.name}</span>
                  </div>
                </td>
                
                {/* Time Formats broken onto two lines for alignment mimicking the split style requirement indirectly */}
                <td className="time-col">
                  {shift.startTime.split(' ')[0]}<br />
                  <span className="time-meridian">{shift.startTime.split(' ')[1]}</span>
                </td>
                
                <td className="time-col">
                  {shift.endTime.split(' ')[0]}<br />
                  <span className="time-meridian">{shift.endTime.split(' ')[1]}</span>
                </td>

                <td className="duration-col">{shift.duration}</td>
                
                <td className="break-col">
                   {shift.breakTime.split(' ')[0]}<br />
                   <span className="break-label">{shift.breakTime.split(' ')[1]}</span>
                </td>

                <td className="tz-col">{shift.timezone}</td>
                
                <td><ShiftTypeBadge type={shift.type} /></td>
                
                <td className="assigned-col">
                   {shift.assigned}<br />
                   <span className="assigned-label">Employees</span>
                </td>

                <td className="shift-actions-col">
                  <div className="shift-action-buttons">
                    <button className="shift-icon-btn" title="View">
                      <Eye size={16} />
                    </button>
                    <button className="shift-icon-btn" title="Edit">
                      <Edit2 size={16} />
                    </button>
                    <button className="shift-icon-btn delete-btn" title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer using the pagination structure designed earlier */}
      <div className="shift-pagination-wrapper">
         <div className="pagination-info">Showing 1 to 3 of 12 shifts</div>
         <div className="pagination-controls">
            <button className="page-nav-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-nav-btn">Next</button>
         </div>
      </div>
    </div>
  );
};

export default ShiftTable;
