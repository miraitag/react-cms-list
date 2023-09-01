import axios, { AxiosResponse } from "axios";

/**
 * Interceptor resolve when valid a type format axios response.
 * @param error type axios error.
 * @returns promise and reject error or type axios response.
 */
const interceptorResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data?.data ?? response.data ?? null;
};

/**
 * Axios instance for TDC endpoints.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.response.use(interceptorResponse);

export { api };
