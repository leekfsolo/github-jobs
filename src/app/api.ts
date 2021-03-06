import { doGet } from "../common/utils/baseAPI";
import { JOBS_BASE_URL } from "../common/utils/constants";

export const doGetJobList = (params?: Object) => {
  return doGet(`${JOBS_BASE_URL}/jobs`, params);
};

export const doGetJob = (id: number) => {
  return doGet(`${JOBS_BASE_URL}/jobs/${id}`);
};

export const doGetCompany = (id: number) => {
  return doGet(`${JOBS_BASE_URL}/companies/${id}`);
};
