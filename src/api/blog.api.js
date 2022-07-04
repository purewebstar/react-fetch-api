/**
 *    © 2022 React - Fetching API
 *    Author: Abraham Mitiku
 *
 *
 */
// -----------------------------------------------------------------

import instance from "./index";


export const getBlogs = {
    /**
     * 
     *  fetching all blogs about businesses
     */
    business: async() =>(

        await instance.get('/business')
    ),
}