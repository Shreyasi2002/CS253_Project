import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";

export const register = (username, fullname, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    fullname,
    email,
    password,
  });
};
export const login = async (username, password) => {
  const response = await axios
        .post(API_URL + "signin", {
            username,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};
export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};