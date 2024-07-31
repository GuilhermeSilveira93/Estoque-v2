import axios from 'axios'
export const api = axios.create({
  baseURL: 'http://localhost:3002/',
  proxy: {
    protocol: 'http',
    host: 'localhost',
    port: 3002,
  },
})
api.interceptors.request.use(
  function (request) {
    return request
  },
  function (error) {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
/*   headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  } */
