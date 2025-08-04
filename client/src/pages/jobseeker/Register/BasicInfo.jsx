// src/pages/Register/BasicInfo.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaSignInAlt } from 'react-icons/fa';
import RegisterLayout from '@/layouts/RegisterLayout';

const BasicInfo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const steps = ['Basic Info', 'Career Info', 'Preferences', 'Verify'];

  return (
    <RegisterLayout currentStep={0} type="jobseeker" steps={steps}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 w-full max-w-3xl mx-auto p-4 font-montserrat"
      >
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-black mb-6 animate-fadeIn">
          Basic Info
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login')}
            className="flex items-center justify-center gap-2 border  bg-primary   text-white hover:bg-primary hover:text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            <FaSignInAlt />
            Login
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/jobseeker/register/career-info')}
            className="flex items-center justify-center gap-2  bg-primary text-white hover:bg-primary-dark px-6 py-2 rounded-lg transition-all duration-300"
          >
            Next
            <FaArrowRight />
          </motion.button>
        </div>
      </motion.div>
    </RegisterLayout>
  );
};

export default BasicInfo;
