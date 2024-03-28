import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:3002'
  /*   proxy: {
    protocol: 'http',
    host: 'localhost',
    port: 3002,
  }, */
  /*   headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  } */
})
