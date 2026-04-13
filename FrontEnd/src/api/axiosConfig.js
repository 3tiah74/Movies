import axios from "axios";

const baseURL = ""; // baseURl here

const api = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;