import React from 'react';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import { THEME_COLORS } from '../../styles/theme';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: THEME_COLORS.bg.primary }}>
      {/* Left Sidebar */}
      <div className="w-64 border-r" style={{ borderColor: THEME_COLORS.bg.secondary }}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

      {/* Right Sidebar */}
      <div className="w-80 border-l" style={{ borderColor: THEME_COLORS.bg.secondary }}>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
