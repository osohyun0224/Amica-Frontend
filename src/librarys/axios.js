import axios from "axios";

export const instance = axios.create({
  baseURL: "https://amica.prisism.io/api/",
  timeout: 10000,
});
