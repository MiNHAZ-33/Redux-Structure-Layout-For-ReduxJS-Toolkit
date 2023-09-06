import axios from "axios";

const API_URL = "/user/";

const register = async (userData) => {
  const response = await axios.post(API_URL + "add", userData);
  if (response.data) {
    console.log("Got the response");
  }
  return response.data;
};

const authService = { register };

export default authService;
