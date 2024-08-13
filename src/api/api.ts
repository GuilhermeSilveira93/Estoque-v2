import { env } from '@/@types/api'
import { token } from '@/@utils'
import axios from 'axios'
export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_BASEURL,
  proxy: {
    protocol: env.NEXT_PUBLIC_PROTOCOL,
    host: env.NEXT_PUBLIC_HOST,
    port: env.NEXT_PUBLIC_PORTDATABASE,
  },
  withCredentials: true,
})
api.interceptors.request.use(
  async (config) => {
    const accessToken = await token()
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
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
