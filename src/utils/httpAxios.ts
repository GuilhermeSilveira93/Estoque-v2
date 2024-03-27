import axios from "axios";

export const http = axios.create({
  baseURL: 'http://localhost:3001',
/*   proxy: {
    protocol: 'http',
    host: 'localhost',
    port: 3001,
  }, */
/*   headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  } */
});
