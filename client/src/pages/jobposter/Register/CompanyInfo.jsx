// src/pages/jobposter/Register/CompanyInfo.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Globe,
  BadgeCheck,
  Upload,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import RegisterLayout from '@layouts/RegisterLayout';

const CompanyInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    accessId: '',
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const steps = ['Basic Info', 'Company Info', 'Roles details', 'Verify'];

  return (
    <RegisterLayout currentStep={1} type="jobposter" steps={steps}>
      <div className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in-up font-[Montserrat]">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Company Info
        </h2>

        <div className="space-y-5">
          {/* Company Name */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#005A3C] transition-all">
            <Building2 className="text-gray-400 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Company Name"
              onChange={handleChange}
              className="w-full bg-transparent text-black placeholder-gray-400 outline-none"
            />
          </div>

          {/* Website */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#005A3C] transition-all">
            <Globe className="text-gray-400 mr-2" />
            <input
              type="url"
              name="website"
              placeholder="Company Website"
              onChange={handleChange}
              className="w-full bg-transparent text-black placeholder-gray-400 outline-none"
            />
          </div>

          {/* Access ID */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#005A3C] transition-all">
            <BadgeCheck className="text-gray-400 mr-2" />
            <input
              type="text"
              name="accessId"
              placeholder="Access ID"
              onChange={handleChange}
              className="w-full bg-transparent text-black placeholder-gray-400 outline-none"
            />
          </div>

          {/* Upload Logo */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#005A3C] transition-all">
            <Upload className="text-gray-400 mr-2" />
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleChange}
              className="w-full border-0 rounded-md px-2 py-1 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-[#005A3C] file:text-white hover:file:bg-[#00462f] transition"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2  text-white bg-[#005A3C] hover:bg-[#00462f] transition"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Previous</span>
          </button>

          <button
            onClick={() => navigate('/jobposter/register/role-details')}
            className="flex items-center gap-2 bg-[#005A3C]  text-white px-6 py-2 rounded-lg hover:bg-[#00462f] transition-all duration-300 shadow-md"
          >
            <span className="font-medium">Next</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </RegisterLayout>
  );
};

export default CompanyInfo;

