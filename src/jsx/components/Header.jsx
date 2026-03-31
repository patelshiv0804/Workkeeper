import React from 'react';
import { Search, Bell } from 'lucide-react';
import '../../css/components/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="search-container">
                <Search className="search-icon" size={20} />
                <input type="text" placeholder="Search" className="search-input" />
            </div>

            <div className="header-actions">
                <button className="notification-btn">
                    <Bell size={20} />
                    <span className="badge"></span>
                </button>

                <div className="user-profile">
                    <div className="user-info">
                        <h4 className="user-name">Alex Johnson</h4>
                        {/* <p className="user-role">EMPLOYEE</p> */}
                        <p className="user-role">ADMIN</p> 
                    </div>
                    <div className="user-avatar">
                        <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=F97316&color=fff" alt="Alex Johnson" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
