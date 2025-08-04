import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, User } from 'lucide-react';
import AuthLayout from '@/layouts/AuthLayout';

const Register = () => {
  const [activeRole, setActiveRole] = useState('employee');
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeRole === 'employee') {
      navigate('/jobseeker/register/basic-info');
    } else {
      navigate('/jobposter/register/basic-info');
    }
  };

  return (
    <AuthLayout>
        <h1 className="text-3xl font-bold text-black text-center">LOGO</h1>
      <motion.div
        className="flex flex-col items-center justify-center px-4 py-10 w-full max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg w-full text-center"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
         
          <h1 className="text-3xl font-bold text-black mb-2">Create Account</h1>
          <p className="text-gray-600 mb-6">Join thousands of professionals</p>

          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <button
              onClick={() => setActiveRole('employee')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl font-medium transition duration-300 ${
                activeRole === 'employee'
                  ? 'bg-[#005A3C] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100'
              }`}
            >
              <User className="w-5 h-5" />
              Job Seeker
            </button>
            <button
              onClick={() => setActiveRole('employer')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl font-medium transition duration-300 ${
                activeRole === 'employer'
                  ? 'bg-[#005A3C] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Job Poster
            </button>
          </div>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-700">
              Continue as a{' '}
              <span className="font-semibold text-black">
                {activeRole === 'employee' ? 'Job Seeker' : 'Job Poster'}
              </span>
            </p>

            <motion.button
              onClick={handleNext}
              className="bg-[#005A3C] hover:bg-green-800 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 w-full"
              whileTap={{ scale: 0.97 }}
            >
              Continue →
            </motion.button>

            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-white bg-[#005A3C] font-medium hover:underline transition"
              >
                Login
              </button>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AuthLayout>
  );
};

export default Register;


