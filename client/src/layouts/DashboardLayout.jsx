// src/layouts/DashboardLayout.jsx
import React from 'react';
import Navbar from '@/components/common/Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 font-montserrat">
      <Navbar />
      <main className="p-4 max-w-7xl mx-auto transition-all duration-300">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
