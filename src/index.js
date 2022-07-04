
/**
 *    © 2022 React - Fetching API
 *    Author: Abraham Mitiku
 *
 *
 */
// -----------------------------------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/siteStyle.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
