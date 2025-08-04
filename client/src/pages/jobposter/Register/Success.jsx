// src/pages/jobposter/Register/Success.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBriefcase } from 'react-icons/fa';
import successImage from '../../../assets/illustrations/success-jobposter.png';
import AuthLayout from '@/layouts/AuthLayout';

const Success = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50 font-[Montserrat]">
        <div className="bg-white shadow-lg rounded-2xl max-w-xl w-full text-center p-8 sm:p-10">
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#005A3C] flex items-center justify-center gap-2 mb-2">
            
              Account Created Successfully!
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              You're all set to start posting jobs and hiring top talent.
              <br />
              Build your company’s presence and connect with the right candidates today.
            </p>
          </div>

          <img
            src={successImage}
            alt="Success"
            className="w-36 sm:w-40 mx-auto mb-8 animate-shake"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/jobposter/dashboard')}
              className="flex items-center justify-center gap-2 bg-[#005A3C] text-white px-6 py-3 rounded-lg shadow hover:bg-[#00452D] transition-all duration-300"
            >
              <FaBriefcase /> Go to Dashboard
            </button>
            <button
              onClick={() => navigate('/jobposter/post-job')}
              className="flex items-center justify-center gap-2 bg-green-100 text-[#005A3C] px-6 py-3 rounded-lg shadow hover:bg-green-200 transition-all duration-300"
            >
              <FaBriefcase /> Post a Job Now
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Success;
