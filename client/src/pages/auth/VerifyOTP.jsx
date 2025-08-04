// src/pages/auth/VerifyOTP.jsx
import React from 'react';
import OTPForm from '../../components/auth/OTPForm';
import { CheckCircle, RotateCw } from 'lucide-react';

const VerifyOTP = () => {
  const [otp, setOtp] = React.useState('');

  const handleVerify = () => {
    alert('OTP Verified!');
  };

  const handleResend = () => {
    alert('OTP Resent');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8 animate-fadeIn">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-black mb-6">Verify OTP</h1>

        <OTPForm otp={otp} setOtp={setOtp} handleVerify={handleVerify} handleResend={handleResend} />

        <div className="flex items-center justify-between mt-6 gap-4">
          <button
            onClick={handleResend}
            className="flex items-center gap-2 w-full justify-center border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
          >
            <RotateCw size={18} /> Resend OTP
          </button>

          <button
            onClick={handleVerify}
            className="flex items-center gap-2 w-full justify-center bg-green-700 text-white hover:bg-green-800 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
          >
            <CheckCircle size={18} /> Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
