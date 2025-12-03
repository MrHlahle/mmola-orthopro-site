import axios from "axios";

const api = axios.create({
  baseURL: "https://mmola-orthopro-site-server.onrender.com",
});

export default api;
