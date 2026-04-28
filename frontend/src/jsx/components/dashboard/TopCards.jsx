import React from 'react';
import { Timer, MapPin } from 'lucide-react';
import '../../../css/components/dashboard/TopCards.css';

const TopCards = ({ employeeInfo, todayPresence, locationStatus }) => {
    return (
        <div className="top-cards-grid">
            {/* Today's Presence Card */}
            <div className="card top-card">
                <div className="card-header">
                    <p className="card-label">TODAY'S PRESENCE</p>
                    <div className="icon-wrapper orange-icon">
                        <Timer size={20} />
                    </div>
                </div>
                <h2 className="presence-time">{todayPresence.totalHours}</h2>

                <div className="presence-details">
                    <div className="detail-row">
                        <span className="detail-label">First In</span>
                        <span className="detail-value">{todayPresence.firstIn}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Last Out</span>
                        <span className="detail-value">{todayPresence.lastOut}</span>
                    </div>
                </div>
            </div>

            {/* Location Status Card */}
            <div className="card top-card">
                <div className="card-header">
                    <p className="card-label">LOCATION STATUS</p>
                    <div className="icon-wrapper blue-icon">
                        <MapPin size={20} />
                    </div>
                </div>

                <div className="status-badge mt-4">
                    <span className={`status-dot ${locationStatus.status === 'Office' ? 'green-dot' : 'blue-dot'}`}></span>
                    {locationStatus.status}
                </div>

                <p className="location-text mt-8">
                    Currently verified at <strong>{locationStatus.location}</strong>.
                </p>
            </div>

            {/* Quick Info Card */}
            <div className="card top-card">
                <p className="card-label mb-4">QUICK INFO</p>

                <div className="info-grid">
                    <div className="info-item">
                        <p className="info-label">EMP ID</p>
                        <p className="info-value">{employeeInfo.empId}</p>
                    </div>
                    <div className="info-item">
                        <p className="info-label">DEPT</p>
                        <p className="info-value">{employeeInfo.department}</p>
                    </div>
                    <div className="info-item mt-4">
                        <p className="info-label">MANAGER</p>
                        <p className="info-value">{employeeInfo.manager}</p>
                    </div>
                    <div className="info-item mt-4">
                        <p className="info-label">SHIFT</p>
                        <p className="info-value">{employeeInfo.shift}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCards;
