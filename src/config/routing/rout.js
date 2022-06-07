import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LogInFunction from "../../pages/login";
import SignUpFunction from "../../pages/signup";

export default function RoutingFunction() {
  return (
      <Router>
          <Routes>
              <Route path = "/log" element = {<LogInFunction/>}>
              </Route>
              <Route path = "/" element = {<SignUpFunction/>}>

              </Route>


          </Routes>


      </Router>
  );
};
