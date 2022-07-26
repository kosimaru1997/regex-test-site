import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const axiosInterceptor = () => {
  // const accessToken = findAccessToken();

  // Add a request interceptor
  axios.interceptors.request.use(
    (config) => {
      const configDump = config;
      configDump.baseURL = process.env.REACT_APP_SERVER_BASE_URL;
      // configDump.headers = {
      //   Authorization: `Bearer ${accessToken}`,
      // };

      return configDump;
    },
    (error) =>
      // Do something with request error
      Promise.reject(error),
  );
  // Add a response interceptor
  axios.interceptors.response.use(
    (response) =>
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      response,
    (error) =>
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      Promise.reject(error),
  );
};
