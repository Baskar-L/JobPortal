// src/pages/jobseeker/Register/Preferences.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import RegisterLayout from '@/layouts/RegisterLayout';
import ProgressBar from '@/components/common/ProgressBar';

const Preferences = () => {
  const navigate = useNavigate();
  const [autoApply, setAutoApply] = useState(false);

  const steps = ['Basic Info', 'Career Info', 'Preferences', 'Verify'];

  return (
    <RegisterLayout currentStep={2} type="jobseeker" steps={steps}>
      <ProgressBar steps={steps} currentStep={3} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6 max-w-md mx-auto p-4 font-[Montserrat]"
      >
        <h2 className="text-2xl font-bold text-black text-center">Preferences</h2>

        <input
          type="text"
          placeholder="Preferred Job Location"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition"
        />

        <select
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition"
        >
          <option disabled selected>Job Type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Remote</option>
        </select>

        <label className="flex items-center gap-2 text-black">
          <input
            type="checkbox"
            checked={autoApply}
            onChange={() => setAutoApply(!autoApply)}
            className="accent-[#005A3C] w-4 h-4"
          />
          Enable Auto-Apply
        </label>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
          <button
            onClick={() => navigate('/jobseeker/register/career-info')}
            className="flex items-center justify-center gap-2 px-4 py-2  rounded bg-[#005A3C] text-white hover:bg-green-900 transition-all duration-300 shadow w-full sm:w-auto"
          >
            <ArrowLeft size={18} />
            Previous
          </button>

          <button
            onClick={() => navigate('/jobseeker/register/verify')}
            className="flex items-center justify-center gap-2 px-4 py-2  rounded bg-[#005A3C] text-white hover:bg-green-900 transition-all duration-300 shadow w-full sm:w-auto"
          >
            <CheckCircle size={18} />
            Complete Registration
          </button>
        </div>
      </motion.div>
    </RegisterLayout>
  );
};

export default Preferences;
