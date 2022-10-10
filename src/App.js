import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Load from "./Load";
import Signup from "./Components/Signup/Signup";
import Howitworks from "./Components/Howitworks/Howitworks";
import Projectreferral from "./Components/Projectreferral/Projectreferral";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";
import Signupdashboard from "./Components/Signup/Signupdashboard";
import Password from "./Components/Signup/Password";
import { initSignupDashboard } from "./services/service";


function App() {
  const [authLoading, setAuthLoading] = useState(true);

  initSignupDashboard();

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
        {/* <div> */}
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
              <Route
                exact
                path="/signupDashboard"
                component={Signupdashboard}
              />
              <Route
                exact
                path="/password"
                component={Password}
              />
            </Switch>
          </div>
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
