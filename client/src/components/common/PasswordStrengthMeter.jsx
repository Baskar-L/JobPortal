// src/components/common/PasswordStrengthMeter.jsx
import React from 'react';

const PasswordStrengthMeter = ({ password = '' }) => {
  const getStrength = (password) => {
    if (password.length > 10) return 'strong';
    if (password.length > 6) return 'medium';
    if (password.length > 0) return 'weak';
    return '';
  };

  const strength = getStrength(password);

  const getColor = () => {
    switch (strength) {
      case 'strong':
        return 'bg-green-600';
      case 'medium':
        return 'bg-yellow-400';
      case 'weak':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  const getLabel = () => {
    switch (strength) {
      case 'strong':
        return 'Strong';
      case 'medium':
        return 'Medium';
      case 'weak':
        return 'Weak';
      default:
        return '';
    }
  };

  const getWidth = () => {
    switch (strength) {
      case 'strong':
        return '100%';
      case 'medium':
        return '66%';
      case 'weak':
        return '33%';
      default:
        return '0%';
    }
  };

  return (
    <div className="mt-3 w-full font-[Montserrat] text-sm sm:text-base">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded h-2 overflow-hidden">
        <div
          className={`h-2 transition-all duration-500 ease-in-out ${getColor()}`}
          style={{ width: getWidth() }}
        />
      </div>

      {/* Strength Label */}
      {strength && (
        <p className="mt-2 text-gray-800 font-semibold">
          Password strength:
          <span
            className={`ml-2 capitalize ${getColor().replace('bg', 'text')}`}
          >
            {getLabel()}
          </span>
        </p>
      )}
    </div>
  );
};

export default PasswordStrengthMeter;
