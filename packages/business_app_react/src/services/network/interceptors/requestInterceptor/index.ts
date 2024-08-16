import { AxiosRequestConfig } from "axios";
import { CommonUtil } from "../../../../utils";
import { authenticationService } from "../../..";

const getCustomHeaders = () => {
  const headers: Record<string, string> = {
    breadcrumbId: CommonUtil.getUuid(),
  };

  if (authenticationService.token) {
    headers.Authorization = `Bearer ${authenticationService.token.accessToken}`;
  }
  return headers;
};

const requestInterceptor = (config: AxiosRequestConfig) => {
  const configCopy: AxiosRequestConfig = { ...config };
  const headers = getCustomHeaders();
  configCopy.headers = { ...configCopy.headers, ...headers };
  return configCopy;
};

const requestErrorHandler = (error: any) => {
  return Promise.reject(error);
};

export { requestInterceptor, requestErrorHandler };
