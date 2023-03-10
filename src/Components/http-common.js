import axios from "axios";
export default axios.create({
  baseURL: "https://localhost:44301/api",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: true,
});