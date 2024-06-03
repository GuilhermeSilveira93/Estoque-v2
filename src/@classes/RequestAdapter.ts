import { api } from '@/api';
import { AxiosError, AxiosResponse } from 'axios';
type HttpRequest = {
  url: string,
  method: 'get' | 'post' | 'put' | 'delete' | 'patch',
  body?: any,
  params?: any,
  headers?: any
};
export interface HttpClient<T = any> {
  request: (data: HttpRequest) => Promise<T>;
}
export class AxiosAdapterRequest implements HttpClient {
  async request(data: HttpRequest) {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await api({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      });
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>;
      throw new Error(_error?.response?.data?.message);
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    };
  }
}

export const RequestAdapterFactory = (): HttpClient =>
  new AxiosAdapterRequest();
