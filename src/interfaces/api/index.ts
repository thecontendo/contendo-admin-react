import axios from 'axios';

const createClient = () => {
  const url = 'http://172.23.160.1:5004/api/'; //Config.API_URL;
  const client = axios.create({
    baseURL: url,
  });
  // @ts-ignore
  client.defaults.headers.post.Accept = 'application/json';

  client.interceptors.request.use(
    async config => {
        let token = localStorage.getItem('accessToken');
      if (token) {
        // @ts-ignore
        config.headers.Authorization = 'Bearer ' + token;
        // @ts-ignore
        config.headers['Content-Type'] = 'application/json';
        // @ts-ignore
        config.headers['Access-Control-Allow-Origin'] = '*';
      }
      console.log('Request: ');
      console.log(`${config.baseURL} ${config.url}`);
      return config;
    },
    error => {
      console.log('Request Error: ');
      console.log(error);
      return Promise.reject(error);
    },
  );

  client.interceptors.response.use(
    response => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      /* console.log('Response: ');
      console.log(response);*/
      return response?.data ?? response;
    },
    error => {
      try {
        /*  const nodeEnv = process.env.NODE_ENV;
          if (nodeEnv === 'development') {}*/
        /*  console.log('Response Error: ');
        console.log(error);*/
        if (error?.response?.status === 401) {
        }
      } catch (e) {}

      return Promise.reject(error);
    },
  );

  return client;
};

const api = createClient();

export default api;
