import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../../css/components/exitprocess/DatePicker.css';

const DatePicker = ({ value, onChange, minDate, placeholder, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (value) {
      setCurrentMonth(new Date(value));
    }
  }, [value, isOpen]);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = (e) => {
    e.preventDefault();
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = (e) => {
    e.preventDefault();
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    // Check minDate constraint
    if (minDate && selectedDate < minDate) {
      return; 
    }
    
    onChange(selectedDate);
    setIsOpen(false);
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const totalDays = daysInMonth(year, month);
    const startDay = firstDayOfMonth(year, month);
    
    const days = [];
    const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Blank spaces for start of month
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Actual days
    for (let i = 1; i <= totalDays; i++) {
      const dateToCheck = new Date(year, month, i);
      const isSelected = value && 
        dateToCheck.getDate() === value.getDate() && 
        dateToCheck.getMonth() === value.getMonth() && 
        dateToCheck.getFullYear() === value.getFullYear();
        
      const isDisabled = minDate && dateToCheck < minDate;
      const isToday = new Date().toDateString() === dateToCheck.toDateString();

      days.push(
        <div 
          key={`day-${i}`} 
          className={`calendar-day ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''} ${isToday ? 'today' : ''}`}
          onClick={() => !isDisabled && handleDateClick(i)}
        >
          {i}
        </div>
      );
    }

    return (
      <div className="custom-calendar-dropdown">
        <div className="calendar-header">
          <button className="calendar-nav-btn" onClick={handlePrevMonth}><ChevronLeft size={16} /></button>
          <span className="calendar-current-month">{monthNames[month]} {year}</span>
          <button className="calendar-nav-btn" onClick={handleNextMonth}><ChevronRight size={16} /></button>
        </div>
        
        <div className="calendar-grid">
          {weekDays.map(day => (
            <div key={day} className="calendar-weekday">{day}</div>
          ))}
          {days}
        </div>
      </div>
    );
  };

  const formatDateString = (dateObj) => {
    if (!dateObj) return '';
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="date-picker-wrapper" ref={wrapperRef}>
      {icon && icon}
      <input 
        type="text" 
        className="form-input date-picker-input" 
        placeholder={placeholder || 'mm/dd/yyyy'} 
        value={formatDateString(value)}
        readOnly
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && renderCalendar()}
    </div>
  );
};

export default DatePicker;
