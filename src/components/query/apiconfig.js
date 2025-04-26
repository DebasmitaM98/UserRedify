import axios from "axios";

export const api = axios.create({
  baseURL: "https://satyabadiuser.ashish.buzz/api",
  headers: {
    "Content-Type": "application/json",
  },
});



api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle error globally
    return Promise.reject(error);
  }
);