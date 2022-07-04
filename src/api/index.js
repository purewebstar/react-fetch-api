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

export default instance;
