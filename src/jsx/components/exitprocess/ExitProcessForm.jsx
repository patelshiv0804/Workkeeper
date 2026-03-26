import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import DatePicker from './DatePicker';
import '../../../css/components/exitprocess/ExitProcessComponents.css';

const ExitProcessForm = () => {
  const [resignationDate, setResignationDate] = useState(null);
  const [lastWorkingDay, setLastWorkingDay] = useState(null);
  const [dateError, setDateError] = useState('');

  const handleResignationChange = (date) => {
    setResignationDate(date);
    
    // Clear last working day if it's now invalid
    if (lastWorkingDay && date > lastWorkingDay) {
      setLastWorkingDay(null);
      setDateError('Last working day reset because it was before resignation date');
      setTimeout(() => setDateError(''), 4000);
    }
  };

  const handleLastDayChange = (date) => {
    setLastWorkingDay(date);
  };

  return (
    <div className="exit-form">
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Resignation Date</label>
          <div className="input-with-icon">
            <DatePicker 
              value={resignationDate}
              onChange={handleResignationChange}
              placeholder="mm/dd/yyyy"
              icon={<Calendar size={18} className="input-icon" />}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Last Working Day</label>
          <div className="input-with-icon">
            <DatePicker 
              value={lastWorkingDay}
              onChange={handleLastDayChange}
              minDate={resignationDate}
              placeholder="mm/dd/yyyy"
              icon={<Calendar size={18} className="input-icon" />}
            />
          </div>
          {dateError && <span className="error-message" style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{dateError}</span>}
        </div>
      </div>

      <div className="form-group full-width">
        <label className="form-label">Exit Reason</label>
        <textarea
          className="form-textarea"
          placeholder="Briefly describe the reason for resignation..."
          rows={4}
        ></textarea>
      </div>

      <div className="form-group full-width">
        <label className="form-label">Clearance Status</label>
        <input
          type="text"
          className="form-input disabled"
          value="Pending"
          readOnly
          disabled
        />
      </div>
    </div>
  );
};

export default ExitProcessForm;
