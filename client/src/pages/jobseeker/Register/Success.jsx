// src/pages/jobseeker/Register/Success.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRightCircle, UserCircle2 } from 'lucide-react';
import successImg from '@/assets/illustrations/success-jobseeker.png';
import AuthLayout from '@/layouts/AuthLayout';

const Success = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-white font-[Montserrat]"
      >
        {/* Title and Subtitle */}
        <div className="mb-6 max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#005A3C] mb-3">
            Account Created Successfully!
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Welcome aboard. Your journey toward your dream job starts now. <br />
            <span className="font-medium">
              Complete your profile to get personalized jobs.
            </span>
          </p>
        </div>

        {/* Animated Success Image */}
        <motion.img
          src={successImg}
          alt="SuccessImg"
          className="w-40 sm:w-52 md:w-60 mb-6"
          animate={{
            rotate: [0, -5, 5, -5, 5, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap justify-center mt-4">
          <button
            onClick={() => navigate('/jobseeker/dashboard')}
            className="flex items-center gap-2   bg-[#005A3C] hover:bg-[#00432d] text-white px-5 py-2 rounded-xl transition-all duration-300 shadow-md font-medium"
          >
            <ArrowRightCircle className="w-5 h-5" />
            Go to Dashboard
          </button>

          <button
            onClick={() => navigate('/jobseeker/profile')}
            className="flex items-center gap-2  bg-[#005A3C] hover:bg-[#00432d] text-white px-5 py-2 rounded-xl transition-all duration-300 shadow-md font-medium"
          >
            <UserCircle2 className="w-5 h-5" />
            Complete My Profile
          </button>
        </div>
      </motion.div>
    </AuthLayout>
  );
};

export default Success;
