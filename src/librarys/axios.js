import axios from "axios";

export const instance = axios.create({
  baseURL: "http://amica.prisism.io:8080/",
  timeout: 10000,
});
