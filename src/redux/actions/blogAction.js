/**
 *    © 2022 React - Fetching API
 *    Author: Abraham Mitiku
 *
 *
 */
// -----------------------------------------------------------------


export const GetBlog = {

    BLOG: (payload) =>{
        return{
            type: 'GET_ALL_BLOG',
            payload: payload
        }
    }
}
