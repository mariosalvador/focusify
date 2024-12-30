import axios from "axios";

const BASE_URL = "https://focusify-api.onrender.com";

export const _axios = axios.create({
  baseURL: BASE_URL,
});