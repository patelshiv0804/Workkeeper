import React from 'react';
import AdminSidebar from './AdminSidebar';
import Header from '../../Header'; // Usually we'd create an AdminHeader, but reusing standard top header is fine if generic

const AdminLayout = ({ children }) => {
    return (
        <div className="app-container">
            <AdminSidebar />
            <div className="main-content-wrapper" style={{ marginLeft: '260px', width: 'calc(100% - 260px)' }}> 
                {/* 
                  Since standard Sidebar is width 260 and Main Content accounts for it via CSS grid,
                  we ensure Admin Sidebar, which is fixed, properly offsets the content wrapper identically 
                  if we override layout contexts. But generic app-layout CSS handles this usually.
                */}
                <Header />
                <main className="main-scroll-area">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
