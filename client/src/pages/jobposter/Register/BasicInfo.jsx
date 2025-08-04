// src/pages/jobposter/Register/BasicInfo.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, ArrowRight, LogIn } from 'lucide-react';
import RegisterLayout from '@/layouts/RegisterLayout';

const BasicInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const steps = ['Basic Info', 'Company Info', 'Roles Details', 'Verify'];

  return (
    <RegisterLayout currentStep={0} type="jobposter" steps={steps}>
      <div className="w-full max-w-lg mx-auto px-4 py-6 sm:px-6 sm:py-8 bg-white rounded-2xl shadow-xl transition-all duration-300 font-[Montserrat]">
        <h2 className="text-2xl sm:text-3xl text-center font-bold text-black mb-6 animate-fadeIn">
          Basic Info
        </h2>

        {/* Full Name */}
        <div className="relative mb-5">
          <User className="absolute top-3.5 left-3 text-gray-400" size={20} />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition-all"
          />
        </div>

        {/* Email */}
        <div className="relative mb-5">
          <Mail className="absolute top-3.5 left-3 text-gray-400" size={20} />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition-all"
          />
        </div>

        {/* Phone */}
        <div className="relative mb-6">
          <Phone className="absolute top-3.5 left-3 text-gray-400" size={20} />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition-all"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between flex-wrap gap-4 sm:gap-0">
          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 text-white bg-[#005A3C] font-medium transition-all duration-300"
          >
            <LogIn size={18} /> Back to Login
          </button>

          <button
            onClick={() => navigate('/jobposter/register/company-info')}
            className="flex items-center gap-2 bg-[#005A3C] text-white px-6 py-2 rounded-lg hover:bg-[#00442E] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Next <ArrowRight size={18} className="animate-pulse" />
          </button>
        </div>
      </div>
    </RegisterLayout>
  );
};

export default BasicInfo;
