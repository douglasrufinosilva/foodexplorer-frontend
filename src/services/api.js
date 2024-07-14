import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-foodexplorer-b4g0.onrender.com"
})