/**
 *    © 2022 React - Fetching API
 *    Author: Abraham Mitiku
 *
 *
 */
// -----------------------------------------------------------------
import React from "react";
import routes from "./routes/routes";
import { useRoutes } from "react-router-dom";

const App = () => {
  
  let elements = useRoutes(routes);

  return <>{elements}</>;
};

export default App;
