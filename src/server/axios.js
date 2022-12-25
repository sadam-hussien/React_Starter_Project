export default function Api(axios, store) {
  // const {
  //   auth: { user },
  // } = store.getState();
  const appClient = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    // baseURL: window.location.origin,
    headers: {
      Authorization: `Bearer`,
      Accept: "application/json",
      ContentType: "application/json",
      "Accept-Language": "en",
      "Content-Language": "en",
    },
  });
  appClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error.response);
    }
  );

  return appClient;
}
