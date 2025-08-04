// src/pages/auth/ForgotPassword.jsx
import React, { useState } from 'react';
import { Mail, Send, ShieldCheck } from 'lucide-react';
import OTPForm from '@/components/auth/OTPForm';
import AuthLayout from '../../layouts/AuthLayout';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOtp = () => {
    if (email.trim()) {
      setOtpSent(true);
      // Add API call to send OTP here
    }
  };

  const handleVerify = () => {
    if (otp === '123456') {
      window.location.href = '/reset-password';
    }
  };

  return (
    <AuthLayout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 font-[Montserrat]">
        {/* Logo / App name text */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-black tracking-wide">LOGO</h2>
        </div>

        {/* Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-500 animate-fadeIn">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6 text-center">
            Forgot Password
          </h1>

          {!otpSent ? (
            <>
              <div className="relative mb-4">
                <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition text-sm sm:text-base"
                />
              </div>
              <button
                onClick={handleSendOtp}
                className="flex items-center justify-center gap-2 bg-[#005A3C] hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 w-full text-sm sm:text-base"
              >
                <Send size={18} /> Send OTP
              </button>
            </>
          ) : (
            <OTPForm
              otp={otp}
              setOtp={setOtp}
              handleVerify={handleVerify}
              handleResend={() => setOtpSent(true)}
              icon={<ShieldCheck />}
            />
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
