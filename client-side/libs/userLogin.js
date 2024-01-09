import axios from 'axios';

// ====================== REGISTER =========================
export const registerUser = async (values) => {
  const response = await axios.post(`${import.meta.env.VITE_BASE_API}/user/register`, values)
  return response.data
}