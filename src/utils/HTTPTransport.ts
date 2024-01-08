import { YA } from '../services';
import Router from './Router';

export const enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

// не нашел подходящий тип для данных формы, что юы совпали с типом xhr.send().
// Пока чтобы не отвелкаться на тс, поставил тут any.
type Options = {
  timeout?: number;
  method: METHODS;
  data?: any;
  headers?: Record<string, string>;
};

type HTTPMethod = <R = unknown>(
  url: string,
  options?: Omit<Options, 'method'>
) => Promise<R>;

export class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';

  protected _endpoint: string;

  constructor(endpoint: string) {
    this._endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get: HTTPMethod = (
    url = '/',
    options = {} as Omit<Options, 'method'>
  ) => {
    return this.request(
      this._endpoint + url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  public post: HTTPMethod = (
    url: string,
    options = {} as Omit<Options, 'method'>
  ) => {
    return this.request(
      this._endpoint + url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };

  public put: HTTPMethod = (
    url: string,
    options = {} as Omit<Options, 'method'>
  ) => {
    return this.request(
      this._endpoint + url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  };

  public patch: HTTPMethod = (
    url: string,
    options = {} as Omit<Options, 'method'>
  ) => {
    return this.request(
      this._endpoint + url,
      {
        ...options,
        method: METHODS.PATCH,
      },
      options.timeout
    );
  };

  public delete: HTTPMethod = (
    url: string,
    options = {} as Omit<Options, 'method'>
  ) => {
    return this.request(
      this._endpoint + url,
      {
        ...options,
        method: METHODS.DELETE,
      },
      options.timeout
    );
  };

  private request<Response>(
    url: string,
    options: Options = {
      method: METHODS.GET,
    },
    timeout = 5000
  ): Promise<Response> {
    const { method, data, headers = {} } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('no method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && !!data ? `${url}${YA.queryStringify(data)}` : url
      );
      xhr.timeout = timeout;

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 401) {
            Router.go('/');
          }
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject(reject(new Error('abort')));
      xhr.onerror = () => reject(reject(new Error('network error')));
      xhr.ontimeout = () => reject(reject(new Error('timeout')));

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data instanceof FormData ? data : JSON.stringify(data));
      }
    });
  }
}

export default HTTPTransport;
