import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content-wrapper">
                <Header />
                <main className="main-scroll-area">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
