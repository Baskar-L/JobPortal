import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockKeyhole, ShieldCheck } from 'lucide-react';
import AuthLayout from '../../layouts/AuthLayout';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    alert('Password reset successful!');
    navigate('/auth/success');
  };

  return (
    <AuthLayout>
       {/* 🔰 Logo Text on Top */}
        <h1 className="text-xl font-extrabold text-center text-black mb-4">LOGO</h1>
      <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 bg-white animate-fadeIn font-[Montserrat]">
        
       

        {/* 🔒 Title */}
        <h2 className="text-2xl font-bold text-center text-black mb-6">Reset Your Password</h2>

        <form onSubmit={handleReset} className="space-y-5">
          {/* ✅ New Password Field */}
          <div>
            <label className="block text-black font-medium mb-1">New Password</label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-2.5 text-gray-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition"
                placeholder="Enter new password"
                required
              />
            </div>
          </div>

          {/* ✅ Confirm Password Field */}
          <div>
            <label className="block text-black font-medium mb-1">Confirm Password</label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-2.5 text-gray-500" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition"
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>

          {/* ✅ Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#005A3C] hover:bg-green-900 text-white py-2 rounded-lg transition duration-300"
          >
            <ShieldCheck size={18} /> Reset Password
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
