

// src/layouts/RegisterLayout.jsx
import React from 'react';
import ProgressBar from '@/components/common/ProgressBar';

const RegisterLayout = ({ children, currentStep, type }) => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-start overflow-hidden font-montserrat">
      
      {/* ✅ Logo top-left */}
      <div className="w-full px-6 pt-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">LOGO</h1>
      </div>

      {/* ✅ Registration Box */}
      <div className="w-full max-w-2xl bg-white p-6 sm:p-8 rounded-2xl shadow-md mt-4 mb-2 z-10 mx-4">
        <div className="text-center px-2 sm:px-4 pt-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">Create Account</h1>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Join thousands of professionals</p>
        </div>

        <ProgressBar currentStep={currentStep} type={type} />

        <div className="mt-6">{children}</div>
      </div>

      {/* ✅ Bottom Image - full width, no extra space */}
      <img
        src="/bg.png"
        alt="background"
        className="w-full h-[30vh] sm:h-[35vh] object-cover pointer-events-none"
      />
    </div>
  );
};

export default RegisterLayout;
