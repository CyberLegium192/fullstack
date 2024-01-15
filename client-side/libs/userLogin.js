import axios from "axios";

// ====================== REGISTER =========================
export const registerUser = async (values) => {
    const response = await axios.post(
        `${import.meta.env.VITE_BASE_API}/user/register`,
        values
    );
    return response.data;
};


// ======================= LOGIN ===========================
export const loginUser = async (values) => {
    const response = await axios.post(
        `${import.meta.env.VITE_BASE_API}/user/login`,
        values
    );
    return response.data;
};



// ====================== PROFILE =========================
export const updateAvatar = async (id, values, token) => {
    const response = await axios.patch(
        `${import.meta.env.VITE_BASE_API}/user/profile/edit/avatar/${id}`,values,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }
    );
    return response.data;
};


// =================== PROFILE USER ======================
export const getProfile = async (newToken, dataToken) => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API}/user/profileUser`,
        {
          headers: {
            Authorization: `Bearer ${newToken || dataToken}`,
          }
        });
    return response.data;
};


// ==================== GET PROFILE ======================
export const getProfilePage = async (id) => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API}/user/profilePage/${id}`);
    return response.data.results[0];
};


// ==================== UPDATE BIO  ======================
export const updateBio = async (id, values) => {
    const response = await axios.patch(`${import.meta.env.VITE_BASE_API}/user/update/user/${id}`, values);
    return response.data;
};