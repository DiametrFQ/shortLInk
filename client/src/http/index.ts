import axios from "axios";

const $host = axios.create({
  baseURL: "http://localhost:3001",
});

const $autHost = axios.create({
  baseURL: "http://localhost:3001",
});

export { $host, $autHost };
