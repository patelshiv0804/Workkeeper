import React from 'react';
import { useSelector } from 'react-redux';
import { Search, Bell } from 'lucide-react';
import '../../css/components/Header.css';

const Header = () => {
    const { user } = useSelector((state) => state.auth);
    const { unreadCount } = useSelector((state) => state.notifications);

    return (
        <header className="header">
            <div className="search-container">
                <Search className="search-icon" size={20} />
                <input type="text" placeholder="Search" className="search-input" />
            </div>

            <div className="header-actions">
                <button className="notification-btn">
                    <Bell size={20} />
                    {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
                </button>

                <div className="user-profile">
                    <div className="user-info">
                        <h4 className="user-name">{user?.name || 'User'}</h4>
                        <p className="user-role">{user?.role || 'EMPLOYEE'}</p> 
                    </div>
                    <div className="user-avatar">
                        <img 
                          src={`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=${user?.avatarColor?.replace('#', '') || 'F97316'}&color=fff`} 
                          alt={user?.name || 'User'} 
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
