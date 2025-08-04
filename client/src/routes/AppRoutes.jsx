import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Auth Pages
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import VerifyOTP from '@/pages/auth/VerifyOTP';
import SuccessPage from '@/pages/auth/SuccessPage';

// Job Seeker Registration Steps
import BasicInfoSeeker from '@/pages/jobseeker/Register/BasicInfo';
import CareerInfo from '@/pages/jobseeker/Register/CareerInfo';
import Preferences from '@/pages/jobseeker/Register/Preferences';
import VerifySeeker from '@/pages/jobseeker/Register/Verify';
import SuccessSeeker from '@/pages/jobseeker/Register/Success';

// Job Poster Registration Steps
import BasicInfoPoster from '@/pages/jobposter/Register/BasicInfo';
import CompanyInfo from '@/pages/jobposter/Register/CompanyInfo';
import RoleDetails from '@/pages/jobposter/Register/RoleDetails';
import VerifyPoster from '@/pages/jobposter/Register/Verify';
import SuccessPoster from '@/pages/jobposter/Register/Success';

// Dashboards
import JobSeekerDashboard from '@/pages/jobseeker/Dashboard';
import JobPosterDashboard from '@/pages/jobposter/Dashboard';

// Components
import ProgressBar from '@/components/common/ProgressBar';

// 404 Page
const NotFound = () => (
  <div className="h-screen flex items-center justify-center text-2xl font-semibold text-red-600">
    404 - Page Not Found
  </div>
);

// Shared Layout for Registration with Progress
const RegisterLayout = ({ role, step, totalSteps, children }) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <ProgressBar progress={progress} />
      <div className="mt-4">{children}</div>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* 🔐 Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/auth/success" element={<SuccessPage />} />

      {/* 👤 Job Seeker Registration */}
      <Route
        path="/jobseeker/register/basic-info"
        element={<RegisterLayout role="seeker" step={1} totalSteps={5}><BasicInfoSeeker /></RegisterLayout>}
      />
      <Route
        path="/jobseeker/register/career-info"
        element={<RegisterLayout role="seeker" step={2} totalSteps={5}><CareerInfo /></RegisterLayout>}
      />
      <Route
        path="/jobseeker/register/preferences"
        element={<RegisterLayout role="seeker" step={3} totalSteps={5}><Preferences /></RegisterLayout>}
      />
      <Route
        path="/jobseeker/register/verify"
        element={<RegisterLayout role="seeker" step={4} totalSteps={5}><VerifySeeker /></RegisterLayout>}
      />
      <Route
        path="/jobseeker/register/success"
        element={<RegisterLayout role="seeker" step={5} totalSteps={5}><SuccessSeeker /></RegisterLayout>}
      />

      {/* 🧑‍💼 Job Poster Registration */}
      <Route
        path="/jobposter/register/basic-info"
        element={<RegisterLayout role="poster" step={1} totalSteps={5}><BasicInfoPoster /></RegisterLayout>}
      />
      <Route
        path="/jobposter/register/company-info"
        element={<RegisterLayout role="poster" step={2} totalSteps={5}><CompanyInfo /></RegisterLayout>}
      />
      <Route
        path="/jobposter/register/role-details"
        element={<RegisterLayout role="poster" step={3} totalSteps={5}><RoleDetails /></RegisterLayout>}
      />
      <Route
        path="/jobposter/register/verify"
        element={<RegisterLayout role="poster" step={4} totalSteps={5}><VerifyPoster /></RegisterLayout>}
      />
      <Route
        path="/jobposter/register/success"
        element={<RegisterLayout role="poster" step={5} totalSteps={5}><SuccessPoster /></RegisterLayout>}
      />

      {/* 🏠 Dashboards */}
      <Route path="/jobseeker/dashboard" element={<JobSeekerDashboard />} />
      <Route path="/jobposter/dashboard" element={<JobPosterDashboard />} />

      {/* ❌ Catch-all 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
