import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // must match backend
});

export default API;

import API from "../api/axios.js";

await API.post("/auth/register", { email, password });

