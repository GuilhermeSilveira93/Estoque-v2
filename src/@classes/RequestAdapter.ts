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
  ) => Promise<{ statusCode: number, success: boolean, body: T }>;
}
export class AdapterRequest implements HttpClient {
  constructor() {}
  async request<T = never>(
    data: HttpRequest
  ): Promise<{ statusCode: number, success: boolean, body: T }> {
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
        body: axiosResponse.data
      };
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>;
      switch (_error.code) {
        case 'ERR_BAD_REQUEST':
          return {
            statusCode: _error.status ?? 200,
            success: false,
            body: [] as T
          };
        default: {
          return {
            statusCode: _error.status ?? 200,
            success: false,
            body: [] as T
          };
        }
      }
    }
  }
}
