import axios, { AxiosPromise } from "axios";

export const doGet = (url: string, params?: Object): AxiosPromise<any> => {
  return axios({
    url,
    params: {
      api_key: process.env.REACT_APP_KEY,
      ...params,
    },
    method: "GET",
  });
};
