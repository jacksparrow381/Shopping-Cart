import axios from "axios";

export const instance = axios.create({
  baseURL: "https://backendapi.turing.com/products",
  timeout: 10000,
  headers: { "X-Custom-Header": "Asad Ur Rehman" },
});
