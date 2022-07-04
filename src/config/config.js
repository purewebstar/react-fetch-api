/**
 *    © 2022 React - Fetching API
 *    Author: Abraham Mitiku
 *
 *
 */
// -----------------------------------------------------------------

/**
 *  Go to newsapi.org -> and get your API KEY to retreive blog API's
 * 
 */

let API_KEY = ``;

const config = {
    API_BASE_URL: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`,
};

export default config;