// src/pages/jobposter/Register/RoleDetails.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, UserCheck, Linkedin, Instagram, ArrowLeft, CheckCircle } from 'lucide-react';
import RegisterLayout from '@/layouts/RegisterLayout';

const RoleDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    dept: '',
    designation: '',
    linkedin: '',
    instagram: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const steps = ['Basic Info', 'Company Info', 'Roles Details', 'Verify'];

  return (
    <RegisterLayout currentStep={2} type="jobposter" steps={steps}>
      <div className="max-w-md mx-auto p-4 sm:p-6 md:p-8 animate-fadeIn font-[Montserrat]">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6 text-center">
          Role Details
        </h2>

        <div className="space-y-5">
          {/* Department */}
          <div className="relative">
            <Briefcase className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="dept"
              placeholder="Department"
              onChange={handleChange}
              className="w-full border pl-10 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition duration-300 text-sm"
            />
          </div>

          {/* Designation */}
          <div className="relative">
            <UserCheck className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="designation"
              placeholder="Your Designation"
              onChange={handleChange}
              className="w-full border pl-10 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition duration-300 text-sm"
            />
          </div>

          {/* LinkedIn */}
          <div className="relative">
            <Linkedin className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn Company Page"
              onChange={handleChange}
              className="w-full border pl-10 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition duration-300 text-sm"
            />
          </div>

          {/* Instagram */}
          <div className="relative">
            <Instagram className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="url"
              name="instagram"
              placeholder="Instagram (optional)"
              onChange={handleChange}
              className="w-full border pl-10 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition duration-300 text-sm"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white bg-[#005A3C] transition duration-200 font-medium text-sm"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Previous
          </button>

          <button
            onClick={() => navigate('/jobposter/register/verify')}
            className="flex items-center gap-2 bg-[#005A3C] text-white px-5 py-2.5 rounded-lg hover:bg-[#00724e] active:scale-95 transition-all duration-300 text-sm"
          >
            <CheckCircle className="h-5 w-5" />
            Complete Registration
          </button>
        </div>
      </div>
    </RegisterLayout>
  );
};

export default RoleDetails;


