// src/pages/jobseeker/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Bookmark, User, LogOut } from 'lucide-react';

const dashboardItems = [
  { icon: <Briefcase className="w-6 h-6" />, title: 'Job Listings', path: '/jobseeker/jobs' },
  { icon: <Bookmark className="w-6 h-6" />, title: 'Saved Jobs', path: '/jobseeker/saved' },
  { icon: <User className="w-6 h-6" />, title: 'Profile', path: '/jobseeker/profile' },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-montserrat">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-black mb-6 text-center"
      >
        Job Seeker Dashboard
      </motion.h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {dashboardItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => navigate(item.path)}
            className="cursor-pointer bg-white shadow-md rounded-2xl p-6 flex items-center gap-4 transition duration-300 hover:shadow-primary"
          >
            <div className="text-primary">{item.icon}</div>
            <div>
              <h2 className="text-lg font-semibold text-black">{item.title}</h2>
              <p className="text-sm text-gray-600">Explore your {item.title.toLowerCase()}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => navigate('/logout')}
          className="flex items-center gap-2 text-red-600 hover:text-red-700 transition font-semibold"
        >
          <LogOut className="w-5 h-5" /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
