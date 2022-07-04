/**
 *    © 2022 React - Fetching API
 *    Author: Abraham Mitiku
 *
 *
 */
// -----------------------------------------------------------------

import React from 'react';
import {Outlet} from 'react-router-dom';


const PublicLayout = () =>{

    return(
        <>
         <Outlet />
        </>
    )
};

export default PublicLayout;