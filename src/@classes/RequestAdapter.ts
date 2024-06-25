import { api } from '@/api';
import { AxiosError, AxiosResponse } from 'axios';
type HttpRequest = {
  url: string,
  method: 'get' | 'post' | 'put' | 'delete' | 'patch',
  responseType?:
    | 'arraybuffer'
    | 'blob'
    | 'document'
    | 'formdata'
    | 'json'
    | 'stream'
    | 'text',
  body?: any,
  params?: any,
  headers?: any
};
export interface HttpClient<T = never> {
  request: (
    // eslint-disable-next-line no-unused-vars
    data: HttpRequest
  ) => Promise<{
    statusCode: number,
    success: boolean,
    body: T,
    message?: string
  }>;
}
export class AdapterRequest implements HttpClient {
  constructor() {}
  async request<T = never>(
    data: HttpRequest
  ): Promise<{
    statusCode: number,
    success: boolean,
    body: T,
    message: string
  }> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await api({
        url: data.url,
        responseType: data.responseType,
        params: data.params,
        method: data.method,
        data: data.body,
        headers: data.headers
      });
      return {
        statusCode: axiosResponse.status,
        success: true,
        message: 'Sucesso!',
        body: axiosResponse.data
      };
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>;
      return {
        statusCode: _error.response?.status ?? 200,
        message: _error.response?.statusText ?? 'Error',
        success: false,
        body: [] as T
      };
    }
  }
}
