// src/pages/jobposter/Register/Verify.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import PasswordStrengthMeter from '../../../components/common/PasswordStrengthMeter';
import RegisterLayout from '@/layouts/RegisterLayout';

const Verify = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const steps = ['Basic Info', 'Company Info', 'Roles Details', 'Verify'];

  return (
    <RegisterLayout currentStep={3} type="jobposter" steps={steps}>
      <div className="max-w-md mx-auto p-4 animate-fadeIn font-montserrat">
        <h2 className="text-2xl font-bold text-black mb-6 text-center sm:text-left">
          Verify Your Account
        </h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition text-sm"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition text-sm"
        />

        <PasswordStrengthMeter password={password} />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition text-sm"
        />

        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" id="remember" className="accent-[#005A3C]" />
          <label htmlFor="remember" className="text-gray-700 text-sm">Remember Me</label>
        </div>

        <button
          onClick={() => navigate('/jobposter/register/success')}
          className="flex items-center justify-center gap-2 bg-[#005A3C] text-white px-6 py-3 w-full rounded-xl hover:bg-[#00432D] transition duration-300 transform hover:scale-[1.02] shadow-lg"
        >
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold">Verify</span>
        </button>
      </div>
    </RegisterLayout>
  );
};

export default Verify;
