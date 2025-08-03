import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dirty-dog-api.onrender.com/api",
  withCredentials: true, // if using cookies
});

export default axiosInstance;
