/**
 *    © 2022 React - Fetching API
 *    Author: Abraham Mitiku
 *
 *
 */
// -----------------------------------------------------------------


const initialState = {
    all: []
};

const blogReducer = (state = initialState, action)=>{

    switch(action.type){
        
        case 'GET_ALL_BLOG':
            return {
                ...state,
                all: action.payload
            }
        default:
            return state;
    }

};

export default blogReducer;