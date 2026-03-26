import React, { useState, useEffect } from 'react';
import { Calendar, Send, CheckCircle2 } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../css/components/applyleave/LeaveFormCard.css';

const LeaveFormCard = () => {
    const [formData, setFormData] = useState({
        leaveType: '',
        startDate: '',
        endDate: '',
        reason: ''
    });
    const [duration, setDuration] = useState(0);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        if (formData.startDate && formData.endDate) {
            const start = new Date(formData.startDate);
            const end = new Date(formData.endDate);
            const diffTime = end - start;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
            setDuration(diffDays > 0 ? diffDays : 0);
        } else {
            setDuration(0);
        }
    }, [formData.startDate, formData.endDate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClear = () => {
        setFormData({
            leaveType: '',
            startDate: '',
            endDate: '',
            reason: ''
        });
        setSubmitSuccess(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation check
        if (!formData.leaveType || !formData.startDate || !formData.endDate || !formData.reason) return;
        if (duration <= 0) return;

        // Simulate API Success
        console.log("Submitting Leave Application:", formData);
        setSubmitSuccess(true);
        setTimeout(() => {
            handleClear();
        }, 3000);
    };

    return (
        <form className="card leave-form-card" onSubmit={handleSubmit}>
            {submitSuccess && (
                <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', padding: '12px', borderRadius: '8px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} />
                    <span>Your leave request has been submitted successfully!</span>
                </div>
            )}
            
            <div className="form-body">
                {/* Leave Type row */}
                <div className="form-group row-full">
                    <label className="form-label">Leave Type</label>
                    <div className="select-wrapper">
                        <select className="form-select" name="leaveType" value={formData.leaveType} onChange={handleChange} required>
                            <option value="" disabled hidden>Select type (Privilege, Optional, Paternity...)</option>
                            <option value="privilege">Privilege Leave</option>
                            <option value="optional">Optional Leave</option>
                            <option value="paternity">Paternity Leave</option>
                        </select>
                    </div>
                </div>

                {/* Date Row */}
                <div className="form-row date-row">
                    <div className="form-group">
                        <label className="form-label">Start Date</label>
                        <div className="input-wrapper">
                            <DatePicker
                                selected={formData.startDate}
                                onChange={(date) => setFormData({ ...formData, startDate: date })}
                                selectsStart
                                startDate={formData.startDate}
                                endDate={formData.endDate}
                                className="form-input datepicker-input"
                                placeholderText="Select start date"
                                dateFormat="MM/dd/yyyy"
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                required
                            />
                            <Calendar size={16} className="input-icon text-muted" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">End Date</label>
                        <div className="input-wrapper">
                            <DatePicker
                                selected={formData.endDate}
                                onChange={(date) => setFormData({ ...formData, endDate: date })}
                                selectsEnd
                                startDate={formData.startDate}
                                endDate={formData.endDate}
                                minDate={formData.startDate}
                                className="form-input datepicker-input"
                                placeholderText="Select end date"
                                dateFormat="MM/dd/yyyy"
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                required
                            />
                            <Calendar size={16} className="input-icon text-muted" />
                        </div>
                    </div>
                </div>

                {/* Reason */}
                <div className="form-group row-full">
                    <label className="form-label">Reason for Leave</label>
                    <textarea
                        className="form-textarea"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder="Briefly describe your reason for leave (e.g. Family vacation, Personal emergency...)"
                        rows="4"
                        required
                    ></textarea>
                </div>

            </div>

            {/* Footer Section */}
            <div className="form-footer">

                <div className="duration-info">
                    <span className="duration-label">ESTIMATED DURATION</span>
                    <div className="duration-value-group">
                        <span className="duration-number">{duration} {duration === 1 ? 'Day' : 'Days'}</span>
                        {duration > 0 ? (
                            <span className="duration-badge bg-gray" style={{ backgroundColor: '#dcfce7', color: '#166534' }}>Calculated</span>
                        ) : (
                            <span className="duration-badge badge-pending">Pending calculation</span>
                        )}
                    </div>
                </div>

                <div className="form-actions">
                    <button type="button" className="btn-cancel" onClick={handleClear}>Cancel</button>
                    <button type="submit" className="btn-apply-orange">
                        <Send size={16} className="mr-2" /> Apply Leave
                    </button>
                </div>

            </div>
        </form>
    );
};

export default LeaveFormCard;
