import { api } from '@/api'
import { AxiosError, AxiosResponse } from 'axios'
type HttpRequest = {
  url: string
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
  responseType?:
    | 'arraybuffer'
    | 'blob'
    | 'document'
    | 'formdata'
    | 'json'
    | 'stream'
    | 'text'
  body?: any
  params?: any
  headers?: any
}
export interface HttpClient<T = never> {
  request: (
    // eslint-disable-next-line no-unused-vars
    data: HttpRequest
  ) => Promise<{
    statusCode: number
    success: boolean
    body: T
    message?: string
  }>
}
export class AdapterRequest implements HttpClient {
  constructor() {}
  async request<T>(data: HttpRequest): Promise<{
    statusCode: number
    success: boolean
    body: T
    message: string
  }> {
    let axiosResponse: AxiosResponse
    /*     const response = await fetch(
      `http://localhost:3002/${data.url}`,
      {
        body: data.body,
        cache: 'no-store',
        headers: data.headers
          ? data.headers
          : { 'Content-Type': 'application/json' },
        method: data.method,
        mode: 'cors',
      }
    ).then((T) => T.json())
    console.log(response) */
    try {
      axiosResponse = await api({
        url: data.url,
        responseType: data.responseType,
        params: data.params,
        method: data.method,
        data: data.body,
        headers: data.headers,
      })
      return {
        statusCode: axiosResponse.status,
        success: true,
        message: 'Requisição feita com sucesso!',
        body: axiosResponse.data,
      }
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>

      return {
        statusCode: _error.response?.status ?? 200,
        message: _error.response?.data.message ?? 'Error',
        success: false,
        body: [] as T,
      }
    }
  }
}
