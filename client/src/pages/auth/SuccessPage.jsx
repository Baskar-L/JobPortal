// src/pages/auth/SuccessPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LogIn,
  Home,
  CheckCircle,
  UserCheck,
  LayoutDashboard,
} from 'lucide-react';
import { motion } from 'framer-motion';
import successImage from '@/assets/illustrations/password.png';
import AuthLayout from '../../layouts/AuthLayout';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
        <h1 className="text-xl font-semibold text-black mb-4">LOGO</h1>
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center font-[Montserrat]">
        {/* Logo text at top */}
      

        {/* Animated image */}
        <motion.img
          src={successImage}
          alt="Success"
          className="w-40 mx-auto mb-6"
          animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3 }}
        />

        {/* Title */}
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-[#005A3C] mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle className="inline-block w-6 h-6 mr-2 text-[#005A3C]" />
          Password Updated Successfully!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Your password has been changed. <br />
          You can now log in with your new password and continue your journey.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => navigate('/login')}
            className="flex items-center justify-center gap-2 bg-[#005A3C] hover:bg-green-900 text-white px-5 py-2 rounded-xl transition duration-300"
          >
            <LogIn className="w-5 h-5" />
            Back to Login
          </button>

          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-5 py-2 rounded-xl transition duration-300"
          >
            <Home className="w-5 h-5" />
            Go to Home
          </button>
        </motion.div>
      </div>
    </AuthLayout>
  );
};

export default SuccessPage;
