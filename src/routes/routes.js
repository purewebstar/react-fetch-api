/**
 *    © 2022 React - Fetching API
 *    Author: Abraham Mitiku
 *
 *
 */
// -----------------------------------------------------------------


/**
 *  Public route
 */
import Home from "../components/views/public/Home";

/**
 *  Layouts [Private, Public]
 *  Contains - [Outlet, Navigations ... etc]
 */
 import PublicLayout from "../components/layouts/PublicLayout";


const routes = [
    /**
     *  Public Views
     *  Directories:
     *  Views -> Public -> [Home,....]
     */
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { index: true, element: <Home /> },
      ],
    },

  ];
  export default routes;
  