const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/user/login`,
  SIGNUP: `${API_BASE_URL}/user/signup`,
  PROFILE: `${API_BASE_URL}/user/profile`,
};

export default API_BASE_URL;