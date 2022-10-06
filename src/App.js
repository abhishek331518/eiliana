import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Load from "./load";
import Signup from "./Components/Signup/Signup";
import Howitworks from "./Components/Howitworks/Howitworks";
import Projectreferral from "./Components/Projectreferral/Projectreferral";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(`http://localhost:4000/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/Howitworks">
              How it Works
            </NavLink>
            <NavLink activeClassName="active" to="/Projectreferral">
              Project Referral
            </NavLink>
            <NavLink activeClassName="active" to="/login">
              Login
            </NavLink>
            <NavLink activeClassName="active" to="/Signup">
              Sign Up
            </NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Load} />
              <Route exact path="/Howitworks" component={Howitworks} />
              <Route
                exact
                path="/Projectreferral"
                component={Projectreferral}
              />
              <PublicRoute path="/login" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              {/* <PublicRoute path="/Signup" component={Signup} /> */}
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
