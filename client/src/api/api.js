import axios from "axios";

const api = axios.create({
  baseURL: "https://mmola-orthopro-site-mm.onrender.com",
});

export default api;
