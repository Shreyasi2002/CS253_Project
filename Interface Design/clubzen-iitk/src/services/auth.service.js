import axios from "axios";
const API_URL = "https://cs253-clubzen-iitk.herokuapp.com/";

export const RegisterAuth = (username, fullname, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    fullname,
    email,
    password,
  });
};
export const LoginAuth = async (username, password) => {
  const response = await axios
        .post(API_URL + "signin", {
            username,
            password,
        });
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        // window.location.reload();
    }
    return response.data;
};
export const LogoutAuth = () => {
    localStorage.removeItem("user");
    // window.location.reload();
    
};

export const GetCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};