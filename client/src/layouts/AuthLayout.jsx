

import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50 relative overflow-hidden">
      
      {/* Content area - center aligned */}
      <div className="flex-grow flex items-center justify-center px-4 relative z-10">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Bottom background image */}
      <img
        src="/bg.png"
        alt="background"
        className="w-full h-[35vh] object-cover pointer-events-none z-0"
      />
    </div>
  );
};

export default AuthLayout;
