/**
 *    © 2022 React - Fetching API
 *    Author: Abraham Mitiku
 *
 *
 */
// -----------------------------------------------------------------


export const GetBlog = {

    ALL: (payload) =>{
        return{
            type: 'GET_ALL_BLOG',
            payload: payload
        }
    }
}
