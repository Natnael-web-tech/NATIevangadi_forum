import axios from "axios";

// Check if the app is running in production or development mode
const axiosInstance = axios.create({
  baseURL: "https://natievangadi-forumbackend-lh6o.onrender.com/api", // Production backend
  //  'http://localhost:2017/api'               // Local backend for development
});

export default axiosInstance;
