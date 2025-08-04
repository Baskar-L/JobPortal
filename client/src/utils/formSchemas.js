// src/utils/formSchemas.js
import * as yup from 'yup';

export const basicInfoSchema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
});

export const careerInfoSchema = yup.object({
  desiredRole: yup.string().required('Role is required'),
  experienceLevel: yup.string().required('Experience is required'),
  resume: yup.mixed().required('Resume is required'),
});

export const preferenceSchema = yup.object({
  location: yup.string().required('Location is required'),
  jobType: yup.string().required('Job type is required'),
});

export const passwordSchema = yup.object({
  password: yup.string().min(6).required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm your password'),
});