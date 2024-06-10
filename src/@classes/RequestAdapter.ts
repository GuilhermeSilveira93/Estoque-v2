import { api } from '@/api';
import { AxiosError, AxiosResponse } from 'axios';
type HttpRequest = {
  url: string,
  method: 'get' | 'post' | 'put' | 'delete' | 'patch',
  body?: any,
  params?: any,
  headers?: any
};
export interface HttpClient {
  request: (data: HttpRequest) => Promise<{ statusCode: number, body: any }>;
}
export class AdapterRequest implements HttpClient {
  constructor() {}
  async request(data: HttpRequest) {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await api({
        url: data.url,
        params: data.params,
        method: data.method,
        data: data.body,
        headers: data.headers
      });
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>;
      throw new Error(_error?.response?.data?.message, {
        cause: _error.cause
      });
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    };
  }
}
