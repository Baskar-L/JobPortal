import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaLinkedin, FaSignInAlt } from 'react-icons/fa';
import RoleTabs from '../../components/common/RoleTabs';
import AuthLayout from '../../layouts/AuthLayout'; // ✅ Import the layout

const Login = () => {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState('employee');
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      if (formData.email === 'baskar@gmail.com' && formData.password === '123456') {
        navigate(activeRole === 'employee' ? '/jobseeker/dashboard' : '/jobposter/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } else {
      setError('Please fill all fields');
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto bg-white bg-opacity-95 rounded-t-2xl shadow-xl p-8 font-[Montserrat]">
        <h1 className="text-3xl font-bold text-black text-center">LOGO</h1>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-black">Welcome Back</h1>
          <p className="text-gray-600 mb-4">Find your dream job</p>
        </div>

        <RoleTabs activeRole={activeRole} setActiveRole={setActiveRole} />

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email or Phone Number"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 transition"
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="accent-green-600"
              />
              Remember Me
            </label>
            <button
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="text-green-700 hover:underline hover:text-green-800 transition bg-white hover:bg-white"
            >
              Forgot Password?
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#005A3C] text-white py-3 rounded-md hover:bg-green-700 transition duration-300 transform hover:scale-105 shadow-md"
          >
            <FaSignInAlt className="text-white" /> Login
          </button>

          <div className="text-center text-sm text-gray-600">
            <p className="mt-2">or login with</p>
            <div className="flex justify-center gap-6 mt-3">
              <FaGoogle className="text-red-500 text-2xl cursor-pointer transition transform hover:scale-110" />
              <FaLinkedin className="text-blue-700 text-2xl cursor-pointer transition transform hover:scale-110" />
            </div>
          </div>

          <p className="text-sm text-center text-gray-700 mt-4">
            Don’t have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="text-green-700 hover:underline hover:text-green-800 transition bg-white hover:bg-white"
            >
              Register Now
            </button>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
