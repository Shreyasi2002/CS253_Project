import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "hhttps://cs253-signin-signup.herokuapp.com/api/test/";

export const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

export const getUserContent = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

export const getAdminContent = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
