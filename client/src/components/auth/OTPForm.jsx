// src/components/auth/OTPForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, SendHorizonal } from 'lucide-react';

const OTPForm = ({ otp, setOtp, handleResend }) => {
  const navigate = useNavigate();

  const handleVerify = () => {
    if (otp === '123456') {
      navigate('/reset-password');
    } else {
      alert('Invalid OTP');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerify();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 animate-fadeIn w-full max-w-md mx-auto font-[Montserrat]"
    >
      <label
        htmlFor="otp"
        className="block text-black font-semibold text-sm sm:text-base"
      >
        Enter OTP:
      </label>
      <input
        id="otp"
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition text-sm sm:text-base"
        placeholder="Enter the OTP sent to your email"
        maxLength={6}
      />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#005A3C] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 ease-in-out w-full justify-center text-sm sm:text-base"
        >
          <ShieldCheck size={18} /> Verify Code
        </button>

        <button
          type="button"
          onClick={handleResend}
          className="flex items-center gap-2 border bg-[#005A3C] text-whitehover:bg-opacity-90 px-4 py-2 rounded-lg transition duration-300 ease-in-out w-full justify-center text-sm sm:text-base"
        >
          <SendHorizonal size={18} /> Resend OTP
        </button>
      </div>
    </form>
  );
};

export default OTPForm;

