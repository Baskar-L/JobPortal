// src/utils/helpers.js
export const checkPasswordStrength = (password) => {
  let strength = 0;
  if (password.length > 5) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  const level = ['Weak', 'Fair', 'Good', 'Strong'];
  return level[strength - 1] || 'Very Weak';
};

export const maskPhone = (phone) => {
  return phone.replace(/.(?=.{4})/g, '*');
};
