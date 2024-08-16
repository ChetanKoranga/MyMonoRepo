import { AxiosResponse } from "axios";

const responseInterceptor = (response: AxiosResponse) => {
  const { data, headers } = response;
  return { data, headers };
};

const responseErrorHandler = (error: any) => {
  const errorObject = { ...error, status: error?.response?.status };
  return Promise.reject(errorObject);
};

export { responseInterceptor, responseErrorHandler };
