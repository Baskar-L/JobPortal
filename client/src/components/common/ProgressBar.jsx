
// src/components/common/ProgressBar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Circle,
  User,
  Building2,
  ClipboardList,
  ShieldCheck,
  Briefcase,
  Sliders,
} from 'lucide-react';

const iconMap = {
  jobposter: {
    basicinfo: User,
    companyinfo: Building2,
    roledetails: ClipboardList,
    verify: ShieldCheck,
  },
  jobseeker: {
    basicinfo: User,
    career: Briefcase,
    preferences: Sliders,
    verify: ShieldCheck,
  },
};

const stepLabels = {
  basicinfo: 'Basic Info',
  companyinfo: 'Company Info',
  roledetails: 'Role Details',
  career: 'Career',
  preferences: 'Preferences',
  verify: 'Verify',
};

const stepMap = {
  jobposter: ['basicinfo', 'companyinfo', 'roledetails', 'verify'],
  jobseeker: ['basicinfo', 'career', 'preferences', 'verify'],
};

const getSteps = (type) => stepMap[type] || [];

const ProgressBar = ({ currentStep = 0, type = '' }) => {
  const steps = getSteps(type);
  const icons = iconMap[type] || {};

  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between w-full mb-8 px-4 sm:px-8 font-[Montserrat]">
      {steps.map((step, index) => {
        const isActive = index <= currentStep;
        const Icon = icons[step] || Circle;

        return (
          <div key={step} className="flex-1 relative text-center mb-6 sm:mb-0">
            {/* Step Icon and Label */}
            <div className="flex flex-col items-center z-10">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: isActive ? 1 : 0.9 }}
                className={`rounded-full p-2 border-2 transition-all duration-300 ${
                  isActive
                    ? 'bg-[#005A3C] border-[#005A3C] text-white'
                    : 'bg-gray-200 border-gray-300 text-gray-500'
                }`}
              >
                <Icon size={20} />
              </motion.div>
              <span className="text-xs sm:text-sm mt-2 capitalize text-black">{stepLabels[step]}</span>
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="absolute top-4 left-1/2 w-full h-1 z-0 transform -translate-x-1/2 sm:w-[calc(100%+16px)]">
                <div className="w-full bg-gray-300 h-1 rounded-full" />
                {isActive && (
                  <motion.div
                    layoutId="progress"
                    className="bg-[#005A3C] h-1 absolute top-0 left-0 rounded-full"
                    style={{ width: '100%' }}
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
