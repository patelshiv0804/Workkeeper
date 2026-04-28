import React from 'react';
import AdminSidebar from './AdminSidebar';
import Header from '../../Header'; 
import { Outlet } from 'react-router-dom';

const AdminLayout = ({ children }) => {
    return (
        <div className="app-container">
            <AdminSidebar />
            <div className="main-content-wrapper" style={{ marginLeft: '260px', width: 'calc(100% - 260px)' }}> 
                <Header />
                <main className="main-scroll-area">
                    {/* {children} */}
                    <Outlet />  
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
