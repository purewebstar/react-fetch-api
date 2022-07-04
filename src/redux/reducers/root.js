/**
 *    © 2022 React - Fetching API
 *    Author: Abraham Mitiku
 *
 *
 */
// -----------------------------------------------------------------

/**
 *  Importing reducers and combining as ONE REDUCER
 */
import blog from './blogReducer';
import { combineReducers } from 'redux';

const root = combineReducers({
    blog,
    /**
     * if you have more reducers add them here for EASY MANAGEMENT
     */
})

export default root;