import React from "react";
import { Briefcase, User } from "lucide-react";

const RoleTabs = ({ selectedRole, onSelectRole }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-6 font-[Montserrat]">
      <button
        onClick={() => onSelectRole("jobseeker")}
        className={`flex items-center gap-2 px-5 py-2 rounded-full border text-sm sm:text-base font-medium transition-all duration-300 
        ${
          selectedRole === "jobseeker"
            ? "bg-[#005A3C] text-white border-[#005A3C]"
            : "bg-white text-black border-gray-300 hover:bg-gray-100"
        }`}
      >
        <User size={20} /> Job Seeker
      </button>
      <button
        onClick={() => onSelectRole("jobposter")}
        className={`flex items-center gap-2 px-5 py-2 rounded-full border text-sm sm:text-base font-medium transition-all duration-300 
        ${
          selectedRole === "jobposter"
            ? "bg-[#005A3C] text-white border-[#005A3C]"
            : "bg-white text-black border-gray-300 hover:bg-gray-100"
        }`}
      >
        <Briefcase size={20} /> Job Poster
      </button>
    </div>
  );
};

export default RoleTabs;
