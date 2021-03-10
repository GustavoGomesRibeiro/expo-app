import axios from "axios";

const api = axios.create({
  // baseURL: "https://backend-geoservice.herokuapp.com",
  baseURL: "http://192.168.0.169:3333",
});

export default api;
