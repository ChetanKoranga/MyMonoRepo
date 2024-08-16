import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import environment from "../../../config/environment";
import registerInterceptors from "../interceptors";
import { APP_CONSTANTS } from "../../../data/constants";

/**
 * Singleton class that provides instance methods to perform HTTP network operations.
 * It provides wrapper methods over axios library (https://www.npmjs.com/package/axios).
 *
 * @example
 * import { httpService } from './service';
 *
 * Host - http://api.example.com                  // Defined in environment config.
 * Namespace - dev                                // Defined in environment config.
 *
 * httpService.get("/example");
 *
 * Request URL - http://api.example.com/dev/example
 * Request Method - GET
 * Request Headers -
 *     Content-Type: application/json
 */
class HttpService {
  /**
   * Base configuration for all the HTTP requests.
   */
  private baseConfiguration: AxiosRequestConfig = {
    url: "",
    method: APP_CONSTANTS.HTTP.METHOD.GET,
    baseURL: this.prepareBaseURL(),
    headers: {
      "Content-Type": "application/json",
    },
  };

  /**
   * Constructor that registers interceptors in axios.
   */
  constructor() {
    registerInterceptors(axios.interceptors);
  }

  /**
   * Performs a GET network request to remote backend api server.
   *
   * @param  {String} url - Relative path to the request url
   * @param  {Object} params - Query params objects
   * @param  {Object} options - Optional axios configuration to override defaults for this service.
   */
  public get(
    url: string,
    params: Record<string, string | number | boolean> = {},
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const settings: AxiosRequestConfig = {
      method: APP_CONSTANTS.HTTP.METHOD.GET,
      url,
      params,
      ...options,
    };

    return this.prepareRequest(settings);
  }

  /**
   * Performs a POST network request to remote backend api server.
   *
   * @param  {String} url - Relative path to the request url
   * @param  {Object} data - Request payload object for post calls to backend api server.
   * @param  {Object} params - Query params objects
   * @param  {Object} options - Optional axios configuration to override defaults for this service.
   */
  public post(
    url: string,
    data: any,
    params: Record<string, string | number | boolean> = {},
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const settings: AxiosRequestConfig = {
      method: APP_CONSTANTS.HTTP.METHOD.POST,
      url,
      data,
      params,
      ...options,
    };

    return this.prepareRequest(settings);
  }

  /**
   * Performs a PUT network request to remote backend api server.
   *
   * @param  {String} url - Relative path to the request url
   * @param  {Object} data - Request payload object for post calls to backend api server.
   * @param  {Object} params - Query params objects
   * @param  {Object} options - Optional axios configuration to override defaults for this service.
   */
  public put(
    url: string,
    data: any,
    params: Record<string, string | number | boolean> = {},
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const settings: AxiosRequestConfig = {
      method: APP_CONSTANTS.HTTP.METHOD.PUT,
      url,
      data,
      params,
      ...options,
    };

    return this.prepareRequest(settings);
  }

  /**
   * Performs a PATCH network request to remote backend api server.
   *
   * @param  {String} url - Relative path to the request url
   * @param  {Object} data - Request payload object for post calls to backend api server.
   * @param  {Object} params - Query params objects
   * @param  {Object} options - Optional axios configuration to override defaults for this service.
   */
  public patch(
    url: string,
    data: any,
    params: Record<string, string | number | boolean> = {},
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const settings: AxiosRequestConfig = {
      method: APP_CONSTANTS.HTTP.METHOD.PATCH,
      url,
      data,
      params,
      ...options,
    };

    return this.prepareRequest(settings);
  }

  /**
   * Performs a DELETE network request to remote backend api server.
   *
   * @param  {String} url - Relative path to the request url
   * @param  {Object} data - Request payload object for post calls to backend api server.
   * @param  {Object} options - Optional axios configuration to override defaults for this service.
   */
  public delete(
    url: string,
    data: any,
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const settings: AxiosRequestConfig = {
      method: APP_CONSTANTS.HTTP.METHOD.DELETE,
      url,
      data,
      ...options,
    };

    return this.prepareRequest(settings);
  }

  /**
   * Prepares the base URL for the request based on the environment configuration.
   */
  private prepareBaseURL(): string {
    let baseURL = `${environment.network.host}`;

    if (environment.network.namespaces.v1) {
      baseURL = `${baseURL}/${environment.network.namespaces.v1}`;
    }
    return `${baseURL}/`;
  }

  /**
   * Prepares the request by merging base configuration and service specific configuration.
   *
   * @param  {Object} settings - Configuration for this particular service call
   */
  private prepareRequest(settings: AxiosRequestConfig): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {
      ...this.baseConfiguration,
      ...settings,
    };

    console.log("config", config);

    if (settings.namespace) {
      config.baseURL = `${environment.network.host}/${
        environment.network.namespaces[settings.namespace]
      }/`;
    }
    return this.makeRequest(config);
  }

  /**
   * Makes the request to the backend api server.
   *
   * @param  {Object} request - Axios request configuration
   */
  private makeRequest(request: AxiosRequestConfig): Promise<AxiosResponse> {
    console.log("request", request);

    return axios({ ...request }).then(
      (response: AxiosResponse) => response,
      (error: any) => Promise.reject(error)
    );
  }
}

export default new HttpService();
