import { ACCESS_TOKEN_KEY } from "@/utils/constant";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback } from "react";

export const METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  PATCH: "patch",
};

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const headersConfig = {
  "Content-Type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

interface UseAxiosResponse<T> {
  requestApi: (
    method: string,
    url: string,
    data?: any,
    header?: Record<string, string>
  ) => Promise<T>;
}

const useAxios = (): UseAxiosResponse<any> => {
  const client = axios.create();

  client.interceptors.request.use(
    (config: any) => {
      let accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

      if (!accessToken) {
        config.headers.Authorization = null;
        return config;
      }

      if (accessToken && config.headers) {
        config.headers.Authorization = `bearer ${accessToken}`;
        return config;
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const requestApi = useCallback(
    async (method: string, url: string, data?: any, header = {}) => {
      let params: AxiosRequestConfig = {};

      method === METHOD.GET
        ? (params = { params: data })
        : (params = {
            data: data instanceof FormData ? data : JSON.stringify(data),
          });

      if (!data) params = {};

      const axiosParams: AxiosRequestConfig = {
        method,
        url: `${BASE_URL}${url}`,
        ...params,
        headers: {
          ...headersConfig,
          ...header,
        },
        timeout: 30000,
      };

      const result: AxiosResponse = await client(axiosParams);

      return result.data;
    },
    []
  );

  return { requestApi };
};

export default useAxios;
