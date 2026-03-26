import React from 'react';
import { Lock, MapPin, Cpu } from 'lucide-react';

const PunchRecordRow = ({ record }) => {
  return (
    <tr>
      <td className="icon-col">
        <Lock size={16} className="padlock-icon" />
      </td>
      <td className="datetime-col">
        <div className="record-date">{record.date}</div>
        <div className="record-time">{record.time}</div>
      </td>
      <td className="employee-col">
        <div className="employee-info">
          <img src={record.employeeAvatar} alt={record.employeeName} className="employee-avatar" />
          <span className="employee-name">{record.employeeName}</span>
        </div>
      </td>
      <td className="location-col">
        <div className="location-info">
          <MapPin size={14} className="location-icon" />
          <span>{record.location}</span>
        </div>
      </td>
      <td className="source-col">
        <span className="source-badge">
          <Cpu size={12} />
          {record.source}
        </span>
      </td>
      <td className="status-col">
        <span className={`status-badge ${record.status.toLowerCase()}`}>
          {record.status}
        </span>
      </td>
    </tr>
  );
};

export default PunchRecordRow;
