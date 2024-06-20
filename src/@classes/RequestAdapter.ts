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
  // eslint-disable-next-line no-unused-vars
  request: (data: HttpRequest) => Promise<{ statusCode: number, body: T }>;
}
export class AdapterRequest implements HttpClient {
  constructor() {}
  async request<T = never>(
    data: HttpRequest
  ): Promise<{ statusCode: number, body: T }> {
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
        body: axiosResponse.data
      };
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>;
      switch (_error.code) {
        case 'ERR_BAD_REQUEST':
          throw new Error('Falha ao realizar operação.', {
            cause: _error.code
          });
        default:
          throw new Error(_error.response?.data.message, {
            cause: _error.code
          });
      }
    }
  }
}
