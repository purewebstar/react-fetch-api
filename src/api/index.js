/**
 *    © 2022 React - Fetching API
 *    Author: Abraham Mitiku
 *
 *
 */
// -----------------------------------------------------------------

import axios from "axios";
import config from "../config/config";

// creating instance
const instance = axios.create({
  baseURL: config.API_BASE_URL,
});

/**
 *  INTERCEPTING EVERY REQUESTS
 *  -> mainly used to attach authentications on a resource
 */
// intercepting every requests
instance.interceptors.request.use(async (config) => {
  /**
   *  FOR AUTHENTICATION API's
   *  Attach these headers
   * 
    const accessToken = JSON.parse(window.localStorage.getItem("access"));
    config.headers.Authorization = `Bearer ${accessToken}`;

   */
  config.headers.ContentType = "application/json";
  return config;
});


/**
 *  INTERCEPTING EVERY RESPONSES
 *  -> mainly used to renew token and/or send back another requests
 */

// intercepting every responses
instance.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (err) => {
    let originalConfig = err.config;
    //console.log(err.response, err.response.status);
    /**
     *  if an authorized access [401] send back to renew token
     */
    if (err.response.status === 401) {
      await instance
        .post(`renew_token_url`)
        .then((res) => {
          let { data } = res;
          // return your renewed token
          return data
        })
        .catch((err) => {
          return err;
        });
      /**
       * 
       * add renewed token to [cookies or session or localStorage]
       */
       // then return original config
      return instance(originalConfig);
    }
  }
);


export default instance;
