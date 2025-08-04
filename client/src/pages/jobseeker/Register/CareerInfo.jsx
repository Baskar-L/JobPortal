// src/pages/jobseeker/Register/CareerInfo.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowLeftIcon, PlusIcon } from '@heroicons/react/24/solid';
import RegisterLayout from '@/layouts/RegisterLayout';
import ProgressBar from '@/components/common/ProgressBar';

const CareerInfo = () => {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const navigate = useNavigate();

  const steps = ['Basic Info', 'Career Info', 'Preferences', 'Verify'];

  const addSkill = () => {
    if (skillInput && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  return (
    <RegisterLayout currentStep={1} type="jobseeker" steps={steps}>
      <ProgressBar
        steps={steps}
        currentStep={1}
        barColor="#005A3C" // Optional if your ProgressBar component supports it
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 font-[Montserrat]"
      >
        <h2 className="text-3xl font-bold text-black text-center">Career</h2>

        <input
          type="text"
          placeholder="Desired Role"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition"
        />

        <div className="space-y-2">
          <div className="flex gap-2 flex-col sm:flex-row">
            <input
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="Add Skill"
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition"
            />
            <button
              onClick={addSkill}
              className="flex items-center justify-center gap-1 bg-[#005A3C] hover:bg-[#00432d] text-white px-4 py-2 rounded-md transition duration-300"
            >
              <PlusIcon className="h-5 w-5" />
              Add
            </button>
          </div>

          <div className="flex gap-2 flex-wrap">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005A3C] transition">
          <option>Experience Level</option>
          <option>Fresher</option>
          <option>Mid</option>
          <option>Senior</option>
        </select>

        <input
          type="file"
          accept=".pdf"
          className="w-full border border-gray-300 rounded-md px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-[#005A3C] file:text-white hover:file:bg-[#00432d] transition"
        />

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
          <button
            onClick={() => navigate('/jobseeker/register/basic-info')}
            className="flex items-center justify-center gap-2 border bg-[#005A3C] text-white px-4 py-2 rounded-md hover:bg-[#00432d] transition duration-300"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Previous
          </button>

          <button
            onClick={() => navigate('/jobseeker/register/preferences')}
            className="flex items-center justify-center gap-2  bg-[#005A3C] hover:bg-[#00432d] text-white px-4 py-2 rounded-md transition duration-300"
          >
            Next
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </RegisterLayout>
  );
};

export default CareerInfo;

