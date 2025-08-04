// // src/pages/jobseeker/Register/Verify.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, KeyRound, ShieldCheck, LockKeyhole } from 'lucide-react';
import ProgressBar from '@/components/common/ProgressBar';
import RegisterLayout from '@/layouts/RegisterLayout';
import PasswordStrengthMeter from '@/components/common/PasswordStrengthMeter';

const Verify = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const steps = ['Basic Info', 'Career Info', 'Preferences', 'Verify'];

  return (
    <RegisterLayout currentStep={3} type="jobseeker" steps={steps}>
      <ProgressBar steps={steps} currentStep={4} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 mt-6 font-[Montserrat]"
      >
        <h2 className="text-2xl md:text-3xl text-center font-semibold text-black flex items-center justify-center gap-2">
          <ShieldCheck className="text-[#005A3C]" /> Verify and Set Password
        </h2>

        {/* OTP Input */}
        <div className="relative">
          <KeyRound className="absolute left-2 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full border border-gray-300 pl-10 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#005A3C]"
          />
        </div>

        {/* Set Password */}
        <div className="relative">
          <LockKeyhole className="absolute left-2 top-3 text-gray-400" />
          <input
            type="password"
            placeholder="Set Password"
            className="w-full border border-gray-300 pl-10 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#005A3C]"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <PasswordStrengthMeter password={password} />

        {/* Confirm Password */}
        <div className="relative">
          <LockKeyhole className="absolute left-2 top-3 text-gray-400" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 pl-10 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#005A3C]"
          />
        </div>

        {/* Remember Me */}
        <label className="flex items-center gap-2 text-black">
          <input type="checkbox" className="accent-[#005A3C]" />
          Remember Me
        </label>

        {/* Submit Button */}
        <motion.button
          onClick={() => navigate('/jobseeker/register/success')}
          whileTap={{ scale: 0.95 }}
          whileHover={{ backgroundColor: '#00452f' }}
          className="w-full flex items-center justify-center gap-2 bg-[#005A3C] hover:bg-[#00452f] text-white py-2 rounded transition-all duration-300"
        >
          <CheckCircle className="w-5 h-5" /> Verify & Complete
        </motion.button>
      </motion.div>
    </RegisterLayout>
  );
};

export default Verify;
