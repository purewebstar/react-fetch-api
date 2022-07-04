/**
 *    © 2022 React - Fetching API
 *    Author: Abraham Mitiku
 *
 *
 */
// -----------------------------------------------------------------

import instance from "./index";


export const getBlog = {
    /**
     * 
     *  fetching all blogs about businesses
     */
    business: async() =>(

        await instance.get()
    ),
}

export const updateBlog = {
    /**
     * 
     *  For Updating blogs or any APIS
     * 
     
    [PATCH]

     business: async(id, data) =>(

        await instance.patch(`/${id}`, {data})
    ),

     / ------------  OR -----------------/

     [POST]

     business: async(id, data) =>(

        await instance.post(`/${id}`, {data})
    ),
     */
}

export const createBlog = {
    /**
     * 
     *  For CREATING API OPERATION
     * 


     [POST]

     business: async(data) =>(

        await instance.post('/your_url_', {data})
    ),
     */
}

export const deleteBlog = {
    /**
     * 
     *  For DELETE OPERATION OF API DATA'S [delete http]
     * 
     
    [PATCH]
    
     business: async(id) =>(

        await instance.delete(`/${id}`)
    ),

     */
}