import axios from "axios";
const API_URL = "http://localhost:8080/";

export const RegisterAuth = (username, fullname, email, password) => {
  return axios.post(API_URL + "signup", {
    Params:{
      username,
      fullname,
      email,
      password,
    },
    Headers:{'Access-Control-Allow-Origin': '*'}
  });
};
export const LoginAuth = async (username, password) => {
  const response = await axios
        .post(API_URL + "signin", {
          Params:{
            username,
            password,
          },
          Headers:{'Access-Control-Allow-Origin': "*"}
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