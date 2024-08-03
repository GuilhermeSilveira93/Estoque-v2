import { env } from '@/@types/api'
import axios from 'axios'
export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_BASEURL,
  proxy: {
    protocol: env.NEXT_PUBLIC_PROTOCOL,
    host: env.NEXT_PUBLIC_HOST,
    port: env.NEXT_PUBLIC_PORTDATABASE,
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
