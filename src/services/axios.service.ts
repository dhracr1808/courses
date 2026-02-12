import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

let axiosInstance: AxiosInstance;

const createAxios = (baseURL: string) => {
  axiosInstance = axios.create({ baseURL });
};

const setupInterceptors = () => {
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      config.headers.set("Autorization Berearer: ", "123456789abd");
      console.log("request made to: ", config.url);
      return config;
    },
    (err) => {
      return Promise.reject(err);
    },
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log("reponse from: ", response.config.url);
      return response;
    },
    (err) => {
      if (err.response)
        console.log("Error response: ", err.response.config.url);
      else console.log("Error ", err.messge);
      return Promise.reject(err);
    },
  );
};

export const initAxios = () => {
  createAxios("https://rickandmortyapi.com/api");
  setupInterceptors();
  return axiosInstance;
};
