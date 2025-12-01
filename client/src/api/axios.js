import axios from "axios";

// ✅ Set your backend URL as baseURL
const API = axios.create({
  baseURL: "https://mmola-orthopro-site-mm.onrender.com", // only the base URL
});

export default API;
