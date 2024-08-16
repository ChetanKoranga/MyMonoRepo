import {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { requestErrorHandler, requestInterceptor } from "./requestInterceptor";
import {
  responseErrorHandler,
  responseInterceptor,
} from "./responseInterceptor";

interface Interceptors {
  request: AxiosInterceptorManager<AxiosRequestConfig>;
  response: AxiosInterceptorManager<AxiosResponse>;
}

const registerInterceptors = (interceptors: Interceptors) => {
  const { request, response } = interceptors;
  request.use(requestInterceptor, requestErrorHandler);
  response.use(responseInterceptor, responseErrorHandler);
};

export default registerInterceptors;
